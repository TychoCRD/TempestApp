
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

export var startCountdown = ()=>{
  return {
    type: 'START_COUNTDOWN'
  };
};

export var stopCountdown = ()=>{
  return {
    type: 'STOP_COUNTDOWN'
  };
};

export var addKeyword = (text)=>{
  return {
    type: 'ADD_KEYWORD'
    text
  };
};

export var removeKeyword = (text)=>{
  return {
    type: 'REMOVE_KEYWORD',
    text
  };
};
