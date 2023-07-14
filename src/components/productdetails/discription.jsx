import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../../data";
import {AddToCart} from "../reducers/rootReducer"
import {useDispatch } from "react-redux/es/exports";
import './discription.css'

const Discription=()=>{

    const navigate=useNavigate();
    const item=localStorage.getItem('item');
   
    const dispatch=useDispatch();

    const [cartbtn,setCartbtn]=useState('Add to Cart');

    const handlecart=(product)=>
    {
        
        setCartbtn("Go to cart");
        console.log("discription");
        dispatch(AddToCart(product.id));
        const path='/cart';
        navigate(path);
         //debugger;
    }
    return(
        <div>
             {Products.map((product)=>{
        if(product.id==item)
        {
            return(
                <div className="outer" key={product.id}>
                    <div className="fullbox" >
                        <div className="half1">
                            <img className="disimage" src={product.imageUrl} alt={product.Name}/>
                        </div>
                        <div className="half2">
                            <div>
                                <h1>{product.Name}</h1>
                                <h3>Color: </h3>
                                <h3>Ram:</h3>
                                <h3>Rom:</h3>
                                <h3>Price:</h3>
                            
                            </div>
                            <div className="half25">
                                <h3>{product.color} </h3>
                                <h3>{product.ram}</h3>
                                <h3>{product.rom}</h3>
                                <h3>{product.Price}</h3>
                                
                            </div>
                            <div  >
                            <button onClick={()=>handlecart(product)} >{cartbtn}</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            ) 
        }
    })}
        </div>
    )
   
   
}
export default Discription;



/*
 <h3>Quantity : </h3> 
<input className="quantity" type="number" id="quantity" min="1" max="5" value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
*/



/*const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart:(id)=>dispatch(addToCart(id)),
    };
};*/
/* if(item!=="")
        {
            AddProduct(product);
            setitem("");
            setCartbtn('Go to cart');
        }
        else{
            const path='/cart';
            navigate(path);
        }
        setitem("");*/
       // console.log('in handlecart')
       /* if(cartbtn==='Add to Cart')
        {
            
            setitem([...items,product])
            console.log('items check',items)
            localStorage.setItem('list',items);
            debugger;
            console.log(localStorage.getItem('list'))
            setCartbtn('Go to cart');
        }
        else
        {
            const path='/cart'  
            //setCartbtn('Add to Cart');
            navigate(path);
        }*/