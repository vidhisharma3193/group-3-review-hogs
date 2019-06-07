import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter'
import HogList from './HogList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      displayHogs: hogs,
      hiddenHogs: []
    }

  }


  filterHogs = (e) => {
    let arr = []
    if(e.target.value === 'name'){
      arr = this.state.displayHogs.sort((a,b) => a.name < b.name ? -1 : 1 )
    }else{
      arr = this.state.displayHogs.sort((a,b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] ? -1 : 1 )
    }

    this.setState({
      displayHogs: arr
    })
  }


  showGreasedHogs = (e) => {
    let arr = []
    if(e.target.checked){
      arr = this.state.displayHogs.filter(hog => hog.greased)
    }else{
      arr = hogs
    }

    this.setState({
      displayHogs: arr
    })
  }

  hideTheHog = (hogObj) => {
      let arr = this.state.displayHogs.filter(hog => hog !== hogObj)

      this.setState({
        displayHogs: arr,
        hiddenHogs: [...this.state.hiddenHogs, hogObj]
      })
  }




  render() {
    return (
      <div className="App">
          < Nav />
          <Filter filter={this.filterHogs} showGreasedHogs={this.showGreasedHogs} hiddenHogs={this.state.hiddenHogs}/>
          <HogList hogs={this.state.displayHogs} hideTheHog={this.hideTheHog}/>
      </div>
    )
  }
}

export default App;
