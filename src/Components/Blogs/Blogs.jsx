import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    // state declear
    const [blogs, setBlogs] = useState([])

    // useEffect

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="text-lg font-semibold mb-4 md:w-2/3">
            <h2 className="blog">Blogs: {blogs.length} </h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;