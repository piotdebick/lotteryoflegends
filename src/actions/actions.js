import axios from 'axios';
import { history } from 'AppRouter';

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

export var submissionSuccess = () => {
  return {
    type: 'SET_SUBMISSION_COUNT'
  }
}
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

export var resetChampionState = (champions) => {
  return async (dispatch, getState) => {
    for(var champ in champions){
      dispatch(toggleChampion(champions[champ].id));
      dispatch(removeChampion(champions[champ].id));
    }
  };
};

export var championsFetch = (request, type) => {
  return async (dispatch, getState) => {
    dispatch(requestAttempt({
      //START_CHAMPIONS_FETCH
      type: type.start,
      info: ''
    }));
    try{
      var champions = await axios.get(request);
      dispatch(requestSuccess({
        //COMPLETE_CHAMPIONS_FETCH
        type: type.complete,
        info: champions.data
      }));
    } catch (e) {
      dispatch(requestFailed({
        //FAIL_CHAMPIONS_FETCH
        type: type.fail,
        error: e
      }))
    }
  };
};

export var ticketFetch = (userID, type) => {
  return async(dispatch, getState) => {
    dispatch(requestAttempt({
      //START_TICKET_FETCH
      type: type.start,
      info: ''
    }));
    try{
      var res = await axios.get(`https://api.lotteryoflegends.com/pick/user/${userID}`);
      dispatch(requestSuccess({
        //COMPLETE_TICKET_FETCH
        type: type.complete,
        info: res.data.picks
      }));
    } catch (e) {
      dispatch(requestFailed({
        //FAIL_TICKET_FETCH
        type: type.fail,
        error: e
      }))
    }
  }
}

export var login = (user) => {
  return async (dispatch, getState) => {
    try{
      var res = await axios.post('https://api.lotteryoflegends.com/users/login', {
          username: user.username,
          password: user.password,
          region: user.region
      });
      dispatch(checkAuthToken(res.headers['x-auth']));
      dispatch(requestSuccess({
        type: 'LOGIN_SUCCESS',
        info: res
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
      await axios.delete('https://api.lotteryoflegends.com/users/me/token');
      dispatch(requestSuccess({
        type:'LOGOUT_SUCCESS'
      }));
      history.push('/');
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
      var res = await axios.post('https://api.lotteryoflegends.com/users', {
        username: user.username,
        password: user.password,
        region: user.region,
        code: user.code
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
      var res = await axios.get('https://api.lotteryoflegends.com/code');
      dispatch(getCodeSuccess(res));
    } catch (e) {
      dispatch(getCodeFailed(e));
    }
  };
};

export var checkAuthToken = (authToken) => {
  return async (dispatch, getState) => {
    try {
      axios.defaults.headers.common['x-auth'] = authToken;
      var res = await axios.get('https://api.lotteryoflegends.com/users/me');
      localStorage.setItem('authToken', authToken);
      dispatch(requestSuccess({
        type:'SET_TOKEN',
        info: authToken
      }));
      dispatch(requestAttempt({
        type:'SET_USER_DATA',
        info: res.data
      }));

    } catch (e) {
      dispatch(requestFailed({
        type:'BAD_TOKEN',
        error: e
      }));
    }
  };
};
