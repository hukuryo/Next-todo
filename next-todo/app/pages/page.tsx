import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <input className='' type="text" placeholder='タスクを入力' />
        <button>登録</button>
      </div>
    </main>
  )
}
