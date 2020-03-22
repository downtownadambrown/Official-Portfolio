import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FaTeamspeak } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { GiF1Car } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";

const Home = (props) => {
    return (
        <div className="home d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-md-column flex-sm-row align-items-center">
                <h3 className="headline">Hello.</h3>
                <h3 className="headline">I am Adam Brown.</h3>
            </div>
            <div className="fluid-container row tile-container">
                <div className="col-md-6 col-sm-12">
                    <div className="buttonTile d-flex flex-md-row-reverse align-items-center">
                        <FaTeamspeak className="m-3" size="50px" />
                        <span>Gamer</span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="buttonTile d-flex align-items-center">
                        <DiJsBadge className="m-3" size="50px" />
                        <span>Coder</span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="buttonTile d-flex flex-md-row-reverse align-items-center">
                        <GiF1Car className="m-3" size="50px" />
                        <span>Engineer</span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="buttonTile d-flex align-items-center">
                        <FaRegLightbulb className="m-3" size="50px" />
                        <span>Mentor</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [currentPage, getCurrentPage] = useState(<Home />);

    return currentPage;
};

export default App;
