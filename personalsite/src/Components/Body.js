import React, { Component } from 'react';
import Home from './Home'
import Pictures from './Pictures'
import Music from './Music'
import Misc from './Misc'
import Guestbook from './Guestbook'
import Movies from './Movies';

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab==0){
            return <Home/>
        }
        else if(activeTab == 1){
            return <Music/>
        }       
        else if(activeTab == 2){ 
            return <Pictures/>
        }
        else if(activeTab == 3){
            return <Misc/>
        }
        else if(activeTab == 4){
            return <Guestbook/>
        }
        else{
            return <Movies/>
        }
    }
    render() {
        return (this.displayContent());
    }
}

export default Body;