import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CardDetails = () => {
  const [ like, setLike ] = useState('like')
  const [ activeLike, setActiveLike ] = useState(true)

  function handleClick() {
    setActiveLike(prevLike => !prevLike)
    setLike(activeLike ? 'dislike' : 'like')
  }

  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const { name, episode, created, location, gender, image, status, species } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const episodesArray = episode?.map((ep) => {
  return (
    <li key={ep}>{ep}</li>
    );
  });


  return (
    <div className="flex sm:flex-row flex-col justify-center sm:mt-16 mt-8 h-screen">
    <Link to="/" className="text-2xl sm:mr-8 sm:mt-0 mb-8">go back</Link>

      <div className="h-1/2 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-lg object-center object-cover group-hover:opacity-75"
        />
        <button
          onClick={handleClick}
          className={`${activeLike ? 'bg-lime-200' : 'bg-pink-200'} rounded-lg px-4 py-2 absolute right-0 bottom-0 mr-2 mb-2`}
        >
          {like}
        </button>
      </div>
      <ul className="flex flex-col gap-2 sm:mt-0 mt-8 ml-8 text-lg font-medium">
        <li className="text-3xl">{name}</li>
        <li>species: {species}</li>
        <li>gender: {gender}</li>
        <li>location: {location?.name}</li>
        <li>status: {status}</li>
        <li>created: {created}</li>
      </ul>
      <ul className="flex flex-col gap-2 sm:mt-0 mt-6 ml-8 text-lg font-medium overflow-scroll">
        <h3 className="text-3xl">episodes:</h3>
          {episodesArray}
      </ul>
    </div>
  )
}

export default CardDetails;
