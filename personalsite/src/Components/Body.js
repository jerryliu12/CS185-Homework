import React, { Component } from 'react';
import Home from './Home'
import Pictures from './Pictures'
import Music from './Music'
import Misc from './Misc'

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
        else {
            return <Misc/>
        }
    }
    render() {
        return (this.displayContent());
    }
}

export default Body;