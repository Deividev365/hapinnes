import React from "react";
import {FiArrowUpLeft} from 'react-icons/fi';
import { useHistory } from "react-router-dom";

import mapMarkerImg from '../images/mapMark.svg';

import '../styles/components/sidebar.css';

export default function SideBar() {

    const {goBack} = useHistory();
    
    return(
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy-logo"/>

            <footer>
                    <button type="button" onClick={goBack}>
                    <FiArrowUpLeft size={24} color="#ffff"/>
                    </button>
            </footer>
        </aside>
    );
}