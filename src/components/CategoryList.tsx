import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";


const GET_CATEGORY = gql`
  query {
    chuckNorrisCategories
  }
`;

const CategoryList = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CATEGORY);

  if (loading) return <Spinner />
  if (error) return <p>Error : {error.message}</p>;

  
  const handleCategoryClick = (category: string) => {
    navigate(`/jokes/${category}`)
  };

  return (
    <div className="w-full justify-center items-center pt-5">
      
      <div className="grid grid-cols-3 sm:grid-cols-4  gap-5 mt-5 md:mt-20 mx-5 sm:mx-8 md:mx-20">
        {data.chuckNorrisCategories.map((category: string, index: number) => (
          <div
            onClick={() => handleCategoryClick(category)}
            key={index}
            className="shadow-lg cursor-pointer hover:bg-[#EA906C] hover:text-white hover:font-bold rounded-md bg-white  text-center transition-all duration-300 py-3"
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
