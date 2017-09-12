export var startChampionsFetch = () => {
  return {
    type: 'START_CHAMPIONS_FETCH'
  };
};

export var completeChampionsFetch = (champions) => {
  return {
    type: 'COMPLETE_CHAMPIONS_FETCH',
    champions
  };
};

//*** login actions
export var loginAttempt = (user) => {
  return {
    type: 'LOGIN_ATTEMPT',
    user
  };
};

export var loginSuccess = (response) => {
  return {
    type: 'LOGIN_SUCCESS',
    response
  }
}

export var loginFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
    error
  };
};

// *** logout actions
export var logoutAttempt = (user) => {
  return {
    type: 'LOGOUT_ATTEMPT',
    user
  };
};

export var logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
  }
}

export var logoutFailed = (error) => {
  return {
    type: 'LOGOUT_FAILED',
    error
  };
};

// *** signup actions
export var signupAttempt = (user) => {
  return {
    type: 'SIGNUP_ATTEMPT',
    user
  };
};

export var signupSuccess = () => {
  return {
    type: 'SIGNUP_SUCCESS',
  }
}

export var signupFailed = (error) => {
  return {
    type: 'SIGNUP_FAILED',
    error
  };
};

// *** auth actions

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

export var badToken = (error) => {
  return {
    type: 'BAD_TOKEN',
    error
  };
};
