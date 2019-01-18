import React from 'react';
import MenuBar from './MenuBar';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class LoginForm extends React.Component{
  state={ username:"", password:""};
  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);

    this.props.onSubmit(this.state.username, this.state.password);
  }
  render(){
    return(
      <div>
      <MenuBar/>
      <TextField
        placeholder="Enter your Username"
        label="Username"
        onChange={event =>
          this.setState({ username: event.target.value })
        }
      />
      <br />
      <TextField
        type="password"
        placeholder="Enter your Password"
        label="Password"
        onChange={event =>
          this.setState({ password: event.target.value })
        }
      />
      <br />
      <br />
      <Button label="Submit" variant="contained" onClick={this.handleSubmit}>
        Submit
      </Button>
      <br />
      </div>
    );
  }
}

export default LoginForm;
