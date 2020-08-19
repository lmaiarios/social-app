import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import TopBar from './components/topbar/topBar';
import SideBar from './components/sidebar/sideBar';
import Country from './pages/country/country';
import Home from './pages/home/home';

function App() {
  const [user, setUser] = useState();

  const getUser = () => {
    const userData = sessionStorage.getItem('user');

    if (userData){
      console.log(JSON.parse(userData));
      setUser(JSON.parse(userData));
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
          console.log(result);
        }
      )
    }
  }

  useEffect(
    () => getUser(), []
  )

  return (
    <div className="App">
      <TopBar />
      {
        user &&
        <SideBar
          picture={user.picture.medium}
          name={user.name.title+' '+user.name.first+' '+user.name.last}
          phone={user.phone}
          email={user.email}
          city={user.location.city}
          country={user.location.country}
        />
      }
      <div className='page-container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/country/:country_name' component={Country} />
          
        </Switch>
      </div>        
      
    </div>
  );
}

export default App;
