import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Content = () => {
    const [post, setPost] = useState([]);

    const getPost = async () => {
        try{
            let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(response.data);
            setPost(response.data);
        }catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getPost();
    })


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h3 className="mt-2">This a post</h3>
                    <hr />
                    {
                        post.map((posts, index) => {
                            return(
                                <div className="card mt-5" key={index}>
                                    <div className="card-header">
                                        {posts.title}
                                    </div>
                                    <div className="card-body">
                                        {posts.body}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Content;