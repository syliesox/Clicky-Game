import React, { Component } from "react";
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import cards from "./cards.json";

let userScore = 0;

class App extends Component {
  state = {
    cards: cards,
    currentScore: 0,
    topScore: 0
  };

    shuffle = (arra1) => {
      let ctr = arra1.length;
      let temp;
      let index;

      // While there are elements in the array
      while (ctr > 0) {
      // Pick a random index
          index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
          ctr--;
      // And swap the last element with it
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
  }

  clickCard = (index) => {
    if (this.state.cards[index].clicked === true) {
      if (userScore > this.state.topScore) {
        this.state.topScore = userScore;
        this.state.currentScore = 0;
      }
      userScore = 0;
      for (let i = 0; i < this.state.cards.length; i++) {
        this.state.cards[i].clicked = false;
        console.log(this.state.cards[i].clicked);
      }
      alert("GAME OVER! Try again for a better score!");
      this.forceUpdate();
    } else if (this.state.userScore === 12) {
      alert("WOW, your memory is excellent!!");
      this.state.topScore = 12;
    } else {
      userScore++;
      this.state.currentScore = userScore;
      this.state.cards[index].clicked = true;
      const reshuffle = this.shuffle(this.state.cards);
      this.setState({ reshuffle });
    }
    
  } 

  render() {

    return (
      <div>
        <Navbar 
          currentScore={this.state.currentScore} 
          topScore={this.state.topScore}
        />
          <Header />
          <div className="wrapper"  style={{marginBottom: 70}}>
              {this.state.cards.map(card => ( 
                <Card
                  clickCard = {this.clickCard}
                  id = {card.id}
                  key = {card.id}
                  image = {card.image}
                  index = {cards.indexOf(card)}
                />
              ))}

              
          </div>

        <Footer />
      </div>
    );
  }
}

export default App;
