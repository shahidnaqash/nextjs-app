import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Singleevent from '@/src/components/Events/Singleevent'


function SingleEvent({ singleEvent }) {
    return (
        <Singleevent singleEvent={singleEvent} />
    )
}

export default SingleEvent

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json')
    let paths = allEvents.map(item => {
        return {
            params: {
                category: item.city,
                id: item.id
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const { params } = context
    const { allEvents } = await import('/data/data.json')
    let singleEvent = allEvents.find(item => item.id == params.id)

    return {
        props: {
            singleEvent: singleEvent
        }
    }
}