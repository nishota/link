import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import request from 'superagent';

const req = new Promise((resolve,reject) =>{
  request.get('/data.json').end((err,data)=>{
      if(err){
          reject('there are errors.');
      }
      if(!data) {
          reject('there is no resource files.');
      }
      console.log(data.body);
      resolve(data.body.result);
})});

req.then(result => ReactDOM.render(<React.StrictMode><App input={result}/></React.StrictMode>,document.getElementById('root')));