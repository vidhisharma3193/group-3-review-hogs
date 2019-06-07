import React, { Component } from 'react';
import HogInfo from './HogInfo'


export default class HogTile extends Component{
    constructor(){
        super()
        this.state = {
            show: false
        }
    }

    change = () => {
        this.setState({
            show: !this.state.show, //true
         

        })
    }



    render(){
        const pic = require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)
        return(
            <div className="card">
                <div className="image">
                    <img src={pic} />
                </div>
                <div className="content">
                    <div className="header">
                    <h2>{this.props.hog.name}</h2>
                    <p>{this.props.hog.specialty}</p>
                    </div>

                    {/* <button onClick={() => this.change()}>Show Details</button> */}
                  

                    {this.state.show 
                        ? 
                        <div>
                            <HogInfo hog= {this.props.hog}/> 
                        <button onClick={this.change}>Hide Details</button>
                        </div>
                        :   <button onClick={this.change}>Show Details</button>}


                <button onClick={() => this.props.hideTheHog(this.props.hog)}> Hide the Hog!!</button>
            
        </div>
        </div>)
    }
}