import * as React from "react";
import montseny from "./assets/montseny.jpg";

export const Experiencias = () => <section>

    <div className="card">
        <div className="card-header">
            <div className="profile">
                <span className="letter">Hola</span>
            </div>
            <div className="card-title-group">
                <h5 className="card-title">Hola</h5>
                <div className="card-date">Hola</div>
            </div>
        </div>
        <img className="card-image" src={montseny} alt="Logo" />
        <div className="card-text">Hola</div>
        <div className="card-like-bar">
            {/*git{props.liked ? (*/}
            {/*    <img className="card-like-icon" src={heartFill} alt="Logo" />*/}
            {/*) : (*/}
            {/*    <img className="card-like-icon" src={heartOutline} alt="Logo" />*/}
            {/*)}}
            <div className="like-text">
                <b>Hola</b> kişi bu tarifi beğendi.
            </div>
        </div>
    </div>
    );


</section>
