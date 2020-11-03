import React from 'react';

import { FaWhatsapp } from "react-icons/fa";


import '../styles/components/primarybutton.css';


export default function PrimaryButton() {
    return(
        <div className="contact-info">
            <button type="button">
                <FaWhatsapp  size={35} color="#25c864" />
                Entrar em contato
            </button>
        </div>
    );

}