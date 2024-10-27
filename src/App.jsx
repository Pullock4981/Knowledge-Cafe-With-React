import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex mx-4 md:mx-20 mt-4 md:gap-4">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
