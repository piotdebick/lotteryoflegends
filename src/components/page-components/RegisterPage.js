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
      <div className='container'>
        <div className='box'>
          <div className='box__title'>
            <h2>LOTTERY OF LEGENDS</h2>
            <h4>Register with your Summoner name!</h4>
          </div>
          <LocalForm
            className='form'
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
            initialState={{region: 'na1'}}
          >
            <Control.text className='form__input' model="user.username" id="user.username" placeholder='Summoner Name' required/>

            <Control.text className='form__input' model="user.password" type="password" id="user.password" placeholder='Password' required/>

            <Control.text className='form__input' model="user.confirmPassword" type="password" id="user.confirmPassword" placeholder='Confirm password'required/>

            <Control.select className='form__input' model="user.region" id="user.region" required>
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

            <div className='form__text'>
              Change your first mastery page to the code provided to validate your account
              <div className='form__subtext'>
                {this.state.code}
              </div>
            </div>
            <button className='button' type="submit">Sign up!</button>
            <button className='button' type="button" onClick={()=>{history.push('/')}}>Back</button>
          </LocalForm>
        </div>
      </div>
  );
  }
};

export default Register;
