import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom/dist'

export default function GoogleOAuth() {
    // const {code,error} = useParams()
  
    const param = new URLSearchParams(window.location.search)
    const code = param.get("code")

    const getUsersData =async ()=>{
      const data = await axios.get(`http://localhost:8080/auth/googleOAuth?code=${code}`)
      console.log(data)
    }

    useEffect(()=>{
      getUsersData()
    },[])

  return (
    <div>
      Google OAuth{"  "}
      {code}
    </div>
  )
}
