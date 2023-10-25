class pilha { 
    
constructor() {
    this.items = [];
    }
   //incluir elemento
  push(value){
    this.items.push(value)
  }
  //retira elemento
  pop(){
    this.items.pop();
  }
  //verifica se tem elementos / se esta em branco
  isEmpty(){
    return(this.size() == 0 );

  }
  // retorna o numero de elementos da classe
  size(){
    return(this.items.length)
  }
 //retorna o valor do ultimo elemento da fila/ o topo
  peek(){
    return (this.items[this.size()-1])
  }
}
 p = new pilha();
 aux = new pilha();
 list = new pilha();
//let pilha =[];
//let Aux =[];
//let lista=[];
p.push('Jose');
p.push('Alexandre');
p.push('Cauan');
p.push('Mariza');
p.push('Gabrielli')



console.log(p);
console.log(p.peek())

p.pop();
aux.push(p);
console.log(aux);
//pilha.push(4);

console.log(p);

//pilha.pop();
//pilha.push(5);
//pilha.pop();

console.log(p);

//console.log(aux);


//console.log(p.peek())
//p.pop();
// items
//console.log (p);
// topo  = 20
//console.log(p.peek());
//positivos.push(p.peek());
// retira 20
//p.pop();
// retira -15
//p.pop();
//pegando o valor de 30
//positivos.push(p.peek());
// retirando 30
//p.pop();
//console.log(p);
//console.log(positivos);

