import React from 'react';
import {Input} from 'antd';
import PropTypes from 'prop-types';
const preguntaTexto = (props) => {
  return (
    <div style={{marginBottom:'30px'}}>
      <h6>{props.label}</h6>
      <Input 
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.onChange(event)} 

      
      />
    </div>
  );
}

preguntaTexto.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
export default preguntaTexto;
