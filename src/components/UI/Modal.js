import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const potalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {/* <Backdrop />
      <ModelOverlay>{props.children}</ModelOverlay> */}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, potalElement)}
      {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, potalElement)}
    </Fragment>
  )
}

export default Modal