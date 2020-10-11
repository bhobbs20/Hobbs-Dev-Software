import React from "react";

export default function Hero({
   mainImage, title, type, github, stackItems,

}) {

    return (
        <div>
            <div>
                <img src={mainImage.fluid} alt="project" />
            </div>
            <h1>{title}</h1>
            <p>{type}</p>
            <p>{github}</p>

            <ul>
            {stackItems.map(stack => {
            return <li key={stack.id}>{stack}</li>
          })}

            </ul>
        </div>
    );
}

