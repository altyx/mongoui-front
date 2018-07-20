import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: '',
      port: '',
      database: '',
    };
    this.connectDBHandler = this.connectDBHandler.bind(this);
  }

  changeHostHandler = (event) => {
    this.setState({
      host: event.target.value,
    });
  }
  changePortHandler = (event) => {
    this.setState({
      port: event.target.value,
    });
  }
  changeDatabaseHandler = (event) => {
    this.setState({
      database: event.target.value,
    });
  }
  connectDBHandler = (event) => {
    const data = {
      host: this.state.host,
      port: this.state.port,
      database: this.state.database,
    };
    axios.post('/', data)
    .then(res => {
      this.props.history.push('/collections');
    })
    .catch(err => {
      console.log(err);
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form className="connectDB" onSubmit={this.connectDBHandler} id="form">
          <Grid container>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="host"
                  label="host"
                  margin="normal"
                  onChange={this.changeHostHandler}
                  host={this.state.host}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="port"
                  label="port"
                  margin="normal"
                  onChange={this.changePortHandler}
                  port={this.state.port}
                  />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="database"
                  label="database"
                  margin="normal"
                  onChange={this.changeDatabaseHandler}
                  database={this.state.database}
                  />
              </Grid>
          </Grid>
          <Button variant="outlined" type="submit">
            Connexion
          </Button>
        </form>
        <div>
        <p>
          Les champs ci-dessus ne sont pas obligatoires.
        </p>
        <p>Par défault, vous vous connecterez sur localhost avec le port 27017.
        </p>
        </div>
      </div>
    )
  }
}