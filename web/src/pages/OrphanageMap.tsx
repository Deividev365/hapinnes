import React from 'react';
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'


import mapMarkerImg from '../images/mapMark.svg';
import mapIcon from '../utils/mapIcon';


import '../styles/pages/orphanage-map.css';


function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy-logo"/>

                    <h2>Choose an orphanage in the map.</h2>
                    <p>Many kids are waiting for your come :)</p>
                </header>

                <footer>
                    <strong>Arujá | </strong>
                    <span>São Paulo</span>
                </footer>
                </aside>

                <Map
                    center={[-23.3915808,-46.3502798]}
                    zoom={17}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

                    <Marker

                        icon={mapIcon}
                        position={[-23.3934334,-46.3326411]}
                    >
                         <Popup 
                            closeButton={false}
                            minWidth={240}
                            maxWidth={240}
                            className="map-popup"
                        >
                            Lar das Meninas

                            <Link to="/Orphanages/1">
                                <FiArrowRight 
                                    size={20}
                                    color="#fff"
                                />
                            </Link>

                        </Popup>
                    </Marker>
                </Map> 
            

                <Link to="/Orphanage/create" className="create-orphanage">
                    <FiPlus size={32} color="black"/>
                </Link>
        </div>
    );
}

export default OrphanagesMap;