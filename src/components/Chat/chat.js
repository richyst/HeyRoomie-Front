import React from 'react';
import Contactos from './contactos';
import Conversacion from './conversacion';

class Chat extends React.Component {

  onUserClicked = (user) => {
    console.log(user);
  }
  render () {
    return(
      <div className="row">
        <div className="col-md-3">
          <Contactos />
        </div>
        <div className="col-md-9">
          <Conversacion/>
        </div>

      </div>
    );
  }
}
export default Chat;