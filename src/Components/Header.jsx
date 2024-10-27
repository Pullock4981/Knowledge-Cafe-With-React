import profile from '../../public/assets/images/profile.png'

const Header = () => {
  return (
    <div>
      <div className="mt-5 mx-8 flex justify-between border-b-2 items-center">
        <h1 className="text-2xl font-bold">Knowlagde Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
