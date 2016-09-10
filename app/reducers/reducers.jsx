
export var appStageReducer = (state = 'settings', action)=>{
  switch(action.type){
    case 'UPDATE_APP_STAGE':
      return action.nextStage;
    default:
      return state;
  }
};

export var countReducer = (state = 300, action)=>{
  switch(action.type){
    case 'INCREASE_COUNT':
      return (state+30);
    case 'DECREASE_COUNT':
      return (state-30);
    case 'COUNT_DOWN': // needs test
      return (state-1);
    default:
      return state;
  }
};

export var countdownStatusReducer = (state = 'stopped', action)=>{
  switch(action.type){
    case 'START_COUNTDOWN':
      return 'started';
    case 'STOP_COUNTDOWN':
      return 'stopped';
    default:
      return state;
  }
};

export var masterKeywordsReducer = (state = [], action)=>{
  switch(action.type){
    case 'ADD_KEYWORD':
      return [...state,
        action.text
      ];
    case 'REMOVE_KEYWORD':
      return state.filter((keyword)=>keyword !== action.text);
    default:
      return state;
  }
};
