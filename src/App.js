import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }


// Uses setInterval to update the code every 1.5 seconds, and set the state based on a function call to getBinsState
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }


// Sets a variable for bins equal to an empty array, then loops through selecting a random float less than 1, then rounds up to one.  If it is not zero, aka, it can round up, it returns true, otherwise it returns false.
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = (index) => {
    let incrementPoints = this.state.points + 1
    this.setState({points: incrementPoints})
    console.log(`Increment score because trash[${index}] was clicked`);
  }

  onEmptyClicked = (index) => {
    let decrementPoints = this.state.points - 1
    this.setState({points: decrementPoints})
    console.log((`Decrement score because empty trash[${index}] was clicked`));
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash key={`trash-${index}`} isVisible={bin.isTrashVisible} isClicked={this.onTrashClicked}
        isEmptyClicked={this.onEmptyClicked}
        index={index} />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
