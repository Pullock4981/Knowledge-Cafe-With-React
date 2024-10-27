import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setreadingTime] = useState(0)

  const handleAddBookmark = blog =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleMarkAsRead = (id, time) =>{
    setreadingTime(readingTime + time)
    // console.log("remove bookmark", id)
    // remove bookmark
    const remainingBoookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBoookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex mx-4 md:mx-20 mt-4 md:gap-4">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
