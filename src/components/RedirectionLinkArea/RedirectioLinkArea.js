import React from 'react';
import './RedirectionLinkArea.css';
import RedirectionLink from '../RedirectionLink/RedirectionLink';

function RedirectionLinkArea(props) {
  return (
    <div className="redirection-link-area">
      <p className="redirection-link-area__question">{props.question}</p>
      <RedirectionLink to={props.to} linkTitle={props.linkTitle}/>
    </div>
  );
}
  
export default RedirectionLinkArea;
