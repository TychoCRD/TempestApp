function dateID() {
  return Date.now();
}
function colorNum() {
  return Math.floor(Math.random() * (5)) + 1;
}


export var updateAppStage = (nextStage)=>{
  return {
    type: 'UPDATE_APP_STAGE',
    nextStage
  };
};

export var increaseCount = ()=>{
  return {
    type: 'INCREASE_COUNT'
  };
};

export var decreaseCount = ()=>{
  return {
    type: 'DECREASE_COUNT'
  };
};

export var countDown = ()=>{ //needs test
  return {
    type: 'COUNT_DOWN'
  };
};

// export var startCountdown = ()=>{
//   return {
//     type: 'START_COUNTDOWN'
//   };
// };
//
// export var stopCountdown = ()=>{
//   return {
//     type: 'STOP_COUNTDOWN'
//   };
// };

export var addKeyword = (text)=>{
  return {
    type: 'ADD_KEYWORD',
    text
  };
};

export var removeKeyword = (text)=>{
  return {
    type: 'REMOVE_KEYWORD',
    text
  };
};

export var addIdea = (text)=>{
  return {
    type: 'ADD_IDEA',
    idea: {
      id: dateID(),
      text,
      boxClass: 'idea-box bg-' + colorNum(),
      sorted: false,
      sort: undefined,
      sortBoxClass: undefined
    }
  };
};
