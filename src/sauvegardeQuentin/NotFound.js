import React from 'react';
import {NavLink} from 'react-router-dom';
import { HomeOutlined} from '@ant-design/icons';


const NotFound = () => {
    return (
        <div className="norFound">
            <div className="norFoundContent">
                <h3>Désolé, cette page n'existe pas!</h3>
                <NavLink exact to ="/"/>
                <HomeOutlined />
                <span>Accueil</span>
            </div>
        </div>
    );
};

export default NotFound;