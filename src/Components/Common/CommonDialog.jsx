import React from 'react'

const CommonDialog = ({
  title = "Dialog title",
  text,
  content,
  open,
  fnAccept = ()=>{
    // foo
  },
  fnReject = ()=>{
    // foo
  } 
}) => {

    return <>
      Hello
    </>

}

export default CommonDialog;