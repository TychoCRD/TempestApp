
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

export var ideasReducer = (state = [], action)=>{
  switch(action.type){
    case 'ADD_IDEA':
      return [...state,
      action.idea
    ];
    case 'SORT_IDEA':
      return state.map((idea)=>{
        if(idea.id === action.id){
          return {
            ...idea,
            sorted: true,
            sort: action.keyword
          };
        } else {
          return idea;
        }
      });
    default:
      return state;
  }
};
