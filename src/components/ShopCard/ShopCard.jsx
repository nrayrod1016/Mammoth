import React from 'react';
import { Link } from 'react-router-dom'


function ShopCard ({Shop}) { 
    return ( 
      <Link to={`/shops/${Shop._id}`}>
      <div className="card">
      <div className="card-body">
        <img src={Shop.logo} alt={`${Shop.name}'s Logo`}/>
        <h2 className="card-text">{Shop.name}</h2>
        <p className="card-text">{Shop.address}</p>
        <p className="card-text">{Shop.phoneNum}</p>
        <p className="card-text">{Shop.email}</p>
        <p className="card-text">{Shop.desc}</p>
        <p className="card-text">{Shop.tags}</p>
        <p className="card-text">{Shop.owner.name}</p>
      </div>
      <div className="card-footer">
       
      </div>
    </div>
      </Link>
    )
}

export default ShopCard