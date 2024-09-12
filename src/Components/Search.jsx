import React, { useEffect, useState } from 'react'
const api_key = "bECM7o99Wk6Ggj3exx75peUYaN6UP1jNzjqTGdsj0sXwo26CK9JHqJHY";



function Search() {
    const [text, setText] = useState("")
    const [search, setShearch] = useState()
    const [img, setImg]= useState()
    useEffect(()=>{
        const  fetchImage = async ( ) =>{
            const response = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=55`, 
              {headers:
                {Authorization: api_key,}
              })
             const data = await response.json()
             console.log(data)
             setShearch(data)
        }
        fetchImage()
    },[setShearch])


 

    const handelInput =(e)=>{
        setText("")
        setText(e.target.value)
        e.preventDefault()
    }
  return (
    <form>
        <input type='text'value={text} onChange={handelInput}/>
        <button>Add</button>
        <h1></h1>
    </form>
  )
}

export default Search
