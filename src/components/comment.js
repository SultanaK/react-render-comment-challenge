import React from 'react';

export default function Comment(props) {
    return (
        <div className="comment">
            <div className="comment-author">{props.author} says:</div>
            <div className="comment-text">{props.text}</div>
        </div>
    );
}
