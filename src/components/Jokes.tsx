import React from "react";

const Jokes = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <h2 className="mb-3 sm:mb-10">Random Joke</h2>

      <div className="shadow-lg rounded-lg bg-white p-3 sm:p-6 w-full max-w-[450px]">
        <p className="text-[#B31312] font-medium text-sm mb-5">**Category**</p>
        <div className="mb-2 sm:mb-5 max-w-[250px] w-full mx-auto">
          <img
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <p className="text-sm text-[#2B2A4C] text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          perspiciatis nihil molestiae explicabo, beatae dolore quos impedit
          quas ea corporis minus deserunt praesentium in laboriosam inventore
          nesciunt alias modi vero.
        </p>
      </div>

      <div className="flex justify-between mt-2 sm:mt-10 w-full max-w-[450px]">
        <button className="bg-[#EA906C] text-white py-2 px-5 rounded-md">
          Previous
        </button>
        <button className="bg-[#EA906C] text-white py-2 px-5 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Jokes;
