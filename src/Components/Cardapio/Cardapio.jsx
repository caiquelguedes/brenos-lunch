
import React from 'react'


export default function Cardapio({ nome = "Em breve...", preco = " ", decricao = " "}){
    
    return (
        <div className="cardapio">
        <div className="nome">{nome}</div>   
        <div className="preco">{preco}</div> 
        <div className="descricao">{descricao}</div>  
        </div>
    )
}