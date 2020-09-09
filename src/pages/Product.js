import React,{Component} from "react";
//import axios from 'axios'
import {CartContext} from '../Context.js'
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, Button} from 'reactstrap';
class Products extends Component{
  constructor(){
    super();
    this.state={
      product:[
          {
            "id": "5a21c372-9058-404f-99b2-e90476478d81",
            "name": "Pork - Tenderloin, Fresh",
            "desciption": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue",
            "imageUrl": "http://dummyimage.com/150x200.jpg/5fa2dd/ffffff"
          },
          {
            "id": "d84d1720-b402-4883-993e-1aa50696161c",
            "name": "Bread - 10 Grain",
            "desciption": "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis",
            "imageUrl": "http://dummyimage.com/150x200.jpg/ff4444/ffffff"
          },
          {
            "id": "a47e2c27-04ef-4cbf-978a-78724e9e0de0",
            "name": "Tomatoes - Diced, Canned",
            "desciption": "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
            "imageUrl": "http://dummyimage.com/150x200.jpg/dddddd/000000"
          },
          {
            "id": "4fa842a8-72a2-4b84-b168-0c2448dbab09",
            "name": "Ecolab - Mikroklene 4/4 L",
            "desciption": "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus",
            "imageUrl": "http://dummyimage.com/150x200.jpg/dddddd/000000"
          },
          {
            "id": "9b67fdeb-676e-446b-9448-0439bdde9fbd",
            "name": "Watercress",
            "desciption": "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
            "imageUrl": "http://dummyimage.com/150x200.jpg/cc0000/ffffff"
          },
          {
            "id": "7615d0e2-805c-4373-9520-80ea35be7d9e",
            "name": "Pork - Inside",
            "desciption": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
            "imageUrl": "http://dummyimage.com/150x200.jpg/ff4444/ffffff"
          },
          {
            "id": "d0a99dba-3136-4340-afda-7c062d04d410",
            "name": "Scallops - 10/20",
            "desciption": "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
            "imageUrl": "http://dummyimage.com/150x200.jpg/cc0000/ffffff"
          },
          {
            "id": "68bb20e7-f430-424d-9012-82b1d54011ce",
            "name": "Grapefruit - Pink",
            "desciption": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue",
            "imageUrl": "http://dummyimage.com/150x200.jpg/cc0000/ffffff"
          },
          {
            "id": "c8686627-0546-45b6-9fd0-a78bf838d8d4",
            "name": "Lidsoupcont Rp12dn",
            "desciption": "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
            "imageUrl": "http://dummyimage.com/150x200.jpg/dddddd/000000"
          },
          {
            "id": "cae1916c-c15c-48ab-af09-1bde5f96b19a",
            "name": "Wine - Red, Harrow Estates, Cab",
            "desciption": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
            "imageUrl": "http://dummyimage.com/150x200.jpg/ff4444/ffffff"
          },
          {
            "id": "d660ea86-1327-4544-aa1c-3065e6a5969e",
            "name": "Bagelers",
            "desciption": "ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
            "imageUrl": "http://dummyimage.com/150x200.jpg/cc0000/ffffff"
          },
          {
            "id": "fda1164f-41c2-4d6b-b921-0840f87e20e8",
            "name": "Turkey - Whole, Fresh",
            "desciption": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat",
            "imageUrl": "http://dummyimage.com/150x200.jpg/cc0000/ffffff"
          },
          {
            "id": "ee74878f-3e70-4bc2-9fb8-85fa925543ed",
            "name": "Alize Gold Passion",
            "desciption": "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
            "imageUrl": "http://dummyimage.com/150x200.jpg/ff4444/ffffff"
          },
          {
            "id": "7f9a53d4-dc6c-4c57-ae81-d3debff11d8c",
            "name": "Nantucket - 518ml",
            "desciption": "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
            "imageUrl": "http://dummyimage.com/150x200.jpg/5fa2dd/ffffff"
          },
          {
            "id": "654fc416-9af4-4217-a871-d5ab86d3030b",
            "name": "Wine - Sauvignon Blanc",
            "desciption": "tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
            "imageUrl": "http://dummyimage.com/150x200.jpg/dddddd/000000"
          }     
      ]
    }
}
// componentDidMount(){
// //lấy dữ liệu từ trên server 
//   axios.get('https://7xbuh.sse.codesandbox.io/product').then(res=>{
//     this.setState({
//       product:res.data
//     })
//   })
// }
render(){
  const {product}=this.state;
  return (
    <Container>
      <Row>
      {
        product.map(pro=>{
          return(
            <Col md='3'>
               <Card>
                <CardImg top src={pro.imageUrl} alt="Card image cap" />
                <CardBody  >
                  <CardTitle>{pro.name}</CardTitle>
                  <CardText>{pro.desciption}</CardText>
                    <CartContext.Consumer>
                         {
                        ({addToCart})=> <Button onClick={()=>addToCart(pro)}>Add</Button> 
                        } 
                        
                    </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          )
        })
      }
      </Row>
    </Container>
    )
  }
}
export default Products;