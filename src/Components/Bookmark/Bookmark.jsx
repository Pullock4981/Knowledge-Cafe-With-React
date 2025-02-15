

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="bg-slate-200 m-4 p-2 md:p-4 rounded-xl">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

export default Bookmark;