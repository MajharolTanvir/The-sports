import React from 'react';

const Details = ({ details }) => {
    console.log(details);
    return (
        <div>
            <h4 className='my-4 fw-bold'>Player details</h4>
            {
                details.map(detail =>
                    <div>
                        <div className="card mb-3">
                            <img className="card-img-top" src={detail.picture} alt="Card" />
                            <div className="card-body">
                                <h6 className="card-title">Name:{detail.name}</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Balance:{detail.balance}</li>
                                <li className="list-group-item">Age:{detail.age}</li>
                                <li className="list-group-item">Gender:{detail.gender}</li>
                            </ul>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Details;