import './animalShow.css'
import { useState } from "react";
import bird from "./animalImage/bird.svg";
import cat from "./animalImage/cat.svg";
import corcodile from "./animalImage/corcodile.svg";
import cow from "./animalImage/cow.svg";
import dog from "./animalImage/dog.svg";
import horse from "./animalImage/horse.svg";
import heart from "./animalImage/heart.svg";


const svgMap ={
    bird,
    cat,
    corcodile,
    cow,
    dog,
    horse,
};

function AnimalShow({type}){
    const [clicks, setClicks] =useState(0);
        const handleClick = () => {
        setClicks(clicks + 1);
    };
    return(
        <div className="animal-show"    onClick={handleClick}>
            <img className='animal' src={svgMap[type]} alt="animals"  />
            <img 
            className='heart'
            src={heart} 
            alt="heart" 
            style={{width: 10 + 10 *clicks + 'px'}}

             />

        </div>
    );

}

export default AnimalShow;