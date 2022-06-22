import React from "react";

export const LandingPreview = (props) => {

    const landing = props.landing
    return (
        <section className="landing-preview">
            <div className="landing-preview-container">
                <div className="preview-img">
                    {/* <img src={landing.links.patch.small} width='100' height="100" alt="" /> */}
                    {/* <video src={landing.links.webcast} width="130px" height="100px"></video>
                     */}
                    <iframe src={"https://www.youtube.com/embed/" + landing.links.youtube_id} frameborder="0"></iframe>
                </div>

                <div className="preview-text">
                    <p>{landing.name}</p>
                    <p className="preview-desc">{landing.details}</p>

                </div>
            </div>
        </section >
    )
}