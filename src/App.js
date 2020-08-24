import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import TopBar from './components/topbar/topBar';
import SideBar from './components/sidebar/sideBar';
import Country from './pages/country/country';
import Home from './pages/home/home';
import UserContext from './context/userContext';
import EditUser from './pages/editUser/editUser';

function App() {
  const [user, setUser] = useState();
  
  const getUser = () => {
    const userData = sessionStorage.getItem('user');

    if (userData){
      const data = JSON.parse(userData);
      setUser(data);
    }

    else{
      fetch('https://randomuser.me/api/')
      .then(
        res => res.json()
      )
      .then(
        data => {
          const result = data.results[0];
          setUser(result);
          sessionStorage.setItem('user', JSON.stringify(result));
        }
      )
    }
  }

  useEffect(
    () => getUser(), []
  )

  return (
    <UserContext.Provider value={{user, setUser}}>
        <div className="App">
        <TopBar />
        {
          user &&
          <>
            <SideBar
              picture={user.picture.medium}
              name={user.name.title+' '+user.name.first+' '+user.name.last}
              phone={user.phone}
              email={user.email}
              city={user.location.city}
              country={user.location.country}
              latitude={user.location.coordinates.latitude}
              longitude={user.location.coordinates.longitude}
            />
          
            <div className='page-container'>
              <Switch>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route path='/country/:country_name' component={Country} />
                <Route path='/edit'>
                  <EditUser />
                </Route>
                
              </Switch>
            </div> 
          </>       
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
