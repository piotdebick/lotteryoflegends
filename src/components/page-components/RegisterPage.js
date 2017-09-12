import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { history } from 'AppRouter';
import axios from 'axios';

class Register extends React.Component {
  constructor (props) {
    super();
    this.state = {code: '', error: null};
  }

  async handleSubmit (user) {
    try {
      var res = await axios.post('http://localhost:3001/users', {
        username: user.username,
        password: user.password,
        region: user.region
      });
    } catch (e) {
      this.setState((prevState, props) => {
        return {
          error: e.data
        }
      });
    }
  }

  async componentDidMount () {
    try {
      var res = await axios.get('http://localhost:3001/code');
      this.setState((prevState, props) => {
        return {
          code: res.data
        }
      });
    } catch (e) {
      this.setState((prevState, props) => {
        return {
          error: e.data
        }
      });
    }
  }

  render() {
    return (
      <div>

        <p>Sign up with your Summoner name!</p>
          <LocalForm
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
            initialState={{region: 'na1'}}
          >
            <label htmlFor="user.username">Summoner name</label>
            <Control.text model="user.username" id="user.username" required/>

            <label htmlFor="user.password">Password</label>
            <Control.text model="user.password" type="password" id="user.password" required/>

            <label htmlFor="user.password">Confirm Password</label>
            <Control.text model="user.confirmPassword" type="password" id="user.confirmPassword" required/>

            <label htmlFor="user.region">Region</label>
            <Control.select model="user.region" id="user.region" required>
              <option value="na1">NA</option>
              <option value="br1">BR</option>
              <option value="eun1">EUNE</option>
              <option value="euw1">EUW</option>
              <option value="jp1">JP</option>
              <option value="kr">KR</option>
              <option value="la1">LAN</option>
              <option value="la2">LAS</option>
              <option value="oc1">OCE</option>
              <option value="tr1">TR</option>
              <option value="ru">RU</option>
              <option value="pbe1">NA</option>
            </Control.select>

            <label htmlFor="user.code">
              Change your first mastery page name to the code provided to validate your account
            </label>
            <div className="callout small primary">
              <div className="centered">
                {this.state.code}
              </div>
            </div>
            <button type="submit" className="button">Sign up!</button>
            <button type="button" className="button" onClick={()=>{history.push('/')}}>Back</button>
          </LocalForm>

        </div>
  );
  }
};

export default Register;
