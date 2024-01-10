import React, { useState, useEffect } from 'react'
import "./BlogDetail.css"
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const BlogDetail = () => {
	const { slug } = useParams();
	const [post, setPost] = useState(null);

	const getCurrentPost = () => {
		const url = `http://localhost:8000/get_single_post/${slug}`
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}

		axios.get(url, config).then((response) => {
			console.log(response.data)
			setPost(response.data)
		})
	}

	useEffect(() => {
		getCurrentPost();
	}, [slug])

	return (
    	<div className='blog_detail_outer_main_container'>
			<div className='container'>
				<div className='navbar_container'><Navbar /></div>
				<div className='content_container'>
					{post && (
						<div className='big_article_container'>
							<div className='header_image_container'>
								<img src={`http://localhost:8000/${post.header_image}`} alt='header for blog' className='big_header_img' />
							</div>
							<div className='title_container'>
								<h2>{post.title}</h2>
							</div>
							<div className='post_body_container'>
								<p>
									<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }} />
								</p>
							</div>
						</div>

					)}
				</div>
			</div>
		</div>
  	)
}

export default BlogDetail