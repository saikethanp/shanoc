'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AdminLogin(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const router = useRouter()

const handleLogin=(e:any)=>{
e.preventDefault()

if(email==="divyanarayanaswami91@gmail.com" && password==="Divya123"){
localStorage.setItem("admin","true")
router.push("/admin")
}
else{
alert("Invalid Admin Credentials")
}

}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white p-10 rounded-3xl shadow-xl w-[420px]">

<div className="flex justify-between items-center mb-6">

<h1 className="text-2xl font-bold">Admin Login</h1>

<Link
href="/"
className="text-sm bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
>
← Home
</Link>

</div>

<form onSubmit={handleLogin} className="space-y-4">

<input
type="email"
placeholder="Admin Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 border rounded-xl"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 border rounded-xl"
/>

<button className="w-full bg-primary text-white py-3 rounded-xl font-bold">
Login
</button>

</form>

</div>

</div>

)
}