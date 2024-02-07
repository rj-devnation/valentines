import React from "react";
import carmela from '../images/carmela_cropped.webp';
import rj from '../images/me.jpg';
import '../App.css'

function Person({name}){
    let imageName;
    if(name === 'Carmela Lamsen'){
        imageName = carmela
    }  else {
        imageName = rj
    }
    return(
        <div className="flex flex-col gap-y-7 w-[380px] h-[420px] items-center px-4 pt-4 rounded-lg shadow-lg card-bg">
            <img src={imageName} alt={name} />
            <div className="cute text-name text-center align-middle my-4 text-pink">{name}</div>
        </div>
    )
}

export default Person;