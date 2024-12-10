import Image from "../Image";
import Navbar from "../Navbar";
import BrowseCategories from "../SideCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="lg:h-[30rem] h-96">
        <img src="/1.png" alt="Hero" className="h-full w-full" />
      </div>

      <div className="md:px-10 px-0">
        <BrowseCategories />
      </div>
      <Image />
    </>
  );
};

export default Home;
