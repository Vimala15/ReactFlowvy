import React  from 'react'
import {ReactFlowy } from './lib'
import Navigation from './container/navigation'
import LeftCard from './container/leftcard'
import PropsWrap from './container/propswrap'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css'

const store = configureStore();

const snapping = (drag, first) => {
    var grab = drag.querySelector(".grabme");
    grab.parentNode.removeChild(grab);
    var blockin = drag.querySelector(".blockin");
    blockin.parentNode.removeChild(blockin);
    var id = drag.querySelector(".blockelemtype").value - 1; 
    var block = store.getState().app.blocks[id];
    drag.innerHTML += `<div class='blockyleft'><img src=${block.newimg}><p class='blockyname'>${block.blocktitle}</p></div>
    <div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div>
    <div class='blockyinfo'>${block.blockyinfo}</div>`;
  return true;
}

const App = () => {
        return (
        <Provider store={store}>
            <div className="app-container">
            <Navigation />
            <ReactFlowy id="reactFlowyCanvas" drag = {(block) =>{console.log("Dragging")}} release = {() =>{console.log("Release")}} 
                snapping={snapping} >
            </ReactFlowy>
            <PropsWrap />
            </div>
          </Provider>
        );
      }

export default App;