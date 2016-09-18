import axios from 'axios';

// Durstenfeld Shuffle
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

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

      keywordRelatedArr = shuffleArray(keywordRelatedArr);

      console.log("good arr", keywordRelatedArr)
      return keywordRelatedArr;
    });
  }
};

export default IdeasAPI;
