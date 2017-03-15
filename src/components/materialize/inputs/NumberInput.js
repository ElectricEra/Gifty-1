import React from 'react'
import {InputWrapper} from '../'

export const NumberInput = (props) => {
  return (
    <InputWrapper>
        <label htmlFor={props.inputId}>{props.children}</label>
        <input id={props.inputId} type="number" className="validate" />
    </InputWrapper>
  )
}