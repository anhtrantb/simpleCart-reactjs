import React from "react";
import {CartContext} from '../Context.js'
import './Bought.css'
import {Button } from 'reactstrap'
export default function(){
       
    return <div >
        <table className='table'>
       <CartContext.Consumer>
        {
        ({productDidAdd,deleteFromCart})=> {
            return(
                productDidAdd.length===0? 
                (<div style={{marginTop:30,
                            color:'green',
                            textAlign:'center',
                            fontSize:25}}>
                    hiện không có đồ đã chọn</div>)
                    :
                (<div>
                    {
                    productDidAdd.map(value=>{
                        return <div>
                        <tr>
                        <td className='image'><img src={value.imageUrl} alt=''/></td>
                        <td className='name'>{value.name}</td>
                        <td className='describe'>{value.desciption}</td>
                        <td><Button color="danger" 
                                    onClick={()=>deleteFromCart(value)}>Delete</Button></td>
                        </tr>
                        </div>
                    })
                    }
                </div>)
            )   
            }
        }
        </CartContext.Consumer> 
       </table>
    </div>
}