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
        <div className="text-lg font-semibold mb-4 md:w-2/3 border text-center">
            <h2>Blogs: {blogs.length} </h2>
        </div>
    );
};

export default Blogs;