import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const API_URL = "https://api.github.com/users/Vineetsingh07";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(function () {
  //     fetch(API_URL)
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Git picture"
        width={300}
        className=" rounded-lg"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
