import React from 'react'


const InputField = (props) =>{

    return(
        <div>
            {props.text}  
            <input placeholder={props.place} onChange={props.event}></input>
        </div>
    )
}

export default InputField