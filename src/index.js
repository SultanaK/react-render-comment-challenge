import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './components/comment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Comment
        author="Abraham Lincon"
        text="Quotes on the Internet are becoming less and less reliable."
    />,
    document.getElementById('root')
);
registerServiceWorker();
