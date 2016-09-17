import axios from 'axios';


var IdeasAPI = {
  getKeywordRelated: function(keywordArr){
    var keywordArrStr = keywordArr.join(',');
    var config = {
      headers: {
        'keywordArr': keywordArrStr
      }
    };
    console.log('string in', keywordArrStr);
    return axios.get('/wordApi', config).then((response)=>{
      var keywordRelatedArr = response.data.split(',');
      console.log("good arr", keywordRelatedArr)
      return keywordRelatedArr;
    });
  }
};

export default IdeasAPI;
