import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

class App extends React.Component {
  state = { respText: "" };
  constructor(props) {
    super(props);
    axios.bind(this);
  }
  handleSubmit = (username, password) => {
    //let responseText = "";
    console.log("User:" + username);
    console.log("passwrd:" + password);

    var apiBaseUrl = "http://localhost:8080/login";
    var self = this;
    var payload = {
      username: username,
      password: password
    };

    axios
      .post(apiBaseUrl, payload)
      .then(function(response) {
        console.log(response);
        var responseText = "";
        if (response.data.status === "Success") {
          console.log("Login successfull");
          responseText = "Login successfull";
        } else if (response.data.status === "failure") {
          console.log("Username password do not match");
          responseText = "Username password do not match";
          alert("username password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
          responseText = "Username does not exist";
        }
        this.setState({ respText: responseText });
      })
      .catch(function(error) {
        var responseText = "";
        console.log("Unable to connect try again");
        //console.log(error);
        responseText = "Unable to connect try again";
        self.setState({ respText: "Unable to connect try again" });
        return responseText;
      });
  };

  render() {
    return (
      <div className="App">
        <LoginForm onSubmit={this.handleSubmit} />
        <div style={{color:'red'}}>
          {this.state.respText}
        </div>
      </div>
    );
  }
}

export default App;
