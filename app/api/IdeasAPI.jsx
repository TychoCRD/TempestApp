import axios from 'axios';


var IdeasAPI = {
  getKeywordRelated: function(keyword){
    var config = {
      headers: {
        'keyword': keyword}
    };

    return axios.get('/wordApi', config).then((response)=>{
      var keywordRelatedArr = response.data.split(',');
      console.log("good arr", keywordRelatedArr)
      return keywordRelatedArr;
    });
  }
};

export default IdeasAPI;
