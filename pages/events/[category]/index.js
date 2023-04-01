import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Events from '@/src/components/Events/Events'

function EventsPlace({ data }) {
    return (
        <Events data={data} />

    )
}

export default EventsPlace

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json')
    let paths = events_categories.map(item => {
        return {
            params: { category: item.id }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const { params } = context
    const { allEvents } = await import('/data/data.json')
    let filteredData = allEvents.filter(item => item.city == params.category)
    console.log(filteredData)
    return {
        props: {
            data: filteredData
        },
    }
}