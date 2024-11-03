import bannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-10 p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold py-5">Revamp Your Bookshelf with Fresh Selections</h1>
           
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;