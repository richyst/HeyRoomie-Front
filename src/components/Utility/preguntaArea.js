import React from 'react';
import {Input} from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const preguntaArea = (props) => {
  return (
    <div style={{marginBottom:'30px'}}>
      <h6>{props.label}</h6>
      <TextArea
        autosize
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.onChange(event)} 
      />
    </div>
  );
}

preguntaArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func
}
export default preguntaArea;
