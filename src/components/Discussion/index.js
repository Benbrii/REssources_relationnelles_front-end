import React from 'react'
import img from '../../assets/img/faceMan.jpeg'
import './style.css'

const Dicscussion = () => (
<div className="container">
    <div className="row">
        <div className="col-sm">
            <div className="minDiscussion">
                <div className="pictureProfile"> 
                    <img src={img} alt="Chalie Lamenace"/>
                </div>
                <div>
                    <div>
                        <a className="nameUser">Chalie Lamenace</a>
                    </div>
                    <div>
                        <p className="discutionUser">Salut j'ai vu ton front-end sur gitHub, j'aimerais que l'on fasse plus ample connaissence pour ce dévoiler notre back-end.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm">
            <h3>Discution privé</h3>    
        </div>
    </div>
</div>
)
export default Dicscussion