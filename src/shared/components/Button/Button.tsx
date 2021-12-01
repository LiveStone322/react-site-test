import React from 'react'
import ButtonProps from './ButtonProps'
import classes from './Button.module.scss'

export default function Button(props: ButtonProps) {
  return (
    <button className={ classes.btn }>
      { props.text }
    </button>
  )
}
