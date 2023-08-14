import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      monsters: [],
      searchFields: "",
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }
  onSearchChange = (event) => {
    const searchFields = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchFields: searchFields };
    });
  };
  render() {
    console.log("APPList Renders");
    const { monsters, searchFields } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFields);
    });
    return (
      <div className="App">
        <h1 className="heading">MONSTER ROLODEX</h1>
        <SearchBox onChangeHandler={onSearchChange}
        placeholder="search-monsters"
        className = "monster-search-box" />
        <CardList fmonsters={filterMonsters} />
      </div>
    );
  }
}
export default App;
