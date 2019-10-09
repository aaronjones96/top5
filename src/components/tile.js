import React from "react"



function tile(props) {
  const {one, two, three, four, five, title} = props;

  return (
    
    <li className="topFive">
        <div className="content">
            <div className="front">
                <h2>{title}</h2>
            </div>
            <div className="back">
                <ol>
                    <li>{one}</li>
                    <li>{two}</li>
                    <li>{three}</li>
                    <li>{four}</li>
                    <li>{five}</li>
                </ol>
            </div>
      </div>
    </li>
    
  )
}

export default tile;