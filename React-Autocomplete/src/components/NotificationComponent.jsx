import React from 'react';
import useNotification from './hooks/use-notification';

function NotificationComponent(props) {
     // create custome hook for all logic, - useNotification(position)

  const {NotificationComponent, triggerNotification} =useNotification('bottom-right')
    return (
        <div>
              Subscribe for....
      <button onClick={() => 
        triggerNotification({
          type: 'success',
          message: 'File Sent Successfully',
          duration:3000
        })}>Trigger Success</button>
       <button onClick={() => 
        triggerNotification({
          type: 'error',
          message: 'Failed',
          duration:3000
        })}>Trigger Failure</button>
      <button onClick={() => 
        triggerNotification({
          type: 'warning',
          message: 'Warning',
          duration:3000
        })}>Trigger Warning</button>
      <button onClick={() => 
        triggerNotification({
          type: 'info',
          message: 'Info',
          duration:3000
      })}>Trigger Info</button>
      {NotificationComponent}
        </div>
    );
}

export default NotificationComponent;