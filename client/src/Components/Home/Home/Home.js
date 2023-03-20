import React from 'react'
import { Footer } from '../../Shared/Footer/Footer'
import { AboutUs } from '../AboutUs/AboutUs'
import { Choose } from '../Choose/Choose'
import { Header } from '../Header/Header'
import { HealthTip } from '../HealthTip/HealthTip'
import { Training } from '../Training/Training'


export const Home = () => {
    return (
        <div >
            <Header/>
            <HealthTip/>
            <AboutUs/>
            <Training/>
            <Choose/>
            <Footer/>
        </div>
    )
}
