import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import { AddToCart } from "../reducers/rootReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductCard=({product})=>
{
    const [cartbtn,setCartbtn]=useState('Add to Cart');
    let navigate=useNavigate();
    const dispatch=useDispatch()

    //local storage
    const productpass=(product)=>{
        localStorage.setItem('item',product.id)
        let path='/discription';
        navigate(path); 
    }
    
    const settingcart=(product)=>{
        setCartbtn("Go To Cart");
        dispatch(AddToCart(product.id))
    }
    return(
        <div  key={product.id} >
                <div className="card-container" >
                    <div onClick={()=>productpass(product)}>
                        <img className="img" src={product.imageUrl} alt={product.Name}></img>
                        <h3>{product.Name}</h3>
                        <h4 className="price">MRP:<strong>{product.Price}/-</strong></h4>
                    </div>
                    <button className="button"  onClick={()=>settingcart(product)}>{cartbtn}</button>
                </div>
         </div>
            )
} 
export default ProductCard;




/*const ProductCard=()=>
{
    const productpass=(product)=>
    { 
        console.log('item1',product)
      localStorage.setItem('item',product);
        <Discription/>
    }
    return(
        <div className="outherbox">
        <div className="cardlist"> 
            {Products.map((product)=>
            {
                return(
                    
                    <div  key={product.id} onClick={productpass(product)} >
                        <div className="card-container" >
                        <img className="img" src={product.imageUrl} alt={product.Name}></img>
                        <h3> {product.Name}</h3>
                        <h4 className="price">MRP:<strong>{product.Price}/-</strong></h4>
                        </div>
                      
                    </div>
                )
            } 
            )}
        </div>
        </div>
    )
}

//import { Component } from "react";
//import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
/*import './index.css';
<Link to={'/${products.id}'}  className="connect" >


const Home=(props)=>
{
  const detail=[]
 /* const discription=()=>{
  }*/
  /*console.log(detail)
   //const history=useNavigate();
    const{products}=props;
    return(
        <div className="outherbox">
        <div className="cardlist"> 
            {products.map((products)=>
            {
                return(
                    <div  key={products.id} onClick={()=>{detail.push(products.id)}}>
                        <div className="card-container" >
                        <img className="img" src={products.imageUrl} alt={products.Name}></img>
                        <h3> {products.Name}</h3>
                        <h4 className="price">MRP:<strong>{products.Price}/-</strong></h4>
                        </div>
                      
                    </div>
                )
            }
           
            )}
        </div>
        
        </div>
    )
}
/*class Home extends Component{
   
    render()
    {
       
        const {products}=this.props;
        
        return( 
        <div className="outherbox">
        <div className="cardlist"> 
            {products.map((products)=>
            {
                return(
                    <div  key={products.id}>
                        <div className="card-container" }>
                        <img className="img" src={products.imageUrl} alt={products.Name}></img>
                        <h3> {products.Name}</h3>
                        <h4 className="price">MRP:<strong>{products.Price}/-</strong></h4>
                        </div>
                    </div>
                )
            }
           
            )}
        </div>
        </div>)
    }*/
      /*<h2><strong>{products.Price}</strong></h2>
                        <span><h3>About Me:{products.color}</h3></span>
                        <button>ADD TO Cart</button>*/
    /*render(){
        return
        (
            props.products.map((products)=>
        {

          return <div>
            <span><h1>I'm {products.Name}</h1></span>
          <img src={products.imageUrl}></img>
          <h2><strong>{products.Price}</strong></h2>
          <span><h3>About Me:{products.color}</h3></span>
          <button>ADD TO Cart</button>
          <hr></hr>
          </div> 
        }
        )
    }
    localStorage.setItem("id",products.id)
          )
}*/
