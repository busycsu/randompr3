import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Tablist from './component/tablist';
import Body from './component/body'

class App extends Component{
  constructor(){
    super();
    this.state = {
      active:0
    }
    this.changeTab = (id) => {
      this.setState({
        active:id
      })
    }
  }

  render(){
    const tabs = [{id:0, title:'Text'},{id:1, title:'Image'}, {id:2, title:"Video"},{id:3, title:"Table"}, {id:4, title:"Email"}];

    return (
      <div className="App">
        <div className="topnav">
          <Tablist tabs = {tabs} activetab = {this.state.active} ctab = {this.changeTab}/>
        </div>
        <div className="main-body">
          <Body activetab = {this.state.active} />
        </div>
      </div>
    )
  }
  
}

export default App;
