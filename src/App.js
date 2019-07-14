import React, { Component } from "react";
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import cards from "./cards.json";

function randomizeCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    userSelect: '',
    currentScore: 0,
    topScore: 0
  };

  render() {
    const shuffledCards = randomizeCards(cards);

    return (
      <div>
        <Navbar 
          currentScore={this.state.currentScore} topScore={this.state.topScore}
        />
        
          <Header />
          <div className="wrapper"  style={{marginBottom: 70}}>
              {shuffledCards.map(card => ( 

                <Card key={card.id}
                  {...card}
                  selectImage={(id) => {
                    // Set current state for selected image Id
                    this.setState({userSelect: id})
                                                          
                    // JS function for game play and updating user score
                    this.setState((prevState) => {
                      if (this.state.userSelect === prevState.userSelect) {
                        return ({
                          currentScore : 0,
                          
                        })
                      } else {
                        if (this.state.topScore <= this.state.currentScore) {
                          return ({
                            currentScore : this.state.currentScore + 1,
                            topScore : this.state.topScore + 1
                          })
                        } else if (this.state.topScore >= this.state.currentScore) {
                          return ({
                            currentScore : this.state.userScore + 1
                          })
                        }
                      }
                    })
                  }}
                />

              ))}
          </div>

        <Footer />
      </div>
    );
  }
}

export default App;
