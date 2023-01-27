import React from 'react'
import { Helmet } from 'react-helmet'
import SignUpSec from '../components/Home/SignUpSec/SignUpSec'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <SignUpSec />
        </>
    )
}

export default Home