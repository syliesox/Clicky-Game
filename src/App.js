import React, { Component } from "react";
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    clickedCards: [],
    currentScore: 0,
    topScore: 0
  };

  imageClick = event => {
    const currentCard = event.target.alt;
    const cardClicked = this.state.clickedCards.indexOf(currentCard) > -1;

    if (cardClicked) {
      this.setState({
        cards: this.state.cards.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCards: [],
        currentScore: 0
      });
        alert("Gave Over! Try again for a better score!")
    } else {
      this.setState({
        cards: this.state.cards.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
          clickedCards: this.state.clickedCards.concat(
            currentCard
          ),
          currentScore: this.state.currentScore + 1
      }, 
      () => {
        if (this.state.currentScore === 12) {
          alert("You win!");
          this.setState({
            cards: this.state.cards.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedCards: [],
            currentScore: 0
          });
        }
      }
      );
    }

  };

  render() {
    return (
      <div>
        <Navbar 
          currentScore={this.state.currentScore} topScore={this.state.topScore}
        />
        
          <Header />
          <div className="wrapper">
              {this.state.cards.map(cards => ( 
                <Card 
                  imageClick={this.imageClick}
                  id={cards.id}
                  key={cards.id}
                  image={cards.image}
                />
              ))}
          </div>

        <Footer />
      </div>
    );
  }
}

export default App;
