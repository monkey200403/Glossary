import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Apintegration = () => {
    const [couname, setCouname] = useState('')
    const [arraydata,  setArraydata] = useState([])
    console.log(arraydata);
    

    useEffect(()=>{
        axios.get(`https://itunes.apple.com/search?term=${couname}&media=music&limit=12`).then((output)=>{
            setArraydata(output.data.results);
        });
    },[couname])

  return (
    <div>
    <input type="text" placeholder='enter song name' onChange={(e)=>setCouname(e.target.value)} />
        {
            arraydata.map((value,index)=>
            <div key={index}>
                <img src={value.artworkUrl30} alt="" />
                <p>{value.artistName}</p>
                <p>{value.collectionName}</p>
                <audio controls src={value.previewUrl}></audio>
                </div>
                )
        }
    </div>

  )
}
