import React from 'react'
import './index.css'
import { deleteBlocks } from '../../lib'
const Navigation = () => {
    return (
        <div id="navigation">
            <div id="leftside">
                <div id="details">
                    <div id="back"><img src="assets/arrow.svg" alt="img"/></div>
                    <div id="names">
                        <p id="title">Your automation pipeline</p>
                        <p id="subtitle">Marketing automation</p>
                    </div>
                </div>            
            </div>
            <div id="centerswitch">
                <div id="leftswitch">Diagram view</div>
                <div id="rightswitch">Code editor</div>
            </div>
            <div id="buttonsright">
                { <div id="removeblock" onClick={deleteBlocks}>Delete blocks</div> }
            </div>
        </div>
    )
}
export default Navigation