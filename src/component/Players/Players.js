import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([])
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    const playerDetails = (player) => {
        const newDetails = [...details, player]
        setDetails(newDetails)
    }
    return (
        <div>
            <div className="row m-0">
                <div className="col-lg-10 mt-5">
                    <div className="row row-cols-3">
                        {
                            players.map(player => <Player key={player.id} player={player} playerDetails={playerDetails} />)
                        }
                    </div>
                </div>
                <div className="col-lg-2">
                    <Details details={details} />
                </div>
            </div>
        </div>
    );
};

export default Players;