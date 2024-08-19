import { Component } from "react";

export default class Data extends Component{



    constructor(props){
        super(); //executa o constructor pai
        this.props = props;
        this.state = {
            dataAtual : new Date().toLocaleString()
        }
        
    }

    pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = Number.parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset;
        return Date(dataAtual.getTime() + diferencaTempo * 60 *1000);
    }
    
    //fase de montagem
    componentDidMount(){
        console.log("O componente foi montado");
        //nao é permitido atualizar um estado do componente de forma direta, tem que usar o setstate
        this.setState({
            dataAtual: new Date().toLocaleString()

        })
    }

    componentDidUpdate(){
        //se o componente for atualizado
        console.log("O componente foi atualizado");
        setTimeout(()=>{
            this.setState({
                dataAtual: this.pegaDataDe(this.props.timeZone)
            });
        },1000);
        //o loop funciona assim, o comando timeout espera 1sec (1000ms) e entao a partir disso ele executa o 
        //setstate, quando esse comando vem, ele usa o componentdidupdate, pq esse componente atualizou
        //ai entao ele chama dnv e dnv
    }

    // sobrecrita de metodo
    render(){
        return(
            <h1>{this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }

}