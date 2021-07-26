import * as React from "react";
import {Person} from "./Person";

export function PeopleList({people}) {
    return (<section className={"team-info"}>
            {people.map((about)=> (
                <Person about={about}/>
            ))}
        </section>

    );
}