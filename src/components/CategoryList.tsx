import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CATEGORY = gql`
  query GetRandomJoke {
    joke: random_joke {
      id
      value
      category
    }
  }
`;



const CategoryList = () => {
  // sample array with 10 categories
 const { loading, error, data } = useQuery(GET_CATEGORY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  return (
    <div className="w-full justify-center items-center">
      <h2>Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4  gap-5 mt-10 md:mt-20 mx-5 sm:mx-8 md:mx-20">
        {data.categories.map((category) => (
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
