import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div>
            <div className="row m-0">
                <div className="col-lg-10 mt-5">
                    <div className="row row-cols-3">
                        {
                            players.map(player => <Player key={player.id} player={player} />)
                        }
                    </div>
                </div>
                <div className="col-lg-2">
                    <h5>Player summery</h5>
                </div>
            </div>
        </div>
    );
};

export default Players;