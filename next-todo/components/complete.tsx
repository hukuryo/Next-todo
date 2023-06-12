import React, { Component } from "react";


export default function Complete(props: { items: string[] }) {
    return (
        <div className="ml-10 bg-red-200 p-10">
            <p>完了済みのTODO</p>
            <ul>
            {props.items.map((item: string, index: number) => (
                <li key={index}>
                {item}
                <button className="shadow-lg bg-rose-500 shadow-rose-500/50 text-white rounded px-2 py-1">
                    削除
                </button>
                </li>
            ))}
            </ul>
        </div>
    );
}