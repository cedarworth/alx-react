import React from 'react';
import { getLatestNotification } from './utils';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <button style={{ float: 'right', display: 'inline' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="close icon" width={15} height={15} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;