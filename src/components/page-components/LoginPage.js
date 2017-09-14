import React from 'react';
import { connect } from 'react-redux';
import { history } from 'AppRouter';
import { Control, LocalForm } from 'react-redux-form';
import { login } from 'actions';

export const LoginPage = ({ login }) => (
  <div className='container'>
    <div className='box'>
      <div className='box__title'>
        <h2>LOTTERY OF LEGENDS</h2>
        <h4>Login using your Summoner name!</h4>
      </div>
      <LocalForm
        className='form'
        model="user"
        onSubmit={(user) => login(user)}
        initialState={{region: 'na1'}}
      >
        <Control.text className='form__input' model="user.username" id="user.username" placeholder='Summoner Name' required/>
        <Control.text className='form__input' model="user.password" type="password" id="user.password" placeholder='Password' required/>
        <Control.select className='form__input' model="user.region" id="user.region" required>
          <option value="na1" defaultValue={true}>NA</option>
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
        <button type="submit" className="button">Login</button>
        <button type="button" className="button" onClick={() => {history.push('/register')}}>Register</button>
      </LocalForm>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
