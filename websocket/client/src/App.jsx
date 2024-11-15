
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io('http://localhost:3000')

function App() {
  const [notification, setNotificaton] = useState([])

  useEffect(() => {
    if(Notification.permission==='default' || Notification.permission==='denied'){
      Notification.requestPermission().then((permission)=>{
        if(permission==='granted'){
          console.log('Notification permission granted')
        }else{
          console.log('Notification permission denied')
        }
      })
    }

    socket.on('pushNotification', (data) => {
      console.log('Received', data)

      if(Notification.permission==='granted'){
        new Notification('New Notification',{
          body:data.message,
          icon:'https://via.placeholder/com/50',
        })
      }
      
      setNotificaton((prev) => 
        [...prev, data]
      )
    })

    return () => {
      socket.off('pushNotification')
    }
  }, [])
  return (
    <>
      <div>
        <h1>Push Notifications</h1>
        <ul>
          {notification.map((notifi, index) => (<li key={index}>{notifi.message}</li>))}
        </ul>
      </div>

    </>
  )
}

export default App
