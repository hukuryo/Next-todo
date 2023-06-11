import React, { Component } from "react"
import Complete from "../components/complete"
import UnComplete from "../components/UnComplete"


export default function Home() {
  return (
    <main className="text-center min-h-screen items-center p-24">
      <div className="w">
        <p className="text-3xl mb-3">Study React TODO</p>
        <input className="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button className="bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2">送信</button>
      </div>
      <div className="flex justify-center mt-20">
        <UnComplete/>
        <Complete/>
      </div>
    </main>
  )
}
