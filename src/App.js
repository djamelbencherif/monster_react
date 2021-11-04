import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/sarch.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const filterdMonster = monster.filter((e) => {
      return e.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monster={filterdMonster} />
      </div>
    );
  }
  // hook in
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    this.setState({ monster: users });
  }
}

export default App;
