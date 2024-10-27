import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 text-center md:border-l-2 pl-2">
      <div className="blog font-semibold text-sm md:text-lg">
        <h2>Reading Time: {readingTime}</h2>
      </div>
      <div className="border-2 mt-4 rounded-lg">
        <h2 className="text-sm md:text-lg font-semibold">Bookmarks: {bookmarks.length}</h2>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
