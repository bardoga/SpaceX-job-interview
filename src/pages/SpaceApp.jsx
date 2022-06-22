import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LandingList } from '../cmps/LandingList.jsx'


// import { landingService } from '../services/landings.service.js';
export const SpaceApp = () => {

    const [landings, setLandings] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches')
            .then(res => {
                console.log(res.data)
                const sliced = res.data
                const slicedArray = sliced.slice(0, 20)

                setLandings(slicedArray)
                console.log(slicedArray)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <section className="space-app">
            <header className="app-header">
                <h1>SpaceX Launch Programs</h1>
            </header>
            <div className="main-app">

                {/* if (!landings) return <div>Loading...</div> */}
                <LandingList landings={landings} />
            </div>

        </section>
    )
}