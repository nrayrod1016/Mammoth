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


	function checkDarkMode() {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return true
		}
		return false
	}
	
	if (checkDarkMode()) {
		document.documentElement.classList.add('mode-dark')
	} else {
		document.documentElement.classList.remove('mode-dark')
	}

    return ( 
<> 
{/* <div class="home-container content-center" > */}
{/* <div class="Home" >  */}
<section class="align-center">
 	<div class="bg-white text-grey py-20 justify-center items-center dark:grey-700">
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
<div class=" bg-white text-black py-5">
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



{/* {recentActivity.profile &&
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
} */}




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
				 <div class="grid gap-72 grid-cols-4 w-100"> 
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
 		<div class="container mx-auto flex-wrap md:flex-row items-center pl-9 my-12 md:my-24 md:flex-wrap lg:flex-wrap lg:ml-10 ">
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


</> 
)
}

export default Home 