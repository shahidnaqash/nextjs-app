import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import HomePage from '../src/components/home/Home'
import Header from '@/src/components/header/Header'
import Footer from '@/src/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/e.png" />
      </Head>

      {/* <Header /> */}
      <HomePage data={data} />
      {/* <Footer /> */}

    </>
  )
}


export async function getServerSideProps(context) {
  const { events_categories } = await import('data/data.json')
  return {
    props: {
      data: events_categories
    },
  }
}