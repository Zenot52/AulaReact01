import { Component } from "react";

export default class Data extends Component{



    constructor(props){
        super(); //executa o constructor pai
        this.props = props;
        this.dataAtual = new Date().toLocaleString(); 
    }
    
    //fase de montagem
    componentDidMount(){
        console.log("O componente foi montado");
        this.dataAtual = new Date().toLocaleString();
    // aqui ele tenta atualizar, mas um componente so é atualizado se muda seu estado
    // ai ele usa o componentDidUpdate()

    }

    componentDidUpdate(){
        console.log("O componente foi atualizado");

    }

    // sobrecrita de metodo
    render(){
        return(
            <h1>{this.props.texto || ""}{this.dataAtual}</h1>
        )
    }

}