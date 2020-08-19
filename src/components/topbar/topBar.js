import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './topBar.css';

function TopBar() {
  const [search, setSearch] = useState('');

  const doSearch = (e) => e.preventDefault();

  return (
    <div className="topbar">
      <form onSubmit={doSearch}>
        <Link to='/'>
          <i id='home-icon' className="fas fa-home"></i>
        </Link>

        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default TopBar;
