import React, { useState, useEffect } from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';

const HomePage = () => {
	const [posts, setPosts] = useState([])
	const getBlogPosts = () => {
		const url = "https://funzsocial.onrender.com/get_all_posts/"
		const config = {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}

		axios.get(url, config).then((response) => {
			console.log(response.data)
			setPosts(response.data)
		})
	}

	useEffect(() => {
		getBlogPosts();
	}, [])
	return (
    	<div className='main_hompage_outer_container'>
			<div className='container'>
				<div className='navbar_container'>
					<Navbar />
				</div>

				<div className='content_container'>
					<h2>All posts</h2>

					<div className='posts_container'>
						{posts.map(post => (

								<div className='single_post'>
									<Link to={`/home/${post.slug}`} className='link_to_detail'>
										<div className='single_post_leftside'>
											<img src={post.header_image} alt='blog_header_image' className='blog_header_img' />
										</div>
										<div className='single_post_rightside'>
											<h3>{post.title}</h3>
											<p>
												{post.short_description}
											</p>
										</div>
									</Link>
								</div>

						))}
					</div>
				</div>
			</div>
		</div>
  	)
}

export default HomePage