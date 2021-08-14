import React from 'react'; 
import ShopCard from '../../components/ShopCard/ShopCard'


function ShopIndex(props) { 

    return ( 
        <> 
        <h1>Shop Index Page</h1>
        {props.shops.map(shop => ( 
            <div key={shop._id}>
                <ShopCard />
                

                </div> 
        ))}
            

        </> 
    )
}

export default ShopIndex