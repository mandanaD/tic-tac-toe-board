import React from "react";
import {useEffect , useState} from "react";

const Square =(props)=> {
    const [myClass,setMyClass]=useState(["square"])
    useEffect(()=>{
        if(props.name==="X"){
            setMyClass(["square x"])
        }
        if (props.name==="O"){
            setMyClass(["square o"])
        }
        if (props.name===null){
            setMyClass(["square"])
        }

    },[props.name])
    return (
        <button className={myClass.toString()} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default Square;