import React from 'react';

const Player = ({ player, playerDetails }) => {

    const { about, name, picture, balance } = player;
    return (
        <div>
            <div className="card p-2 my-3">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6>Balance: {balance} </h6>
                    <p className="card-text">{about.slice(0, 100)}</p>
                </div>
                <div className="card-footer bg-warning rounded-3">
                    <button onClick={() => playerDetails(player)} className='bg-warning w-100 border-0'>Player Details</button>
                </div>
            </div>
        </div >
    );
};

export default Player;
