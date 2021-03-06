import IdeasAPI from 'IdeasAPI';

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

export var countDown = ()=>{
  return {
    type: 'COUNT_DOWN'
  };
};

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

export var toggleLoadingStatus = ()=>{
  return {
    type: 'TOGGLE_LOADING_STATUS',
  };
}

export var getAllKeywords = (masterKeywords)=>{
  return (dispatch, getState)=>{
    console.log('keywords in', masterKeywords);

    return IdeasAPI.getKeywordRelated(masterKeywords).then((response)=>{
        console.log('api response', response);
        dispatch(addAllKeywords(response));
        dispatch(toggleLoadingStatus());
      }, (err)=>{console.log('error',err)});

  };
};

  export var addAllKeywords = (allKeywords)=>{
      return {
        type: 'ADD_ALL_KEYWORDS',
        allKeywords
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

export var sortIdea = (id, keyword)=>{
  return {
    type: 'SORT_IDEA',
    id,
    keyword
  };
};
