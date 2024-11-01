import BannerImg from '../../images/books.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 md:h-[554px] md:mt-10 mt-3 lg:mb-10 mb-5">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img 
          src={BannerImg}
          className=" rounded-lg shadow-2xl md:w-[450px] md:h-[394px]"
        />
        <div className='flex flex-col justify-center text-center'>
          <h1 className="lg:text-5xl text-2xl font-bold">Books to freshen up your bookshelf</h1>
          <p className='mt-5 lg:text-base text-sm text-slate-600'>
          Our bookstore authentication ensures secure access for users, allowing only registered individuals to sign in and explore personalized features. This setup protects user data and enhances the browsing experience with account-based services.
          </p>
         
        <div className='flex justify-center'>
        <button className="btn bg-[#23BE0A] text-white font-bold mt-5">View The List</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
