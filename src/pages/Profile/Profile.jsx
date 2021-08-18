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
    <section>
     
<div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
          <div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg mx-auto  border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer " >
        <div class="bg-indigo-500  flex h-200 items-center">
          {/* add logo to top center  */}
          <img src={profile.avatar} alt={`${profile.name}'s Profile`} />
        {/* <p class="ml-4 text-white uppercase">Title</p> */}
        </div>

          <h1 class="py-6 px-6 text-xl tracking-wide text-center">{profile.name}</h1>
     
    
          <p class="py-6 px-6 text-lg tracking-wide text-center">{profile.email}</p>
       
          <p class="py-6 px-6 text-lg tracking-wide text-center">{profile?.address} {profile?.city} {profile?.zipcode} {profile?.state} {profile?.country}</p>
     
  
          {props.userProfile?._id === profile._id &&
  <Link to={`/profile/${profile._id}/update`}><button class="px-2 py-1 m-1 mt-5 ml-5 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-700 rounded" > Update Profile!</button></Link>
      }
      {props.userProfile?._id === profile._id &&
  <Link to='/shops/create/new'><button class="px-4 py-1 m-1 mb-5  text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-700 rounded">Add a Shop!</button></Link>
      } 
            </div>

        </div>
        </div>
        
      </section> 
      <div class="mb-10 "></div>
      {profile.cart?.length > 0 && props.userProfile?._id === profile._id &&
             <section class=" mt-10 mb-10">
        <h1 class="text-xl text-indigo-500 mb-5 font-bold text-center">Here are the Items in your Cart</h1>
        <div class="grid gap-4 grid-cols-4"> 
        {profile.wishlist?.map(item => {
          return(
            <div class="container mx-auto">
  <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
      <div class="h-20 bg-indigo-500 flex items-center justify-between" 
        key={item._id}>
          <Link to={`/products/${item._id}`}>
          <img src={item?.pictures[0]} alt={`Product Picture`} />
       
          </Link>
      </div>  
        <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
          <p>{item.name} - ${item.price}</p>
        </div>
  </div>
</div>
          )
        })}
        </div>
      </section>
      }
      {profile.wishlist?.length > 0 && props.userProfile?._id === profile._id &&
      <section class=" mt-10 mb-10">
        <h1 class="text-xl text-indigo-500 mb-5 font-bold text-center">Here are the Items in your Wishlist</h1>
        <div class="grid gap-4 grid-cols-4">
        {profile.wishlist?.map(item => {
          return(
            <div class="container mx-auto">
  <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
      <div class="h-20 bg-indigo-500 flex items-center justify-between" 
        key={item._id}>
          <Link to={`/products/${item._id}`}>
          <img src={item?.pictures[0]} alt={`Product Picture`} />
       
          </Link>
      </div>  
        <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
          <p>{item.name} - ${item.price}</p>
        </div>
  </div>
</div>
          )
        })}
        </div>
      </section>
      }
      {profile.shops?.length > 0 &&
      <section>
        <h1 class=" text-xl text-indigo-500 font-bold text-center" >Here are the Shops that you Own</h1>
        <div class="grid gap-4 grid-cols-4"> 
        {profile.shops?.map(shop => {
          return(
            <div>
            <div class="flex flex-col md:flex-row justify-center flex-wrap gap-3 mt-10">
          <div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer" >
        <div class="bg-indigo-500 flex h-200 items-center" key={shop._id}>
          <img src={shop?.logo} alt={`Shop Picture`}/>
        </div>
          <h1 class="py-6 px-6 text-xl tracking-wide text-center">{shop.name}</h1>
       {props.userProfile?._id === profile._id &&
      <Link to={`/shops/${shop._id}/manage`}>
            <div class="flex justify-center px-5 mb-2 text-sm ">
              <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
              Manage Your Shop Here!
              </button>
            </div>
      </Link>
        }
        </div>
        </div>
        </div>
        </div>
          )
        })}
      </div>
      </section>
      }
      {profile.orders?.length > 0 &&
      <section>
        <h1>Here are Your Past Orders</h1>
        {profile.orders?.map(order => {
          return(


            <div key={order._id}>
            <h1 class="py-6 px-6 text-lg tracking-wide text-center">Order Number: {order._id}</h1>
            <h1 class="py-6 px-6 text-lg tracking-wide text-center">Order Cost: ${order.price}</h1>
            <h1 class="py-6 px-6 text-lg tracking-wide text-center">{order.items.map(item => <> {item} </>)}</h1>

            <div class="flex justify-center px-5 mb-2 text-sm ">
            {props.userProfile?._id === profile._id &&
            <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={() => props.removeOrderFromHistory(order._id)}>
              Remove Order From History
            </button>
            }
            </div>
          </div>
          )
        })}
      </section>
      }
      <div class="text-center">
      </div> 
      </div>
    </>
  );
}
 
export default Profile;