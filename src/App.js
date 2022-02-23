import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import CardDetails from "./pages/CardDetails";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-violet-600 font-rickandmorty text-cyan-400" >
      <div className="max-w-2xl mx-auto pb-16 pt-8 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </div>
  )
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

   useEffect(() => {
     (async function () {
       let data = await fetch(api).then((res) => res.json());
       updateFetchedData(data);
       console.log(data)
     })();
   }, [api]);

  return (
    <div>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber}/>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Card page="/" results={results} />
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
}

export default App;
