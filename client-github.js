'use strict';

var request = require('request');
var userDetails;

function initRequest() {
    var options = {
        url: 'https://api.github.com/users/bilal966',
        headers: {
            'User-Agent': 'request'
        }

    };
    //return new promise

    return new Promise(function (resolve, reject) {
        //Do async job
        request.get(options,function (err,resp,body) {
            if(err){
                reject(err);
            }else{
                resolve(JSON.parse(body));
            }
        })

    })
}

 function mainGithubClient() {
    var initPromise = initRequest();
    initPromise.then(function (result) {
        userDetails = result;
        console.log("Initialized user details");
        console.log(userDetails);
    },function (err) {
        console.log(err);
    })

}
module.exports = mainGithubClient();