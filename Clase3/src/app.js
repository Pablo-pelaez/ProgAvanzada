/**
 * npm init --yes (Crear proyecto rápidamente)
 npm install (i) permite la instalación de dependencias en el proyecto
 Express-> (framework de nodeJS) Permite la creación de API's Rest con node js

 API
 -servidor
 - Crear endpoints con sus respectivos métodos de consulta
 - Dar respuesta al servidor
 */
// const express = require('express'); //Importar la biblioteca

 import express, { json } from 'express';
 import mongoose from 'mongoose';
//  import CompanyModel from 'CompanyModel';
import Company from './models/CompanyModel';
const app = express();

//midlewards
app.use(express.json());

//Endpoint
//localhost://3000/users
app.get('/data', async (request, response)=> {
    try {
        const data = await Company.find().limit(8);
        response.json(data);
    }
    catch(e) {
        response.json(e);
    }
});

app.get('/test', (request, response)=> {
    response.send('Hello World, this is a test');
});

app.post('/register', (request, response)=> {
    console.log(request.body);
    response.send('You are registered')
})

app.put('/updateUser', (request, response)=> {
    console.log(request.body);
    response.send('Data has been updated')
})

app.delete('/deleteUser', (request, response)=> {
    console.log(request.body);
    response.send('Data has been deleted')
})

//Listen
app.listen(3000, async ()=> {
    try {
            await mongoose.connect('mongodb://localhost:27017/ProgAvanzada', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    catch(e) {
        console.log("Error de la conexión a la DB")
    }
    console.log("The server is running on port: 3000")
})


