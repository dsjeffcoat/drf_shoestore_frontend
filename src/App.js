import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    shoes: []
  }


  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoes/')
      .then(res => res.json())
      .then(data => this.setState({ shoes: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Shoe List on ShoeWorld</h1>
        <main>
          {this.state.shoes.map(s => (
            <ul>
              <li><h2>{s.brand_name}</h2></li>
              <li>Size: {s.size}</li>
              <li>Manufacturer: {s.manufacturer}</li>
              <li>Shoe Color: {s.color}</li>
              <li>Material: {s.material}</li>
              <li>Shoe Style: {s.shoe_type}</li>
              <li>Fasten Type: {s.fasten_type}</li>
            </ul>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
