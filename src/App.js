import React, { Component } from "react";
import './App.css';
import Card from "./components/Card";
import Container from "./components/Container";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import cards from "./cards.json";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
        
        </Navbar>

        <Body>

          <Container>

            <Card>
            
            </Card>
          
          </Container>
          
        </Body>

        <Footer>
        
        </Footer>

      </div>
    );
  }
}

export default App;
