import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import cookieUtil from '../utils/cookie';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { REACT_APP_API_URL } = process.env;
  const [user, setUser] = useState({});

  const validateEmptyFields = (user) => {
    Object.values(user).forEach((v) => {
      if (v === '') throw Error('Fields cannot be empty');
    });
  }

  const login = async (payload) => {
    validateEmptyFields(payload);

    try {
      const { data } = await axios.post(`${REACT_APP_API_URL}/login`, payload);

      cookieUtil.setCookie('token', data.token, 24);
      setUser({ username: payload.username, token: data.token });
      return 'Login succeded!';
    } catch ({ response }) {
      throw Error(response.data.message);
    }
  }

  const createUser = async (payload) => {
    validateEmptyFields(payload);

    try {
      await axios.post(`${REACT_APP_API_URL}/user`, payload);
      return 'User created!'
    } catch ({ response }) {
      throw Error(response.data.message);
    }
  }

  const logout = () => {
    cookieUtil.deleteCookie('token');
    setUser({});
  }

  const fetchUser = async () => {
    const token = cookieUtil.getCookie('token');

    if (token) {
      try {
        const { data } = await axios.get(`${REACT_APP_API_URL}/user`, { headers: { 'Authorization': token } });
        setUser({ username: data.username, token });
      } catch (e) {}
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    user,
    login,
    createUser,
    logout,
  };

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;



