import path from 'path'
import fs from 'fs'

function getPath() {
    return path.join(process.cwd(), 'data', 'data.json')
}
function getEvents(path) {
    const Events = fs.readFileSync(path)
    return JSON.parse(Events)
}
export default function handler(req, res) {

    let { allEvents, events_categories } = getEvents(getPath());
    if (!allEvents) return res.status(400).json({ msg: 'No Events' })
    if (req.method == 'POST') {
        let { id, email } = req.body;
        let newEvents = allEvents.map(item => {
            if (item.id == id) {
                if (item.emails_registered.includes(email)) {
                    res.status(409).json({
                        msg: 'Email already registered'
                    })
                    return item
                }
                return {
                    ...item,
                    emails_registered: [...item.emails_registered, email]
                }
            }
            return item
        })
        fs.writeFileSync(getPath(), JSON.stringify({
            events_categories,
            allEvents: newEvents
        }))
        res.status(200).json({
            msg: `your email is registered successfully! ${email}`
        })

    }
}
