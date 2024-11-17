import React from 'react';
import { getLatestNotification } from './utils';
import "./Notifications.css";
import close from "./close-logo.jpg";

function myfunction(){console.log("Close button has been clicked");}

export function Notifications () {
  return (
    <div className="Notifications">
      <button style={{ display:'inline', float:'right'}} aria-label="Close" onClick={()=>myfunction()}>
      </button>
      <p>Here is the list of notifications</p>	  
      <ul>
	<li data-priority="default">New course available</li>
	<li data-priority="urgent">New resume available</li>
	<li data-priority="urgent"dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}