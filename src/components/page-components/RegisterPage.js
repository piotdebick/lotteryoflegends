import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { connect } from 'react-redux';
import { history } from 'AppRouter';
import {checkAuthToken} from 'actions';
import axios from 'axios';

class Register extends React.Component {
  constructor (props) {
    super();
    this.state = {code: '', error: null};
  }

  async handleSubmit (user) {
    try {
      var {dispatch} = this.props;
      var res = await axios.post('https://api.lotteryoflegends.com/users', {
        username: user.username,
        password: user.password,
        region: user.region,
        code: this.state.code
      });
      dispatch(checkAuthToken(res.headers['x-auth']));
      localStorage.setItem('authToken', res.headers['x-auth']);
      history.push('/dashboard');
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
      var res = await axios.get('https://api.lotteryoflegends.com/code');
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

          <LocalForm
            className='form'
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
            initialState={{region: 'na1'}}
          >
            <div className='form__title'>
              <h3>Register with your Summoner name!</h3>
            </div>
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
            <button className='big-button' type="submit">Sign up!</button>
            <button className='big-button' type="button" onClick={()=>{history.push('/')}}>Back</button>
          </LocalForm>
        </div>
      </div>
  );
  }
};

export default connect()(Register);
