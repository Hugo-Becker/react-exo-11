
import './App.css';
import React from 'react'

class App extends React.Component {
  state={
    nombre:1
  };

  plusUn=()=>{
    var nbr=this.state.nombre

    this.setState({
      nombre:nbr+=1
    })
  };
  
  moinsUn=()=>{
    var nbr=this.state.nombre
    this.setState({
      nombre:nbr-=1
    })
  };
  redify=()=>{
    let span=document.querySelector('span')
    if(span.classList.contains('red')){
      span.classList.remove('red')
    }else{
      span.classList.add('red')
    }

  }
  render(){
    return (
      <div className='content'>
        <span>{this.state.nombre}</span>
        <br></br>
        <button onClick={this.plusUn}>+1</button>
        <button onClick={this.moinsUn}>-1</button>
        <button onClick={this.redify}>Redify</button>
      </div>

    
      );

  }
  
}

export default App;
