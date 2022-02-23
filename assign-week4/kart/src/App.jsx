import React, { useState } from 'react';
import './App.css';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

const App = () => {
    const data = [{
        'id': 1,
        'name': 'Analogue',
        'price': 187,
        'quantity': 0,
        'url': 'https://rukminim1.flixcart.com/image/660/792/kpodocw0/watch/p/l/t/anlg-428-blue-blu-analogue-original-imag3uxbhfkyhahf.jpeg?q=50'
    }, 
    {   
        'id': 2,
        'name': 'Just Like',
        'price': 189,
        'quantity': 0,
        'url': 'https://rukminim1.flixcart.com/image/660/792/ksdjma80/watch/h/f/c/stylish-square-dial-smooth-silicon-strap-addi-stylish-designer-original-imag5yhfy2jdjq3z.jpeg?q=50'
    },
    {   
        'id': 3,
        'name': 'Killer',
        'price': 300,
        'quantity': 0,
        'url': 'https://rukminim1.flixcart.com/image/660/792/krjjde80/watch/c/o/e/7088-silver-hmtr-original-imag5b9qe7xhc4jz.jpeg?q=50'
    },
    {   
        'id': 4,
        'name': 'Eddy Hanger ',
        'price': 219,
        'quantity': 0,
        'url': 'https://rukminim1.flixcart.com/image/660/792/kij6f0w0-0/watch/7/9/t/eh-283-bl-eddy-hager-original-imafyauf8s7yf3mh.jpeg?q=50'
    } 
];
const [cartItems, setCartItems] = useState([]);
// const [quantity, setQuantity] = useState(0);

const renderProducts = () => {
    return data.map(item=>{
        return <Product data={item} addToCart={addToCart} cartItems={cartItems}/>
    })
}
//ADDTOCART FUNCTION
const addToCart = (newId) => {
    const index = cartItems.findIndex((x) => x.id === newId);
    const ifExist = cartItems[index];
    console.log("Item is:",ifExist);
    const idx = data.findIndex((item) => item.id === newId);
    if (ifExist) {
      setCartItems(cartItems.map((el) => el.id === newId ? { ...ifExist, 'quantity': ifExist['quantity'] + 1 } : el));
    } else {
      setCartItems([...cartItems, { ...data[idx], 'quantity': 1 }]);
    }
    // console.log(cartItems);
  };
  
  const removeItems = (newId) => {
    const ifExist = cartItems.find((x) => x.id === newId);
    // const idx = data.findIndex((item) => item.id === newId);
    // console.log(exist, idx);
    if (ifExist['quantity'] === 1) {
      setCartItems(cartItems.filter((x) => x.id !== newId));
    }
    else {
      setCartItems(
        cartItems.map((x) =>
          x.id === newId ? { ...ifExist, 'quantity': ifExist['quantity'] - 1 } : x
        )
      );
    }
  }
    
    
  return (
    <>
    <div className="header">
        <h1> Kart </h1>
       
        
    </div>
    <h2>
      Watches
    </h2>
    <div className="body">
        <div className="items">
        {renderProducts()} 
        </div>

        <div className="cart">
        <h2>
         Your Cart
      </h2>
            <Cart cartItems={cartItems} addToCart={addToCart} removeItems={removeItems}/>
        </div>
       
        </div>



    </>
  )
}

export default App