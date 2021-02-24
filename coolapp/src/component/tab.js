import React, {Component} from 'react'

function Tab(props){
    const addstyle = () =>{
        if(props.out.id == props.activetab){
            return {backgroundColor:'#4CAF50'}
        }else{
            return {backgroundColor:'#333'}
        }
    };

    return(
        <div className="tab" style = {addstyle()} onClick = {props.ctab.bind(this, props.out.id)} >{props.out.title}</div>
        // <div className="tab" onClick = {props.ctab.bind(this, props.out.id)} >{props.out.title}</div>
    )
}

export default Tab;