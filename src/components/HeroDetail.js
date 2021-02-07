import React, {useState, useEffect} from 'react';

function HeroDetail({match}) {
  useEffect (() => {
    fetcTeam();
  }, []);

  const [players, setTeam] = useState([]);

  const fetcTeam = async () => {
    const playersData = await fetch(`https://api.opendota.com/api/teams/${match.params.id}/players`);

    const players = await playersData.json();
    setTeam(players);
  };

  return (
    <div className="App">
      {players.map((player) => (
        <h1 key={player.account_id}>{player.name}</h1>
      ))}
    </div>
  );
}

export default HeroDetail;
