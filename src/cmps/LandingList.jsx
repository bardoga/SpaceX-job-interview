import React from "react";
import { useEffect } from "react";
import { LandingPreview } from "./LandingPreview.jsx";

export const LandingList = (props) => {

    useEffect(() => {
        console.log(props.landings)
    })

    const landings = props.landings
    return (
        <section className="landing-list-section">

            <div className="landing-list-container">
                {landings.map(landing => {
                    return (
                        <LandingPreview landing={landing} key={landing.id} />
                    )
                }
                )}


            </div>

        </section>




    )

}
