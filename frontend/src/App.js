import React, { Component } from 'react';
import NavBar from './navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col s6">
              <label>Categories</label>
              <select className="browser-default">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="col s6">
              <label>sorting</label>
              <select className="browser-default">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Card Title</span>
                  <span className="right">타임스탬프</span>
                  <br />
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">
                    <i class="material-icons">favorite</i> 9
                  </a>
                  <a href="#">
                    <i class="material-icons">comment</i> 8
                  </a>
                  <div class="chip right">
                    categories
                 </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
