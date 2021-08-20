import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as recentService from "../../services/recentService"
import './Home.css'
import { AiOutlineGithub } from "react-icons/ai";
import ShopCard from '../../components/ShopCard/ShopCard';
import BlakeCard from '../../components/DevCards/BlakeCard';
import NickCard from '../../components/DevCards/NickCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import RecentActivityCard from '../../components/RecentActivityCard/RecentActivityCard';
import WishListCard from '../../components/WishListCard/WishListCard';
import CartListCard from '../../components/CartListCard/CartListCard';


const Home = (props) => { 
  const [recentActivity, setRecentActivity] = useState([])


  useEffect(() => {
    recentService.getRecentActivity()
    .then(recentActivity => {
      setRecentActivity(recentActivity)
    })
  }, [props.userProfile])


    return ( 
<> 
{/* <div class="home-container content-center" > */}
{/* <div class="Home" >  */}
<section class="align-center">
 	<div class="bg-white text-grey py-20 justify-center items-center">
 		<div class="container mx-auto flex flex-col md:flex-row justify-center items-center my-12 md:my-24">
 			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
 				<h1 class="text-3xl md:text-5xl p-2 text-indigo-500 tracking-loose">Mammoth</h1>
 				<h2 class="text-3xl text-grey-100 md:text-5xl leading-relaxed md:leading-snug mb-2">By Mastedons
 				</h2>
 				<p class="text-sm md:text-base text-black-50 mb-4">An easy and well managed marketplace platform for Small Businesses to promote and sell their products.</p>
 				<a href="/shops"
					class="bg-transparent hover:text-indigo-500 text-indigo-500 hover:text-indigo-200 rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-300 hover:border-transparent">
					Explore Shops</a>
			</div>
		</div> 
	</div>
</section>



<section>
	<div class="bg-white text-black py-20">
 		<div class="container mx-auto md:flex-row items-center my-12 md:my-24">
 				<h1 class="text-3xl text-center md:text-5xl p-2 text-indigo-500 tracking-loose">Recent 	Shops
				</h1>
 			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 ">
 				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
 				</h2>
				 <div class="grid gap-40 grid-rows-2 grid-flow-col ml-5 "> 
 				{recentActivity.shops?.map(shop => {
					 return (
						 <ShopCard 
						 Shop={shop}
						 key={shop._id}
						 />
					 )
				 })}
 				</div> 
			</div>
		</div>
	</div>
</section>


<section>
<div class=" bg-white text-black py-20">
 		<div class="container mx-auto  md:flex-row items-center my-12 md:my-24">
 				<h1 class="text-3xl text-center md:text-5xl p-2 text-indigo-500 tracking-loose">

				 Recent	Products
				</h1>
 				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
 				</h2>
				 <div class="grid gap-72 grid-cols-5 w-100"> 
 				{recentActivity.products?.map(product => {
					 return (
						 <ProductCard
						 Product={product}
						 key={product._id}f
						 />
							 )
						 })}
 					</div> 
	
	
		</div>
	</div>
</section>



{recentActivity.profile &&
<section> 
<div class=" bg-white text-black py-20">
 		<div class="container mx-auto  md:flex-row items-center my-12 md:my-24">
 				<h1 class="text-3xl text-center md:text-5xl p-2 text-indigo-500 tracking-loose">
					 Your Recent Activity</h1>
 				<h2 class="text-3xl md:text-5xl p-2 leading-relaxed md:leading-snug mb-2">
 				</h2>
				 <div class="grid gap-72 grid-cols-2 w-100"> 
 			
						{recentActivity.profile?.orders.length > 0 &&
						recentActivity.profile?.orders?.map(order => {
							<RecentActivityCard /> 
						})}
							</div> 
			
			
		</div>
	</div>
</section>
}




<section>
<div class=" bg-white text-black py-20">
 		<div class="container mx-auto  md:flex-row items-center my-12 md:my-24">
 				<h1 class="text-3xl mb-10 text-center md:text-5xl p-2 text-indigo-500 tracking-loose">
					 Dont Forget about the Items in your Cart
				</h1>
				 {recentActivity.profile?.cart.length > 0 &&
 				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
 				</h2>
}
				 <div class="grid gap-72 grid-cols-5 w-100"> 
 				{recentActivity.profile?.cart?.map(item => {
					 return (
						 <Link to={`/checkout`}>
							 <CartListCard 
							 key={item._id}
							 item={item}
							 /> 
							 </Link>
						 
					)
				})}
			
				 
 			</div> 
		
			
					</div>
				</div>
</section>



<section>
{recentActivity.profile?.wishlist.length > 0 &&
	<div class=" bg-white text-black py-20">
 		<div class="container mx-auto  md:flex-row items-center my-12 md:my-24">
 				<h1 class="text-3xl mb-20 text-center md:text-5xl p-2 text-indigo-500 tracking-loose">
					 Dont Forget about the Items in your WishList
					 </h1>
 				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
 				</h2>
				 <div class="grid gap-72 grid-cols-4 w-90 -m-10"> 
 				{recentActivity.profile?.wishlist?.map(item => {
					 return (
						 <Link to={`/products/${item._id}`}>
							<WishListCard 
							key={item._id}
							item={item}
							/> 
				 </Link>
					)
				})}
			
				 
 	
			</div>
			
					</div>
				</div>
}
</section>











<section> 
	<div class=" bg-white text-black py-20">
 		<div class="container mx-auto  md:flex-row items-center my-12 md:my-24">
 				<h1 
				 class="text-3xl mb-1 text-center md:text-5xl p-2 text-indigo-500 tracking-loose">
				 Meet the Devs
				</h1>
		
 				<h2 
				 class="text-3xl md:text-5xl p-2 leading-relaxed md:leading-snug mb-2">
 				</h2>
				 <div 
				 class="grid gap-72 grid-cols-2 w-100"> 
						<BlakeCard />
				 		<NickCard /> 
					</div>
			
		</div>
	</div>
</section>

{/* <section>
<div class="bg-white text-black py-20"> 
 		<div class="container mx-auto flex flex-col md:flex-row  my-12 md:my-24">
 			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
 				<h1 class="text-3xl md:text-5xl p-2 text-indigo-500 tracking-loose ">Your Recent Activity</h1>
 				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
 				</h2>
				 <div class="grid gap-72 grid-cols-5 w-100"> 
				 {recentActivity.profile?.orders.length > 0 &&
 				recentActivity.profile?.orders?.map(order => {
					 return (
						 <RecentActivityCard
						 Order={order}
						 key={order._id}f
						 />
					 )
				 })}
 			</div> 
			</div>
			
					</div>
				</div>
</section> */}


{/* {recentActivity.profile &&
<section>
<div class="bg-white text-black py-20">
 		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
 			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
 				<h1 class="text-3xl md:text-5xl mb-5  p-2 text-indigo-500 tracking-loose text-center">Your Recent Activity</h1>
 				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
 				</h2>
<div class="grid gap-72 grid-cols-5 w-100 ml-10 mb-10 mt-5" >
				{recentActivity.profile?.orders.length > 0 &&
 				recentActivity.profile?.orders?.map(order => {
					 return (
						 
						 <div class="container mx-auto">
		<div class="bg-white w-60 h-40 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
		<h1 class="h-20 text-white text-sm text-center bg-indigo-500 flex items-center justify-between">Order Number: {order._id}</h1>
		<p class="mr-4 text-black text-center font-thin text-lg">{order.items.map(item => { return item})}</p>
      <div class="flex justify-between px-5 mb-2 text-sm  text-gray-600">
        <p class="text-center ">Total Cost: ${order.price}</p>
      </div>
    </div>  
</div>

					 )
				 })
				}
</div> 



<div class="bg-white text-black py-20">
 		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24"></div>
				 <h1 class="text-3xl md:text-5xl p-2 text-indigo-500 tracking-loose text-center ">Don't forget about these items in your cart!</h1>
				{recentActivity.profile?.cart.length > 0 &&
 			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				
				 <div class="grid gap-72 grid-cols-5 w-100 ml-10 mb-10 mt-5" >
				<Link to={`/checkout`}>
 				{recentActivity.profile?.cart?.map(item => {
					 return (
						 <div class="container mx-auto">
						<div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
						<h1 class="h-20 bg-indigo-500 flex items-center justify-between"><img src={item?.pictures[0]} alt={`${item.name}'s pic`} /></h1>
				
								</div>  
									<div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
										<p>{item.name}</p>
									</div>
						</div>
					)
				})}
			
				 
				 </Link>
				</div>
				 </div> 
			}
				 </div> 



				 <h1 class="text-5xl p-2 text-indigo-500 tracking-loose md:text-5xl p-2 text-indigo-500 tracking-loose">Don't forget about these items in your wishlist</h1>
				{recentActivity.profile?.wishlist.length > 0 &&
				
	<div class="grid gap-72 grid-cols-3 w-100 ml-10 mb-2 mt-5" ></div>
			  }
 				{recentActivity.profile?.wishlist?.map(item => {
					return (
<div class="container mx-auto">
  <div class="bg-white max-w-sm mx-auto m-5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
      <div class="h-20 bg-indigo-500 flex items-center justify-between" 
        key={item._id}>
          <Link to={`/products/${item._id}`}>
          <img src={item?.pictures[0]} alt={`Product Picture`} />
       
          </Link>
      </div>  
        <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
        <h3 class="py-6 px-6 text-xl tracking-wide text-center">{item.name}</h3>
          <p>{item.name} - ${item.price}</p>
        </div>
  </div>
</div>
					)
				})}
				
				 
			
					</div>
				</div> 
				</div>
</section>
} */}
				{/* </div>  */}
{/* <section className=" grid "> */}
{/* <div class="bg-white text-black py-20"> 
 		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
 			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
 				<h1 class="text-3xl text-center  md:text-5xl p-2 text-indigo-500 tracking-loose"> The Devs</h1>
 				
				 <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
	<div class="grid grid-cols-2 ">
          <div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg mx-auto  border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer " >
        <div class="bg-indigo-500  flex h-200 items-center">
        
          <img src=''  />
        <p class="ml-4 text-white uppercase">Will code for food</p>
        </div>

          <h1 class="py-6 px-6 text-xl tracking-wide text-center">Blake Romano</h1>
     
    
          <p class="py-6 px-6 text-lg tracking-wide text-center">Quick about me section can increase in width if needed  </p>
       
          <p class="py-6 px-6 text-lg tracking-wide text-center">Full-Stack Engineer</p>
     
  

  <button class="px-2 py-1 m-1 mt-5 ml-20 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-700 rounded" > <AiOutlineGithub class="h-10 w-10" /> </button>

            </div>

        </div>
        </div>
			</div>
					</div>
				</div> */}

				{/* <div class="bg-white text-black py-20"> 
 		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">


 				
	<div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3">
    	<div class="pro-card">
        <div class="bg-white max-w-xs shadow-lg mx-auto  border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer " >
        <div class="bg-indigo-500  flex h-200 items-center">
        
          <img src=''  />
        <p class="ml-4 text-white uppercase">Will code for food</p>
        </div>

          <h1 class="py-6 px-6 text-xl tracking-wide text-center">Nick Rodriguez</h1>
     
    
          <p class="py-6 px-6 text-lg tracking-wide text-center"> quick description area  </p>
       
          <p class="py-6 px-6 text-lg tracking-wide text-center">Front-End Engineer</p>
     
  

  <button class="px-2 py-1 m-1 mt-5 ml-20 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-700 rounded" > <AiOutlineGithub class="h-10 w-10" /> </button>

            </div>
        </div>
        </div>
			</div>
					</div>
					</div> */}
{/* </section> */}
{/* </div> */}

</> 
)
}

export default Home 