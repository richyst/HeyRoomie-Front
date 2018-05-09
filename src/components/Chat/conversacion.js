import React from 'react';
import {connect} from 'react-redux';

class conversacion extends React.Component {
  render () {
    return (
      <div >
        <h5 >{this.props.id}</h5>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    id: state.chat.id
  };
};
export default connect(mapStateToProps, null) (conversacion);