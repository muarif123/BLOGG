'use client'

import Image from 'next/image'
import Data from './data/page'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [readmore, setreadmore] = useState<boolean>(false)
  function reader(){
    setreadmore(!readmore)
  }
  return (
    <main style={{backgroundColor:'whitesmoke'}} >
      <div className='sm:w-full md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12 mx-auto text-5xl text-center' style={{marginTop:'150px',fontWeight:'bolder'}}>
        <h1 style={{color:'steelblue'}}>BLOG NEXT-Js</h1>
        <Link href='/create'>
        
        <button className='hver' style={{fontSize:'17px',height:'50px',width:'167px',marginTop:'50px'}}>
          Create Blog +
        </button>
        </Link>
        <h1 style={{fontSize:'30px',marginTop:'30px',textDecoration:'underline'}}>Some Of Our Most Read Blogs</h1>
      </div>

      <div style={{marginTop:'130px',width:'90%',display:'flex',justifyContent:'space-between',flexWrap:'wrap',margin:'auto'}}>
        {Data.map((item,id)=>{
          return(
            <>
            <div key={id} className='wo'  style={{backgroundColor:'white',marginTop:'30px',padding:'15px',borderRadius:'10px',boxShadow:'5px 5px 5px black'}}>
              <div >
                <p style={{fontSize:'30px',fontWeight:'bolder',borderBottom:'1px solid black'}}>{item.head}</p>
                <p style={{marginTop:'20px'}}>
                  {
                    readmore?item.blog:`${item.blog.substring(0,130)}...`
                  }

                  

                  </p>

                

              </div>
              <Link href={`/${item.id}`}>
              
              <button className='hver' style={{width:'120px',padding:'5px',marginTop:'20px',}} onClick={reader}>
                {readmore?'Read Less':'Read More...'}

              </button>
              </Link>

              <p style={{fontSize:'20px',fontWeight:'bolder',textDecoration:'underline'}}>{item.user}</p>
              <Avatar sx={{border:'2px solid black'}} src={item.avatar}/>

            </div>
            
            </>
          )
        })}
      </div>


    </main>
  )
}
