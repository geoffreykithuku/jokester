import React from "react";

const CategoryList = () => {
  // sample array with 10 categories

  const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  return (
    <div className="w-full justify-center items-center">
      <h2>Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4  gap-5 mt-10 md:mt-20 mx-5 sm:mx-8 md:mx-20">
        {categories.map((category) => (
          <div
            key={category}
            className="shadow-lg cursor-pointer hover:bg-[#EA906C] hover:text-white hover:font-bold rounded-md bg-white  text-center transition-all duration-300 p-3"
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
