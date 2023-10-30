import React from "react";

function Card({employee}){
    return(
        <div>
            <p>{employee.id}</p>
            <p>{employee.name}</p>
            <p>{employee.username}</p>
            <p>{employee.email}</p>
            <p>{employee.phone}</p>
        </div>
    )
}

export default Card;