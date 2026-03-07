import express from 'express';
import http from 'http';
import mysql from 'mysql2';
import {app} from './app.js'; 

const port = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on("error", (error) => {
  console.error('Error starting server:', error);
});