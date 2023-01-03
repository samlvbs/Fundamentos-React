import React from "react";

export default props => {
    const { min, max } = props;
    let number = Math.floor(Math.random() * (max * min) + min)
    return (
        <div>
            {number}
        </div>
    )

};