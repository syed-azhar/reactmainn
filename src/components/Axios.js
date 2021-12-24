import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Axios() {
    
    const [posts, setPext] = useState ([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")

        .then(res=>{
         setPext(res.data)
          })
          
          .catch(err=> {
              console.log(err)
          })

    },[])

    return (
        <div>
            <ul>
            {
                posts.map(posts=><h2 key={posts.id}>{posts.body}</h2>)
            }
            </ul>
        </div>
    )
}

