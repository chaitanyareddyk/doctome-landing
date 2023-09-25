import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Doctome - Doctor at your doorstep.</title>
        <meta
          name="description"
          content="A mobile app, providing at-home doctor consultations with complete home medical management for users, while enabling doctors to reach more patients."
        />
        {/* <link rel="shortcut icon" href="/doctome-favicon.png" /> */}

      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        {/* <Pricing /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
