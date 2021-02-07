import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect (() => {
    fetchTeams();
  }, []);

  const [teams, setteams] = useState([]);

  const fetchTeams = async () => {
    const data = await fetch('https://api.opendota.com/api/teams');

    const teams = await data.json();
    setteams(teams);
  };

  return (
    <div className="App">
      {teams.map((team) => (
        <h1 key={team.team_id}>
          <Link to={`shop/${team.team_id}`}>{team.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
