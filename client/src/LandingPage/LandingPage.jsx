import React from "react";
import AltosCarrousel from "../Components/AltosCarrousel";
import Footer from "../Components/Footer";
import MonteCarrousel from "../Components/MonteCarrousel";
import NavBar from "../Components/NavBar";
import RepublicaCarrousel from "../Components/RepublicaCarrousel";
import './LandingPage.scss';

export default function LandingPage() {
    return (
        <div>
            <NavBar />


            <div className="title">
                <h1>Nuestros Loteos</h1>
            </div>


            <div className="carrousel-div">
                <div className="single-carrousel">
                    <div className="lote-title">
                        <h3>Altos de Espora</h3>
                    </div>
                    <AltosCarrousel />
                </div>
                <div className="single-carrousel">
                    <div className="lote-title">
                        <h3>República</h3>
                    </div>
                    <RepublicaCarrousel />
                </div>
                <div className="single-carrousel">
                    <div className="lote-title">
                        <h3>Altos de Montevere</h3>
                    </div>
                    <MonteCarrousel />
                </div>
            </div>

        <Footer/>
        </div>

    )
}