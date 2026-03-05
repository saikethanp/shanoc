'use client';

import { useState } from "react";

export default function AdminPage() {

  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbysXhSAKthBK1324tVMkUVN1heG9YVrJYNfI8BHf9un3uuu3NkOtfM1lQk8PVn2wnCT/exec",
      {
        method: "POST",
        body: JSON.stringify({
          date,
          subject,
          title,
          video
        })
      }
    );

    alert("Class Added Successfully");

    setDate("");
    setSubject("");
    setTitle("");
    setVideo("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-2xl font-bold mb-6">Add New Class</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e)=>setSubject(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Video Link"
            value={video}
            onChange={(e)=>setVideo(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <button
            className="w-full bg-primary text-white py-3 rounded-xl font-bold"
          >
            Publish Class
          </button>

        </form>

      </div>

    </div>
  );
}