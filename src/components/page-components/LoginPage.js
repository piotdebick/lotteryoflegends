import React from 'react';
import { connect } from 'react-redux';
import { history } from 'AppRouter';
import { Control, LocalForm } from 'react-redux-form';
import { login } from 'actions';

export const LoginPage = ({ login }) => (
    <LocalForm
      model="user"
      onSubmit={(user) => login(user)}
      initialState={{region: 'na1'}}
    >
      <h2>Login</h2>
      <p>Login with your Summoner name!</p>
      <label className="label" htmlFor="user.username">Username</label>
      <Control.text model="user.username" id="user.username" required/>

      <label htmlFor="user.password">Password</label>
      <Control.text model="user.password" type="password" id="user.password" required/>

      <label htmlFor="user.region">Region</label>
      <Control.select model="user.region" id="user.region" required>
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
);

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
