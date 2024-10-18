// host-app/src/App.js
import React from "react";

const RemoteButton = React.lazy(() => import("Remote/Button"));

export const App = () => {
  return (
     <div className="wrapper">
        <div>
          <h2>Microfrontend- Host App</h2>
          <p className="textBlock">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet erat a metus accumsan accumsan eu vel purus. Sed eget lacus porttitor, auctor mauris in, blandit mi. Aliquam porta quam nulla, ut tempor risus fringilla sed. Suspendisse potenti. Etiam vestibulum, neque sollicitudin molestie dapibus, sapien mauris congue felis, quis hendrerit orci arcu sit amet felis. Aenean suscipit accumsan tempor. Nulla a blandit odio, elementum semper elit.
<br/><br/>
Aenean varius venenatis massa placerat maximus. Quisque elementum, dolor non gravida porta, nulla turpis fringilla magna, suscipit aliquam nisi libero et risus. In non maximus enim. Cras vitae odio risus. Sed vestibulum dapibus eros nec vehicula. Maecenas aliquam nisi non facilisis ullamcorper. Maecenas convallis vel felis sit amet luctus. In lacinia nisi ac vehicula blandit. Pellentesque eleifend est orci, eget aliquet ipsum interdum vel. Aenean id turpis ac lacus auctor cursus. Vivamus viverra ac sem eu cursus.
          </p>
          <RemoteButton label="Remote Button"/>
        
       
      </div>
    </div>
    
  )
}
export default App;