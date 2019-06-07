import React, { Component } from 'react';


export default class Filter extends Component{
    constructor(){
        super()
        this.state = {
            isClicked: false
        }
    }

    change = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return(<div>
            <label>Sort By:</label>
            <select onChange={(e) => this.props.filter(e)}>
                <option value='weight'>Weight</option>  
                <option value='name'>Name</option>
                
            </select>
            <label>isGreased?</label>
            <input type="checkbox" name="isGreased?" value= "isGreased?" onClick={(e) => this.props.showGreasedHogs(e)}/> 

            <button onClick={this.change}>Display Hidden Hog</button>

            {this.state.isClicked 
            ? this.props.hiddenHogs.map(hog => <div><p>R.I.P.{hog.name}</p></div>)
            :null}

        </div>)
    }
}

// export default Filter