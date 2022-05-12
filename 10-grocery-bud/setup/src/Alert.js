import React, { useEffect } from 'react'

const Alert = ({type, msg, showAlert, list}) => {
    useEffect(() => {
      const timer = setTimeout(()=>{
        showAlert()
      }, 3000)
    
      return () => clearTimeout(timer)
    }, [showAlert, list])
    
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
