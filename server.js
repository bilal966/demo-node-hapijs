'use strict';

const Hapi =require('hapi');
const joi_validation = require('joi');


const server = Hapi.server({
    port : 3000,
    host : 'localhost',
    debug: {
        request: ["received"]
    }
});

server.route({
   method : 'GET',
    path  : '/',
    handler : (request,h)=> {
       return 'Demo Rest Node HapiJS';
    }
});

server.route({
    method : 'GET',
    path : '/{customer}',
    handler : (request,h) =>{
        server.log(["Customer"], request.params.customer + " requested the hello page!");
        return `Online customer is, ${encodeURIComponent(request.params.customer)}!`;
    },
    options: {
        validate: {
            params: {
                customer: joi_validation.string().min(3).max(10)
            }
        }
    }

});

const init = async() => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

};

//promises lib blue bird
//type script . Inverfy JS

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

const client_github = require('./client-github.js');
