import React, { Component } from 'react';
import './App.css'
import TabList from "./Components/TabList"
import Body from "./Components/Body"


function goTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      buttonVisible: false,
      currScroll: document.documentElement.scrollTop
    }
    this.changeTab = (id) =>{
      this.setState({
        activeTab:id
      })
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({currScroll: document.documentElement.scrollTop})
    console.log(this.state.currScroll)
    const canTravel = document.documentElement.scrollHeight - window.innerHeight
    const topButton = document.getElementById("topButton");

    if ( (this.state.currScroll*1.0)/canTravel >= 0.25){
      topButton.style.display = "block";
    }
    else {
      topButton.style.display = "none";
    }
  }

  render() {
    const pageName = ["Homepage", "Music", "Photos", "Miscellaneous", "Guestbook", "Movies"]
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
    },
    {
      id:4,
      title: "Guestbook"
    },
    {
      id:5,
      title: "Movies"
    }
    ]

    return (
      <div className="body">
        <head>
          <title>Jerry's {pageName[this.state.activeTab]}</title>
        </head>
        <div className="header">
          <h1 class="topTitle">Jerry's {pageName[this.state.activeTab]}</h1>
          <button onClick={goTop} id='topButton'>Return to Top</button>
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
