import * as React from 'react';
import marinaPic from "./assets/marina-pic.jpg";

export function Person ({about}) {
    const {id, pic, name, job, aboutMe} = about;

    return <div className={"info-individual"}>
            <div className={"container-profile-pic"}>
                <img className={"member-photo"} src={pic}/>
            </div>
        <h4 className={"team-name"}>{name}</h4>
        <h5 className={"job"}>{job}</h5>
        <h5 className={"description-member"}>{aboutMe}</h5>

    </div>


}