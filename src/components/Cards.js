import React from "react";
//import Card from './Card';

function Cards(data){
    
    return(
        <div>
           {data.map((dataObj) => {
              return (
            <div
                style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
         })};
        </div>
    )
};

export default Cards;