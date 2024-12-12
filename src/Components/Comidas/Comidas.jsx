import React from "react";


export default function Comidas({ nome, preco, descricao }){
    
    return (
        <div className="refeicao">
        <div className="nome">{nome}</div>   
        <div className="preco">{preco}</div> 
        <div className="descricao">{descricao}</div>  
        </div>
    )
}