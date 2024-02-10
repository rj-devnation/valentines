import React from "react";
import carmela from '../images/carmela_cropped.webp';
import rj from '../images/me.jpg';
import '../App.css'

function Person({name, className}){
    let imageName;
    if(name === 'Carmela Lamsen'){
        imageName = carmela
    }  else {
        imageName = rj
    }
    return(
        <div className={`flex flex-col cute text-name text-center align-middle text-pink gap-y-7 items-center px-4 py-4 rounded-lg shadow-lg card-bg md:w-[348px] ${className}`}>
            <img src={imageName} alt={name} />
            <p className="text-5xl text-wrap">{name}</p>
        </div>
    )
}

export default Person;