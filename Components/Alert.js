import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const tx = word.toLowerCase();
        return tx.charAt(0).toUpperCase() + tx.slice(1)
    }
    return (
        <div className="container w-25" style={{height: '50px'}}>
             {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {capitalize(props.alert.type)} </strong>{props.alert.msg}
        </div>}
        </div>
       
    )
}

export default Alert
