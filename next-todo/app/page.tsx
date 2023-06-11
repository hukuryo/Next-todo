"use client";
import React, { Component, useState } from "react"
import Complete from "../components/complete"
import UnComplete from "../components/UnComplete"


export default function Home() {

  // const [text, getText] = useState("");
  

  // const getInputText = (e: any) => {
  //   getText(() => e.target.value)
  // }

  

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e :any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e :any) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText("");
    }
  };

  
  return (
    <main className="text-center min-h-screen items-center p-24">
      {/* <div className="w">
        <p className="text-3xl mb-3">Study React TODO</p>
        <input className="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={getInputText}/>
        <button className="bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2" onClick={setText}>送信</button>
      </div> */}
      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
      <div className="flex justify-center mt-20">
        <UnComplete/>
        <Complete/>
      </div>
    </main>
  )
}
