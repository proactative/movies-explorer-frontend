import React from 'react';
import { Link } from 'react-router-dom';
import './RedirectionLink.css';

function RedirectionLink (props) {
  return (
    <Link className="redirection-link" to={props.to}>{props.linkTitle}</Link>
  ) 
}
  
export default RedirectionLink;
  