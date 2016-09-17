var express = require('express');
var request = require('request');
var rp = require('request-promise');
var app = express();

const PORT = process.env.PORT || 3000;

// check for https traffic and reroute to http
app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});


app.use(express.static('public'));

// app.get('/wordApi', (req, res)=>{
// 	var allKeywords = [];
// 	var keyword = req.headers.keyword;
//
// 	var reqUrl = `https://twinword-word-associations-v1.p.mashape.com/associations/?entry=${keyword}`;
// 	var reqOptions = {
// 			url: reqUrl,
// 			headers: {
// 				'X-Mashape-Key': 'OleiAkCAhcmshp5u3iUR0iLTAPVHp1xMsnBjsntNiK7XXwE77j',
// 				'Accept': 'application/json'
// 			}
// 		};
// 	request.get(reqOptions, (error, response, body)=>{
// 			if (!error && response.statusCode == 200) {
// 				var bodyObj = JSON.parse(body);
// 				var keywordRelatedArr = bodyObj['associations_array'].filter((word, index)=>{
// 					return index < 5 ? true : false;
// 				});
// 				keywordRelatedArr.push(keyword);
// 				var keywordRelatedStr = keywordRelatedArr.toString();
// 				console.log(keywordRelatedStr);
// 				res.status(200).send(keywordRelatedStr);
// 			}// end request if condition
// 		});// end request.get
//
// });


app.get('/wordApi', (req, res)=>{

	var keywordArr = req.headers.keywordarr.split(',');

	function getWordStr(keyword){
		var reqUrl = `https://twinword-word-associations-v1.p.mashape.com/associations/?entry=${keyword}`;
		var reqOptions = {
				url: reqUrl,
				headers: {
					'X-Mashape-Key': 'OleiAkCAhcmshp5u3iUR0iLTAPVHp1xMsnBjsntNiK7XXwE77j',
					'Accept': 'application/json'
				}
			};
		return rp.get(reqOptions).then((response)=>{
				var bodyObj = JSON.parse(response);
				var keywordRelatedArr = bodyObj['associations_array'].filter((word, index)=>{
					return index < 5 ? true : false;
				});
				keywordRelatedArr.unshift(keyword);
				return keywordRelatedArr.toString();
			}, (err)=>{console.log('error',err)});

	}

	var keywordArrPromiseCall = (arr)=>{
		return arr.map((keyword)=>{
			return getWordStr(keyword);
		});
	};

	Promise.all(keywordArrPromiseCall(keywordArr)).then((responses)=>{
		res.status(200).send(responses.join(','));
	}, (err)=>{console.log('error',err)});

});

app.listen(PORT, function(){
	console.log('Express server is up on port ' + PORT);
});
