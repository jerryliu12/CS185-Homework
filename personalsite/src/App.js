import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import './App.css'
import TabList from "./Components/TabList"
import Body from "./Components/Body"

export class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 0
    }
    this.changeTab = (id) =>{
      this.setState({
        activeTab:id
      })
    }
  }

  

  render() {
    const pageName = ["Homepage", "Music", "Photos", "Miscellaneous"]
    const tabs = [
    {
      id:0,
      title: "Home"
    },  
    {
      id:1,
      title: "Music"
    }, 
    {
      id:2,
      title: "Pictures"
    },
    {
      id:3,
      title: "Misc"
    }   
    ]
    return (
      
      <div className="body">
        <head>
          <title>Jerry's {pageName[this.state.activeTab]}</title>
        </head>
        <div className="header">
          <h1 class="topTitle">Jerry's {pageName[this.state.activeTab]}</h1>
          {/* <button onClick={goTop} id="topButton" title="Top of Page">Return to Top</button> */}
          <div className="nav-bar space-around">
            <TabList tabs={tabs} 
            changeTab={this.changeTab}
            activeTab={this.state.activeTab}/>
          </div>
        </div>
        <div className="main-body">
          <Body
          activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}

export default App;
