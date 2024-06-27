import React from 'react'
import { useState } from 'react';
import chain from '../assets/rand1.jpg';
import shells from '../assets/rand2.jpg';

const Images = () => {
    const [over, setOver] = useState(false);
    const randonImgURL = "https://picsum.photos/400/265";
  return (
    <div>
        <img 
          onMouseOver={()=>setOver(true)}
          onMouseOut={()=>setOver(false)}
          src={over ? shells : chain}
          alt='imagine there is a random pic here'
          height={200}
          width={300}
        />
        <img 
          onMouseOver={()=>setOver(true)}
          onMouseOut={()=>setOver(false)}
          src={over ? require("../assets/rand3.jpeg") : require("../assets/rand4.jpeg")}
          alt='imagine there is another random pic here'
          height={200}
          width={300}
        />
        <img 
          onMouseOver={()=>setOver(true)}
          onMouseOut={()=>setOver(false)}
          src={over ?  require("../assets/rand5.jpeg") : randonImgURL}
          alt='imagine there is another random pic here'
          height={200}
          width={300}
        />
      </div>
  )
}

export default Images