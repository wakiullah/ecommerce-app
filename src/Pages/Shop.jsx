import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'


export default function Shop() {
    return (
        <div>
            <Hero />
            <Popular />
            <Offer />
            <NewCollection />
            <NewsLetter />
        </div>
    )
}
