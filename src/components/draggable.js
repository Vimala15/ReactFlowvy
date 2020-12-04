import React from 'react';
function Draggable(props){
    return (
        <div className="blockelem create-flowy noselect" draggable="true"
            onDragStart={props.onDragStart} onMouseUp={props.onMouseUp}>
            <input type="hidden" name='blockelemtype' className="blockelemtype" value={props.block.id}/>
            <div className="grabme">
                <img src="assets/grabme.svg" alt="img"/>
            </div>
            <div className="blockin">
                <div className="blockico">
                    <span></span>
                    <img src={props.block.img} alt="img"/>
                </div>
                <div className="blocktext">
                    <p className="blocktitle">{props.block.blocktitle}</p>
                    <p className="blockdesc">{props.block.blockdesc}</p>
                </div>
            </div>
        </div>
    )
}
export default Draggable