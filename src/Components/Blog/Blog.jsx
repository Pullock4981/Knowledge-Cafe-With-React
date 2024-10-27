

import { CiBookmark } from "react-icons/ci";
// import { FaBeer } from "react-icons/fa";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    posted_date,
    author_img,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mt-4 border-b-2 pb-4 pt-8">
        {/* cover img */}
      <img className="w-full h-80 rounded-md" src={cover} alt="" />
      {/* author info */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-3 items-center">
          <div>
            <img className="w-16" src={author_img} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>{reading_time}min read</span>
          <button><CiBookmark></CiBookmark></button>
        </div>
      </div>
      {/* blog title */}
      <h4 className="text-3xl md:text-4xl font-bold mt-6">{title}</h4>
      <p className="mt-4">
        {
            hashtags.map(hash => <span><a href=""> #{hash}</a></span>)
        }
      </p>
      {/* bookmark */}
      <p className="text-blue-700 underline cursor-pointer mt-3">Mark as read</p>
    </div>
  );
};

export default Blog;
