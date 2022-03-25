import React from 'react';

const Player = ({ player }) => {
    console.log(player);
    const { about, name, picture, balance } = player;
    return (
        <div>
            <div className="card p-2">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6>Balance: {balance} </h6>
                    <p className="card-text">{about.slice(0, 100)}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div >
    );
};

export default Player;