'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {

  const router = useRouter();

  const [date,setDate]=useState("");
  const [subject,setSubject]=useState("");
  const [title,setTitle]=useState("");
  const [video,setVideo]=useState("");
  const [loading,setLoading]=useState(false);
  const [classes,setClasses]=useState<any[]>([]);

  useEffect(()=>{

    const admin = localStorage.getItem("admin");

    if(admin!=="true"){
      router.push("/admin-login");
    }

    loadClasses();

  },[]);

  const loadClasses = async()=>{

    const res = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTzMVwp7tOPuuL3ZjYtY2LvIXdXveGEYMSjj5gUepj-DDK1ChfOK16C1-zMGh1B9tzN5U7fssx1AyNQ/pub?output=csv"
    );

    const data = await res.text();

    const rows = data.split("\n").slice(1);

    const parsed = rows.map((row,index)=>{

      const cols = row.split(",");

      return{
        id:index,
        date:cols[0],
        subject:cols[1],
        title:cols[2],
        video:cols[3]
      };

    });

    setClasses(parsed);

  };

  const handleSubmit = async(e:any)=>{

    e.preventDefault();

    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbysXhSAKthBK1324tVMkUVN1heG9YVrJYNfI8BHf9un3uuu3NkOtfM1lQk8PVn2wnCT/exec",
      {
        method:"POST",
        body:JSON.stringify({
          action:"add",
          date,
          subject,
          title,
          video
        })
      }
    );

    setLoading(false);

    alert("✅ Class Added Successfully");

    setDate("");
    setSubject("");
    setTitle("");
    setVideo("");

    loadClasses();

  };

  const deleteClass = async(title:string)=>{

    const confirmDelete = confirm("Delete this class?");

    if(!confirmDelete) return;

    await fetch(
      "https://script.google.com/macros/s/AKfycbysXhSAKthBK1324tVMkUVN1heG9YVrJYNfI8BHf9un3uuu3NkOtfM1lQk8PVn2wnCT/exec",
      {
        method:"POST",
        body:JSON.stringify({
          action:"delete",
          title:title
        })
      }
    );

    alert("🗑 Class Deleted");

    loadClasses();

  };

  return(

<div className="min-h-screen bg-gray-50 p-8">

<div className="max-w-6xl mx-auto">

<div className="flex justify-between items-center mb-10">

<h1 className="text-3xl font-bold">Admin Dashboard</h1>

<Link
href="/"
className="bg-gray-200 px-4 py-2 rounded-lg"
>
Home
</Link>

</div>

<div className="grid md:grid-cols-2 gap-10">

<div className="bg-white p-8 rounded-2xl shadow">

<h2 className="text-xl font-bold mb-4">Add New Class</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
placeholder="Date"
value={date}
onChange={(e)=>setDate(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<input
type="text"
placeholder="Subject"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<input
type="text"
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<input
type="text"
placeholder="Video Link"
value={video}
onChange={(e)=>setVideo(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<button
disabled={loading}
className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold"
>
{loading ? "Adding Class..." : "Publish Class"}
</button>

</form>

</div>

<div className="bg-white p-8 rounded-2xl shadow">

<h2 className="text-xl font-bold mb-4">Uploaded Classes</h2>

<div className="space-y-4 max-h-[400px] overflow-y-auto">

{classes.map((c)=>(

<div
key={c.id}
className="border p-4 rounded-lg flex justify-between items-center"
>

<div>
<p className="font-bold">{c.title}</p>
<p className="text-sm text-gray-500">{c.subject}</p>
</div>

<button
onClick={()=>deleteClass(c.title)}
className="text-red-500 font-bold"
>
Delete
</button>

</div>

))}

</div>

</div>

</div>

</div>

</div>

  );

}