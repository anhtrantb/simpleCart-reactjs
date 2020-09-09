import React from "react";
export const CartContext = React.createContext();
export class CartProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productDidAdd:[]
        }
        this.addToCart=this.addToCart.bind(this)
        this.deleteFromCart=this.deleteFromCart.bind(this)
    }
    addToCart(pro){
        this.setState({
            productDidAdd:this.state.productDidAdd.concat(pro)
        })
    }
    deleteFromCart(pro){
        var arr= Object.assign({},this.state).productDidAdd;
        let newarr = arr.filter(function(value){
            if (value.id!==pro.id)
            return value;
        })
        this.setState({
            productDidAdd:newarr
        })
    }
    render(){
        return(
            <CartContext.Provider value={
                {
                    productDidAdd:this.state.productDidAdd,
                    addToCart:this.addToCart,
                    deleteFromCart:this.deleteFromCart
                }
            }>
                {this.props.children} 
            </CartContext.Provider>
        )
    }
}