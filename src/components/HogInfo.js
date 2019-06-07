import React, { Component } from 'react';


export default class HogInfo extends Component{
    render(){
        return(<div>
            <ul>
                <li>
                    Medal: {this.props.hog['highest medal achieved']}
                </li>
                <li>
                    {this.props.hog.greased ? 'Greased!' : 'Not Greased!!'}
                </li>
                <li>
                Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                </li>
            </ul>

        </div>)
    }
}