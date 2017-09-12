
export var searchTextReducer = (state='', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var leagueReducer = (state = {isFetching: false, champions: []}, action) => {
  switch (action.type) {
    case 'START_CHAMPIONS_FETCH':
      return {
        isFetching: true,
        champions: []
      };
    case 'COMPLETE_CHAMPIONS_FETCH':
      return {
        isFetching: false,
        champions: action.info
      };
    case 'TOGGLE_CHAMPION':
      var champs = state.champions;
      return {
        ...state,
        champions: champs.map((champion) => {
          if(champion.id === action.id){
            var nextChosen = !champion.chosen;
              return {
                ...champion,
                chosen: nextChosen
              }
          } else return { ...champion }
        })
      };
    default:
      return state;
  };
};

export var chosenReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CHAMPION':
      return [
        ...state,
        {
          id: action.champion.id,
          chosen: true,
          champ: action.champion.champ
        }
      ];
    case 'REMOVE_CHAMPION':
      return state.filter((champion) => {
        return champion.id !== action.id;
      });
    default:
      return state;
  };
};

export var signupReducer = (state = {isSubmitting: false, isSignedUp: false, error: null}, action) => {
  switch(action.type){
    case 'SIGNUP_ATTEMPT':
      return {
        ...state,
        isSubmitting: true
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
        isSignedUp: true
      };
    case 'SIGNUP_FAILED':
      return {
        ...state,
        isSubmitting: false,
        isSignedUp: false,
        error: action.error
      };
    default:
      return state;
  }
};

export var userReducer = (state={username:'', region:'', isFetching:false, error:null }, action) => {
  switch(action.type){
    case 'LOGIN_ATTEMPT':
      return {
        ...state,
        isFetching: true,
        username: action.info.username,
        region: action.info.region
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: null
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case 'LOGOUT_ATTEMPT':
      return {
        ...state,
        isFetching: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        username: '',
        region: '',
        error: null
      };
    case 'LOGOUT_FAILED':
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        error: action.error
      };
    default:
      return state;
  }
};

///make an auth reducer for jwt token validation
export const authReducer = (state={isAuthenticated: false, authToken: '', error: ''}, action ) => {
  switch(action.type){
    case 'SET_TOKEN':
      return {
        isAuthenticated: true,
        authToken: action.info
      };
    case 'REMOVE_TOKEN':
      return {
        isAuthenticated: false,
        authToken: ''
      };
    case 'BAD_TOKEN':
      return {
        isAuthenticated: false,
        error: action.error
      };
    default:
      return state;
  }
}
