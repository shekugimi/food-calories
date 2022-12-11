import React from 'react'

const Recipe = ({ title, calories, image }) => {
    const cal = parseInt(calories);
    return (
        <>
            <div className="card-container">
                <img src={image} alt="a" />
                <p className='card-title'>{title}</p>
                <p className='calories'>Calories: {cal}</p>
            </div>
        </>
    )
}

export default Recipe