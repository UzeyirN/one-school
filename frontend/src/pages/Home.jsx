import React from 'react'
import { Helmet } from 'react-helmet'
import Iframe from '../components/Home/Iframe'
import OurPrograms from '../components/Home/OurPrograms/OurPrograms'
import OurTeachers from '../components/Home/OurTeachers/OurTeachers'
import SignUpSec from '../components/Home/SignUpSec/SignUpSec'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <SignUpSec />
            <OurPrograms />
            <OurTeachers />
            <Iframe />
        </>
    )
}

export default Home