import React from 'react'
import { Button } from './styles'
import Proptypes from 'prop-types'

export const SubmitButton = ({children, disabled, onClick}) => {
 return (
   <Button onClick={onClick} disabled={disabled}>{children}</Button>
 ) 
}

SubmitButton.proptypes = {
  disabled: Proptypes.bool,
  onClick: Proptypes.func,
  children: Proptypes.node.isRequired
}
