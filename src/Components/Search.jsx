import React, { useEffect, useState } from 'react'

const api_key = "UOgEemk3DeEArgwaZK1fYicUHp926QPpKT5jZ4tgXIdNol46VDBvUWNv"

function Search() {
    const [text, setText] = useState("")
    useEffect(()=>{
        const  fetchImage = async () =>{
            const response = await fetch("https://api.pexels.com/v1/search?query=${api_key}")
             const data = await response.json()
             console.log(data)
        }
        // fetchImage()
    },[fetchImage()])


    const handelSearch =(e)=>{
    }

    const handelInput =(e)=>{
        setText("")
        setText(e.target.value)
    }
  return (
    <form>
        <input type='text'value={text} onChange={handelInput}/>
        <button onClick={handelSearch}>Add</button>
        <h1></h1>
    </form>
  )
}

export default Search


      // (`"https://api.pexels.com/v1/search?query=${api_key}`)