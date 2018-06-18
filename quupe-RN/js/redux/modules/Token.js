import { createToken, queryToken, deleteToken } from '../../config/models';

const GET_TOKEN = 'GET_TOKEN';
const CREATE_TOKEN = 'CREATE_TOKEN';
const GET_ERROR = 'GET_ERROR';
const DELETE_TOKEN = 'DELETE_TOKEN';


export const getToken = () => ({
  type: GET_TOKEN
});

export const createTheToken = () => ({
  type: CREATE_TOKEN
});

export const getError = (error) => ({
  type: GET_ERROR,
  payload: error
});

export const deleteTheToken = () => ({
  type: DELETE_TOKEN
});

export const createUserToken = (token, id) => dispatch => {
  try {
    createToken(token, id);
    dispatch(createTheToken());
    dispatch(getToken());
  }
  catch (e) {
    dispatch(getError(e.message));
  }
}

export const deleteUserToken = (token) => dispatch => {
  try {
    deleteToken(token);
    dispatch(deleteTheToken());
    dispatch(getToken());
  } catch (e) {
    dispatch(getError(e.message));
  }
}

const initialState = {
  token: '',
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN: {
      return { ...state, token: queryToken(), error: '' };
    }
    case CREATE_TOKEN:
    case DELETE_TOKEN:
    case GET_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}