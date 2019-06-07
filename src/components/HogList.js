import React, { Component } from 'react';
import HogTile from './HogTile';


export default class HogList extends Component{
    render(){
        return(<div className='ui link cards'>
            {this.props.hogs.map(hog => <HogTile hog={hog} hideTheHog={this.props.hideTheHog}/>)}
                
        </div>)
    }
}