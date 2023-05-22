import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "shivam sharma",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>my name is {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState(
              () => {
                return {
                  name: "shubham sharma",
                };
              },
              () => {
                console.log(this.state.name);
              }
            );
          }}
        >
          click it
        </button>
      </div>
    );
  }
}
export default App;
