import axios from 'axios';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addChampion = (champion) => {
  return {
    type: 'ADD_CHAMPION',
    champion
  };
};

export var removeChampion = (id) => {
  return {
    type: 'REMOVE_CHAMPION',
    id
  };
};

export var toggleChampion = (id) => {
  return {
    type: 'TOGGLE_CHAMPION',
    id
  };
};
export var setToken = (authToken) => {
  return {
    type: 'SET_TOKEN',
    authToken
  };
};

export var removeToken = () => {
  return {
    type: 'REMOVE_TOKEN'
  };
};

// *** request actions
export var requestAttempt = (data) => {

  return {
    type: data.type,
    info: data.info
  }
}

export var requestSuccess = (data) => {
  return {
    type: data.type,
    info: data.info
  }
}

export var requestFailed = (data) => {
  console.log(data.error);
  return {
    type: data.type,
    error: data.error
  }
}

export var championsFetch = () => {
  return async (dispatch, getState) => {
    dispatch(requestAttempt({
      type: 'START_CHAMPIONS_FETCH',
      info: ''
    }));
    try{
      var champions = await axios.get('http://localhost:3001/champs');
      dispatch(requestSuccess({
        type: 'COMPLETE_CHAMPIONS_FETCH',
        info: champions.data
      }));
    } catch (e) {
      dispatch(requestFailed({
        type: 'FAIL_CHAMPIONS_FETCH',
        error: e
      }))
    }
  };
};

export var login = (user) => {
  return async (dispatch, getState) => {
    try{
      dispatch(requestAttempt({
        type: 'LOGIN_ATTEMPT',
        info: user
      }));
      var res = await axios.post('http://localhost:3001/users/login', {
          username: user.username,
          password: user.password,
          region: user.region
      });
      dispatch(requestSuccess({
        type: 'LOGIN_SUCCESS',
        info: res
      }));
      dispatch(requestSuccess({
        type:'SET_TOKEN',
        info: res.headers['x-auth']
      }));
    } catch (e) {
      dispatch(requestFailed({
        type: 'LOGIN_FAILED',
        error: e
      }));
    }
  };
};

export var logout = (token) => {
  return async (dispatch, getState) => {
    try{
      dispatch(requestAttempt({
        type:'LOGOUT_ATTEMPT'
      }));
      await axios.delete('http://localhost:3001/users/me/token',{
        headers: {
          "x-auth": token
        }
      });
      dispatch(requestSuccess({
        type:'LOGOUT_SUCCESS'
      }));
      dispatch(requestSuccess({
        type:'REMOVE_TOKEN'
      }));
    } catch (e) {
      dispatch(requestFailed({
        type:'LOGOUT_SUCCESS',
        error: e
      }));
    }
  };
};

export var signup = (user) => {
  return async (dispatch, getState) => {
    try{
      dispatch(requestAttempt({
        type:'SIGNUP_ATTEMPT',
        info: user
      }));
      var res = await axios.post('http://localhost:3001/users', {
        username: user.username,
        password: user.password,
        region: user.region
      });
      dispatch(requestSuccess({
        type:'SIGNUP_SUCCESS',
        info: res
      }));
    } catch (e) {
      dispatch(requestFailed({
        type:'SIGNUP_FAILED',
        error: e
      }));
    }
  };
};

export var secretCode = () => {
  return async (dispatch, getState) => {
    try{
      dispatch(getCodeAttempt());
      var res = await axios.get('http://localhost:3001/code');
      dispatch(getCodeSuccess(res));
    } catch (e) {
      dispatch(getCodeFailed(e));
    }
  };
};

export var checkAuthToken = (authToken) => {
  return async (dispatch, getState) => {
    try {
      var res = await axios.get('http://localhost:3001/users/me',{
        headers: {
          "x-auth": authToken
        }
      });
      dispatch(requestSuccess({
        type:'SET_TOKEN',
        info: authToken
      }));
      dispatch(requestAttempt({
        type:'LOGIN_ATTEMPT',
        info: res.data
      }));
      dispatch(requestSuccess({
        type:'LOGIN_SUCCESS',
        info: res
      }));
    } catch (e) {
      dispatch(requestFailed({
        type:'BAD_TOKEN',
        error: e
      }));
    }
  };
};
