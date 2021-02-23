import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'PhotoShop', price: '$90'},
    {name: 'Illistrator', price: '$95'},
    {name: 'PDF Reader', price: '$7'}
  ] 
  return (
    <div className="App">
      <header className="App-header">
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product =><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product =><Product product={product}></Product>)
        }
      </header>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount = (count + 1);
 
  return (
    <div>
      <h1>Count:{ count}</h1>
      <button onClick={() => setCount (count + 1)}>Increase</button>
      <button onClick={() => setCount (count - 1)}>Decrease</button>
    </div>
    )
  }

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Product (props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    float:'left',
    width:'200px',
    height:'200px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
