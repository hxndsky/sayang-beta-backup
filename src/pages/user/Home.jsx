import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div className="py-14 bg-[#024CAA] md:px-8 xl:px-36 sm:px-8">
          <h1 className="text-5xl font-bold pt-14">
            Sayang<span className="text-[#EC8305]">Beta</span>
          </h1>
          <p className="text-2xl pt-4 w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            deserunt.
          </p>
        </div>
      </section>

      <section>
        
      </section>

      <div className="py-32 bg-white"></div>
      <Footer />
    </>
  );
};

export default Home;
