import React from 'react'

const Home = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-6 md:flex-row justify-between items-center mx-auto  pt-20  md:px-20 ">
      <div className="text-center  w-full max-w-[580px]">
        <h2 className="mb-5 font-bold text-2xl">
          Welcome to Jokester – your gateway to laughter and good vibes! 🎉
        </h2>
        <p className="text-sm mb-5">
          Explore an array of rib-tickling categories, each filled with the
          legendary wit and charm of Chuck Norris jokes. Jokester is your
          one-stop destination for guaranteed laughs and endless amusement.
          Select a category, dive into the laughter, and remember – there's
          always room for more smiles in your day! 🤣✨
        </p>
        <button
          className="bg-[#F15A24] border border-black border-dotted shadow-lg cursor-pointer hover:bg-[#EA906C] py-2 px-4 rounded-md text-white font-bold text-lg"
          onClick={() => (window.location.href = "/categories")}
        >
          Get Started
        </button>
      </div>
      <div className="w-full max-w-[500px]">
        <img
          src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Home