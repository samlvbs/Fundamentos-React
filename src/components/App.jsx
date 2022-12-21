import React from "react"
import './App.css'
import ComFilhos from "./ComFilhos";
import ComParametro from "./ComParametro";
import Primeiro from "./Primeiro";
import Card from "../layout/Card";
import Repeticao from "./Repeticao";
import Condicional from "./Condicional";

export default (props) =>(

    <div className="App">
    <Card titulo=" #01 - Primeiro Componente"> 
        <Primeiro/>
    </Card>
    <Card titulo=" #02 - Componete com parametros"> 
        <ComParametro titulo = "Titulo 1" subtitulo = "Subtitulo 1"/>
        <ComParametro titulo = "Titulo 2" subtitulo = "Subtitulo 2"/>
    </Card>
    <Card titulo="#03 - Componente com filhos">
        <ComFilhos>
            <ul>
                <li>Samuel</li>
                <li>Arthur</li>
                <li>Larissa</li>
            </ul>
        </ComFilhos>
    </Card>
    <Card titulo="#04 - Componente com repetição">
        <Repeticao/>
    </Card>
    <Card titulo="#05 - Componente com Condicional">
        <Condicional numero = {11}/>
    </Card>
    </div>
);