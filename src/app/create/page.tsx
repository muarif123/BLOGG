"use client";
import { useUser } from "@clerk/nextjs";
import { Avatar } from "antd";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import Data from "../data/page";
import Link from "next/link";


type typearray = {
  head: string;
  blog: string;
}



export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
  let [head, sethead] = useState<string>('')
  let [blog, setblog] = useState<string>('')
  let [bloger, setbloger] = useState<typearray[]>([])
  let [readmore, setreadmore] = useState<boolean>(false)
  let [result, setresult] = useState<boolean>(false)



  function add() {
    if (head !== '' && blog !== '') {

      let newblog = { head, blog }
      setbloger([...bloger, newblog])
      setresult(true)
     

    }
    else {
      alert('Enter The required fields')
    }
    // setblog({head,body})
  }
  function reader() {
    setreadmore(!readmore)

  }

  if (!isLoaded || !isSignedIn) {
    return null;
  }
 

  return <div className="" style={{ paddingBottom: '100px' }}>
   {/* <div style={{width:'35%',margin:'auto'}}>

    <h1>Hello, {user.fullName} welcome to Clerk</h1>
    <div>
      <Avatar src={user.imageUrl} alt="" />

    </div>
   </div> */}
   <h1 style={{fontWeight:'bold'}} className="text-3xl text-center mt-12">CREATE NEW BLOG</h1>

    <div>
      
    </div>
    <div className="sm:w-10/12 md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12" style={{  margin: 'auto', marginTop: '5%', display: result ? 'none' : 'block' }}>
      <div>
        <input  placeholder="Enter Blog Heading" style={{ border: '3px solid black', padding: '5px', paddingLeft: '9px',width:'100%',borderRadius:'15px' }} className="" type="text" onChange={(e) => sethead(e.target.value)} />
      </div>
      <div>
        <textarea onChange={(e) => setblog(e.target.value)} placeholder="Enter Your Blog Content" name="" id="" style={{ paddingBottom: '150px', width: '100%', marginTop: '40px', border: '3px solid black', paddingLeft: '10px' }}></textarea>
        <button className="hver p-2 mt-5" onClick={add}>
          Create Blog
        </button>
      </div>
    </div>
    <div>
      {bloger.map((item,id) => {
        return (
          <div className="sm:w-full md:w-7/12 lg:w-7/12 xl:w-5/12 2xl:w-5/12" key={id} style={{  margin: 'auto', border: '1px solid black', backgroundColor: 'white', borderRadius: '10px', boxShadow: '5px 5px 5px black', padding: '10px', marginTop: '5%' }}>
            <div style={{ overflow: 'hidden' }}>
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', textDecoration: 'underline' }}>{item.head}</h1>
              <p style={{ marginTop: '20px' }}>
                {
                  readmore ? item.blog : `${item.blog.substring(0, 130)}...`
                }



              </p>

               
               
              <button className="hver mt-12 p-2  " onClick={reader}>
                {readmore ? 'Read Less' : 'Read more...'}

              </button>
              

              <br />

             <h1 className="text-xl" style={{fontWeight:'bold',textDecoration:'underline'}}>

              {user.fullName}
             </h1>
              <div>
                <Avatar src={user.imageUrl} alt="" />

              </div>
            </div>

          </div>
        )
      })}
    </div>



  </div>;
}