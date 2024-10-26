import { useEffect } from "react";
import { useState } from "react";


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
        <div className="text-lg font-semibold ml-8 mt-4">
            <h2>Blogs: {blogs.length} </h2>
        </div>
    );
};

export default Blogs;