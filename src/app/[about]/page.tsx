import React from 'react'
import Data from '../data/page'
import { log } from 'console'
import Avatar from 'antd/es/avatar/avatar'


const page = ({params}) => {
    
    
  return (
    <div>
        <div style={{width:'45%',margin:'auto',border:'1px solid black',backgroundColor:'white',borderRadius:'10px',boxShadow:'5px 5px 5px black',padding:'10px',marginTop:'10%'}}>
        <p style={{fontSize:'30px',fontWeight:'bolder',borderBottom:'1px solid black'}}>{Data[params.about].head}</p>

        <h1 style={{fontSize:'20px',marginTop:'10px'}}>{Data[params.about].blog}</h1>
        <p style={{fontSize:'20px',fontWeight:'bolder',textDecoration:'underline',marginTop:'10px'}}>{Data[params.about].user}</p>
        <Avatar style={{border:'2px solid black',marginTop:'10px'}} src={Data[params.about].avatar}/>



        </div>
    </div>
  )
}

export default page