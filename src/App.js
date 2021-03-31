import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import useLocalStorage from './hooks/useLocalStage'
import { BrowserRouter } from 'react-router-dom';
import { decode } from 'jsonwebtoken';
import UserContext from './UserContext'
import Nav from './Nav';
import Routes from './Routes';

export const LOCAL_STORAGE_TOKEN_ID = 'jobly_token';


function App() {

  const [user, setUser] = useState(null);

  const [token, setToken] = useLocalStorage(LOCAL_STORAGE_TOKEN_ID)

  useEffect(() => {
    async function getCurrentUser() {
      try {

        let { username } = decode(token);
        let fetchedUser = await JoblyApi.getUser(username);
        setUser(fetchedUser)


      } catch (err) {
        setUser(null);
      }
    }
    getCurrentUser();
  }, [token]);
  
  function handleLogout() {
    setUser(null);
    setToken(null);
  }
  
  return (

    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Nav logout={handleLogout} />
          <Routes setToken={setToken}/>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
