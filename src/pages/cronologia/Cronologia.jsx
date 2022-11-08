import React from 'react'
import axios from "axios";
import { useState } from 'react'
import { useEffect } from "react";

const Cronologia = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect (()=> {

    const getData = async ()=> {
      const {data} = await axios.get("https://api.got.show/api/show/characters/");

      console.log(data);
      setPersonajes(data)
    };

    getData();

  }, []);

  let mappedpersonajes = [];

  personajes.filter((item) => {
    let { image } = item;
    const element = item.age;
    let conteo = [];
    for(let elemento in element) {
      conteo.push(elemento)
    }
    if (conteo.length !== 2) {
      console.log("Este personaje no tiene edad o nombre");
    } else if (conteo.length === 2) {
      let { name, age } = element
      mappedpersonajes.push({name, age, image});
    }
  });

  console.log(mappedpersonajes);
  // .map((item, index) => {
  //   const { name, age } = item.age;
  //   console.log(name);
  //   <div>
  //     <p>{name}</p>
  //     <p>{age}</p>
  //   </div>
  // })

  // var sources = images.filter(function(img) {
  //   if (img.src.split('.').pop() === "json") {
  //     return false; // skip
  //   }
  //   return true;
  // }).map(function(img) { return img.src; });

  return (
    <div>
    {
      mappedpersonajes.map((item) => {
        const { name, age, image } = item;
        return (
          <div>
            <p>{name}</p>
            <p>{age}</p>
            <img src={image} alt=""/>
          </div>
        )
      })
    }
    </div>
  )
}



export default Cronologia