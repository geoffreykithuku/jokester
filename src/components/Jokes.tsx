import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Spinner from "./Spinner";

const GET_JOKE = gql`
  query GetJoke($category: String!) {
    chuckNorrisJoke(category: $category) {
      value
    }
  }
`;

const GET_RANDOM_JOKE = gql`

  query GetRandomJoke {
    chuckNorrisJoke {
      categories
      value
    }
  }
`;


const Jokes = () => {
  const { category } = useParams();
 const { loading, error, data } = useQuery(
   category ? GET_JOKE : GET_RANDOM_JOKE,
   {
     variables: { category: category || "" }, 
   }
 );

  if (loading) return <Spinner />
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.chuckNorrisJoke);

  return (
    <div className="w-full items-center justify-center flex flex-col pt-10">
    

      <div className="shadow-lg rounded-lg bg-white p-3 sm:p-6 w-full max-w-[450px]">
        <p className="text-[#B31312] font-medium text-sm mb-5">
          ** {category? category : "random"} **
        </p>
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
          {data.chuckNorrisJoke.value}
        </p>
      </div>

      <div className="flex justify-between mt-2 sm:mt-10 w-full max-w-[450px]">
        <button
          onClick={() => window.history.back()}
          className="bg-[#F15A24] text-white py-2 px-5 rounded-md"
        >
          Back
        </button>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#F15A24] text-white py-2 px-5 rounded-md"
        >
          Load New Joke
        </button>
      </div>
    </div>
  );
};

export default Jokes;
