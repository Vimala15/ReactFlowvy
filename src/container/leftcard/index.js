import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Draggable from '../../components/draggable';
import './index.css';
function LeftCard(props){
    const appstore = useSelector(state=> state.app);
    return (
        <div id="leftcard">
            <div id="closecard">
                <img src="assets/closeleft.svg" alt="img"/>
            </div>
            <p id="header">Blocks</p>
            <div id="search">
                <img src="assets/search.svg" alt="img"/>
                <input type="text" placeholder="Search blocks" />
            </div>
            <div id="blocklist">
            {appstore.blocks.map((block,i)=>
                <Draggable block={block} onDragStart={props.onDragStart} onMouseUp={props.onMouseUp} key={i}/>
            )}
            </div>
        </div>
    )
}
export default LeftCard