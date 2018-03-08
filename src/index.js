import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import markup from './index.html'

//function createMarkup (){
 //   return {__html:'markup'};
//}

//function MyComponent(){
 //    return <body dangerouslySetInnerHTML={createMarkup()}/>
//};

ReactDOM.render(
<App />, 
document.getElementById('root'));
registerServiceWorker();
