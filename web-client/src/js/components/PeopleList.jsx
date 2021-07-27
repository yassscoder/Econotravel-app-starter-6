import * as React from "react";
import {Person} from "./Person";

export function PeopleList({people}) {
    return (<section className={"teamInfo"}>
            {people.map((about)=> (
                <Person about={about}/>
            ))}
        </section>

    );
}