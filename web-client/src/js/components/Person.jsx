import * as React from 'react';
import marinaPic from "./assets/marina-pic.jpg";

export function Person ({about}) {
    const {id, pic, name, job, aboutMe} = about;

    return <div className={"infoIndividual"}>
            <div className={"containerProfilePic"}>
                <img src={pic} alt={"Pic of a team member"}/>
            </div>
        <h4 className={"teamName"}>{name}</h4>
        <h5 className={"job"}>{job}</h5>
        <h5 className={"descriptionMember"}>{aboutMe}</h5>

    </div>


}