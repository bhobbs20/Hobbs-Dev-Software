import React from 'react';

const Title = ({title}) => {
    return (
        <div className="title-container">
          <h2 className="title-title">
            <span className="title-span">/</span> {title}
         </h2>
        </div>
    )
}






export default Title;