import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Events({ data }) {
    return (
        <div>
            <h3>Events</h3>
            <div>
                {
                    data.map(item => (
                        <Link key={item.id}
                            href={`/events/${item.id}`} passHref >
                            <Image
                                width='100'
                                height={100}
                                src={item.image}
                                alt="Picture of the author"
                            />
                            <h4>{item.title}</h4>
                        </Link>
                    ))
                }


            </div>

        </div>
    )
}

export default Events

export async function getStaticProps(context) {
    const { events_categories } = await import('data/data.json')
    return {
        props: {
            data: events_categories
        },
    }
}