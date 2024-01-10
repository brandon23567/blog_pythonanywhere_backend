import React, { useState } from 'react'
import "./UploadPost.css"
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

const UploadPost = () => {

	const [username, setUsername] = useState("")
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [postBody, setPostBody] = useState("")
	const [headerImage, setHeaderImage] = useState(null)

	const uploadNewBlogPost = (e) => {
		e.preventDefault();
		const formData = new FormData()
		formData.append("username", username)
		formData.append("title", title)
		formData.append("description", description)
		formData.append("postBody", postBody)
		formData.append("headerImage", headerImage)

		const url = "https://funzsocial.onrender.com/upload_post/"
		const config = {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}

		axios.post(url, formData, config).then((response) => {
			console.log(response.data)
		})
	}

	return (
    	<div className='outer_post_main_container'>
			<div className='container'>
				<div className='navbar_container'>
					<Navbar />
				</div>

				<div className='content_container'>
					<h2>Upload new post</h2>

					<div className='form_container'>
						<form className='actual_form_to_upload' onSubmit={uploadNewBlogPost}>
							<div className='single_input'>
								<input type='text' placeholder='Enter username' name='username' onChange={(e) => setUsername(e.target.value)} />
							</div>
							<div className='single_input'>
								<input type='text' placeholder='Enter title of your post' name='post_title' onChange={(e) => setTitle(e.target.value)} />
							</div>
							<div className='single_input'>
								<textarea className='descript_area_upload' placeholder='enter short description of your post' onChange={(e) => setDescription(e.target.value)}></textarea>
							</div>
							<div className='single_input'>
								<input type='file' className='file_upload' onChange={(e) => setHeaderImage(e.target.files[0])} />
							</div>
							<div className='single_input'>
								{/* <textarea placeholder='enter the content of your blog post' className='content_area_upload' onChange={(e) => setPostBody(e.target.value)}></textarea> */}
								<ReactQuill theme="snow" modules={modules}  value={postBody} onChange={setPostBody} />
							</div>
							<div className='upload_btn_contaner'>
								<button className='upload_btn' type='submit'>Upload Post</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  	)
}

export default UploadPost