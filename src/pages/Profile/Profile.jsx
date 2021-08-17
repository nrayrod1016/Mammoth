import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const Profile = (props) => {
  const [profile, setProfile] = useState({})
  const { id } = useParams()

  useEffect(() => { 
    profileService.getProfile(id)
    .then(profile => {
      setProfile(profile)
    }
      )
  }, [id, props.userProfile]) 

  


  return (
    <>
    <div>
      <img src={profile.avatar} alt={`${profile.name}'s Profile`} />
      <h1>{profile.name}</h1>
      <h3>{profile.email}</h3>
      <h3>{profile?.address} {profile?.city} {profile?.zipcode} {profile?.state} {profile?.country}</h3>
      {profile.cart?.length > 0 && props.userProfile?._id === profile._id &&
      <section>
        <h1>Here are the Items in your Cart</h1>
        {profile.cart?.map(item => {
          return(
          <div key={item._id}>
            <Link to={`/products/${item._id}`}>
              <img src={item?.pictures[0]} alt={`Product Picture`}/>
              <h1>{item.name} - ${item.price}</h1>
            </Link>
          </div>
          )
        })}
      </section>
      }
      {profile.wishlist?.length > 0 && props.userProfile?._id === profile._id &&
      <section>
        <h1>Here are the Items in your Wishlist</h1>
        {profile.wishlist?.map(item => {
          return(
            <div key={item._id}>
              <Link to={`/products/${item._id}`}>
                <img src={item?.pictures[0]} alt={`Product Picture`}/>
                <h1>{item.name} - ${item.price}</h1>
              </Link>
            </div>
          )
        })}
      </section>
      }
      {profile.shops?.length > 0 &&
      <section>
        <h1>Here are the Shops that you Own</h1>
        {profile.shops?.map(shop => {
          return(
            <div key={shop._id}>
            <img src={shop?.logo} alt={`Shop Picture`}/>
            <h1>{shop.name}</h1>
            {props.userProfile?._id === profile._id &&
            <Link to={`/shops/${shop._id}/manage`}>
              Manage Your Shop Here!
            </Link>
            }
          </div>
          )
        })}
      </section>
      }
      {profile.orders?.length > 0 &&
      <section>
        <h1>Here are Your Past Orders</h1>
        {profile.orders?.map(order => {
          return(
            <div key={order._id}>
            <h1>Order Number: {order._id}</h1>
            <h1>Order Cost: ${order.price}</h1>
            <h1>{order.items.map(item => <> {item} </>)}</h1>
            {props.userProfile?._id === profile._id &&
            <button onClick={() => props.removeOrderFromHistory(order._id)}>Remove Order From History</button>
            }
          </div>
          )
        })}
      </section>
      }
    {props.userProfile?._id === profile._id &&
      <Link to={`/profile/${profile._id}/update`}>Update Profile!</Link>
    }
    {props.userProfile?._id === profile._id &&
       <Link to='/shops/create/new'>Add a Shop!</Link>
      }
      </div>
    </>
  );
}
 
export default Profile;