import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

class App extends React.Component {
  state = { respText: "" };
  constructor(props) {
    super(props);
    axios.bind(this);
  }
  handleSubmit = async (username, password) => {
    //let responseText = "";
    console.log("User:" + username);
    console.log("passwrd:" + password);

    var apiBaseUrl = "http://localhost:8080/login";
    //var self = this;
    var payload = {
      username: username,
      password: password
    };

    try {
      const response = await axios.post(apiBaseUrl, payload);
      console.log(response);
      this.renderResponse(response);
    } catch (error) {
      var responseText = "";
      console.log("Unable to connect try again");
      //console.log(error);
      responseText = "Unable to connect try again";
      this.setState({ respText: "Unable to connect try again" });
      return responseText;
    }
  };

  renderResponse = response => {
    var responseText = "";
    if (response.data.status === "Success") {
      responseText = "Login successfull";
    } else if (response.data.status === "failure") {
      responseText = "Username password do not match";
    } else {
      responseText = "Username does not exist";
    }
    this.setState({ respText: responseText });
  };

  render() {
    return (
      <div className="App">
        <LoginForm onSubmit={this.handleSubmit} />
        <div style={{ color: "red" }}>{this.state.respText}</div>
      </div>
    );
  }
}

export default App;
