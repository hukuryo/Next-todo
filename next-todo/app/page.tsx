"use client";
import React, { Component, useState } from "react"
import Complete from "../components/complete"
import UnComplete from "../components/UnComplete"


export default function Home() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<string[]>([]);

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
      <div>
      <form onSubmit={handleSubmit}>
        <input  className="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={inputText} onChange={handleInputChange}/>
        <button className="bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2" type="submit">追加</button>
      </form>
    </div>
      <div className="flex justify-center mt-20">
        <Complete items={[items]} />
        <UnComplete/>
      </div>
    </main>
  )
}
