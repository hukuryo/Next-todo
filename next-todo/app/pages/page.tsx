import React from "react";

export default function Home() {
  return (
    <main className="text-center min-h-screen items-center p-24">
      <div className="w">
        <p className="text-3xl mb-3">
          Study React TODO
        </p>
        <input className="w-1/3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button className="bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2">送信</button>
      </div>
      <div className="flex justify-center mt-20">
        <div className="mr-20 bg-green-200 p-10">
          <p>完了していないTODO</p>
        </div>
        <div className="ml-10 bg-red-200 p-10">
          <p>完了済みのTODO</p>
        </div>
      </div>
    </main>
  )
}
