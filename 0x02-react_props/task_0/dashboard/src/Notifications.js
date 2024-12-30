import React from 'react';
import { getLatestNotification } from './utils';
import "./Notifications.css";
import close from "./close-logo2.png";

function myfunction(){console.log("Close button has been clicked");}

export default function Notifications () {
  return (
    <div className="Notifications">
      <button style={{ display:'inline', float:'right', padding:0, margin:0, border:'none', background:'none'}} aria-label="Close" onClick={()=>myfunction()}>
        <img style={{width:20, height:20}} src={close} alt="close"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
	<li data-priority="default">New course available</li>
	<li data-priority="urgent">New resume available</li>
	<li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}
