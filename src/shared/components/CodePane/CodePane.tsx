import React from 'react'
import CodePaneProps from './CodePaneProps'
import classes from './CodePane.module.scss'

export default function Button(props: CodePaneProps) {
  return (
    <div className={ classes.pane }>
      <span className={ `${classes.pane__circle} ${classes.pane__circle_one}` }></span>
      <span className={ `${classes.pane__circle} ${classes.pane__circle_two}` }></span>
      <span className={ `${classes.pane__circle} ${classes.pane__circle_three}` }></span>
      { props.children }
    </div>
  )
}
