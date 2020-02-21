import React from "react";
import Memo from "./Memo";
import Login from "./components/Login/Login";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titleColor: "red",
      fontSize: 30,
      loginColor: "pink",
      toogle: true,
      data: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then(
        // res //console.log(res.data)
        res => {
          return this.setState({
            data: res.data
          });
        }
      );
  };

  handleColor = () => {
    this.setState({
      titleColor: "green",
      fontSize: 30
    });
  };

  handleLogin = () => {
    if (this.state.toggle) {
      this.setState({
        toggle: !this.state.toggle,
        loginColor: "green"
      });
    } else if (!this.state.toggle) {
      this.setState({
        toggle: true,
        loginColor: "yellow"
      });
    }
  };

  render() {
    console.log("this.state.data", this.state.data);

    const renderData = this.state.data.map(person => {
      return (
        <div className="renderData">
          <div>name:{person.name}</div>
          <div>age:{person.age}</div>
        </div>
      );
    });

    return (
      <div className="App">
        <h1 style={{ color: this.state.titleColor, fontSize: this.state.fontSize }}>React All Day</h1>
        <button onClick={this.handleColor}> Click Me </button>
        <Memo />
        <h2>Login Component</h2>
        <Login loginBackgroundColor={this.state.loginColor} handleLogin={this.handleLogin} />
        <div>{renderData}</div>
      </div>
    );
  }
}

export default App;
