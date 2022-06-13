// React is the engine that runs how these applications get built.
// React Dom is specifying that engine should be directed towards web related applications.
// These two libraries combined is what actually allows us to build out all of our web applciation in React.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode means that whatever inside of this strict mode, 
  // test two tags here, you're going to essentially add these
  // additional checks and warnings that React says in case you're using or deprecated code.
<React.StrictMode>
    <App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// Webpack is essentially modular being a chunk
// make suer that optimize it and break it into the self-contained protions of it so that
// when the user is trying to access one part of it, it only gets the relevant Javascript for that part.


// logos are more so relat4ed to manifest.json file
// The manifest.json file is a way for us to actually be progressive, web app compliant and all
// The progressive web app is that some people want to be able to down load web application onto the desktop
// so that they can access that offline use applicaion not through browser