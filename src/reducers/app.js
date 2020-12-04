import produce from "immer"
const initialState = {
    blocks: [{
        "id": 1,
        "img": "assets/eye.svg",
        "newimg": "assets/eyeblue.svg",
        "blocktitle": "New visitor",
        "blockdesc": "Triggers when somebody visits a specified page",
        "blockyinfo": "When a <span>new visitor</span> goes to <span>Site 1</span>" 
    },{
        "id": 2,
        "img": "assets/action.svg",
        "newimg": "assets/actionblue.svg",
        "blocktitle": "Action is performed",
        "blockdesc": "Triggers when somebody performs a specified action",
        "blockyinfo": "When <span>Action 1</span> is performed"  
    },{
        "id": 3,
        "img": "assets/time.svg",
        "newimg": "assets/timeblue.svg",
        "blocktitle": "Time has passed",
        "blockdesc": "Triggers after a specified amount of time",
        "blockyinfo": "When <span>10 seconds</span> have passed" 
    },{
        "id": 4,
        "img": "assets/error.svg",
        "newimg": "assets/errorblue.svg",
        "blocktitle": "Error prompt",
        "blockdesc": "Triggers when a specified error happens",
        "blockyinfo": "When <span>Error 1</span> is triggered" 
    }]

}

const appreducer = produce((draft, action) => {
  switch (action.type) {
    case 'SAMPLE':
      draft[action.key].push(action.payload);
      return draft;
    default:
      return draft
  }
},initialState);

export default appreducer;