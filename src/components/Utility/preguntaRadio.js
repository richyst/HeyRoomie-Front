import React from 'react';

import PropTypes from 'prop-types';

import {Radio} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const preguntaRadio = (props) => {
  return (
    <div style={{marginBottom:'30px'}}>
      <h6>{props.label}</h6>
      <RadioGroup onChange={(event)=>props.onChange(event) } defaultValue={props.value}>
              {props.options.map((option, index) => {
        return <RadioButton key={index} value={option.value}>{option.name}</RadioButton>
      })}
      </RadioGroup>
    </div>
  );
}
preguntaRadio.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string
      }
    )
  )

}

export default preguntaRadio;
