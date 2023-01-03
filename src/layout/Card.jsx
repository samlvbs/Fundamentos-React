import React from "react";
import "./Card.css"

export default props =>
    <div className="Card">
        <div className="Conteudo">  
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.color || '#000'
            }}>
            {props.titulo}
        </div>
    </div>