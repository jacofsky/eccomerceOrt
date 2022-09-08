import { Form, Row, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import React,{ useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import { db } from '../../firebase';
import { collection, addDoc } from '@firebase/firestore';


const Formulario = () => {

    const {productos, clear} = useContext(CartContext)

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    const onChangeNombre = (e) => {
        setNombre(e.target.value);
      };
      const onChangeTelefono = (e) => {
        setTelefono(e.target.value);
      };
      const onChangeEmail = (e) => {
        setEmail(e.target.value);
      };

    const finalizarCompra = (e) => {
        e.preventDefault() 
        const guardarPedido = async () => {

            const pedido = await addDoc(collection(db, "Pedidos"), {
                nombre: nombre,
                telefono: telefono,
                email: email,
                items: [...productos],
              });
              setId(pedido.id)
        }
        guardarPedido()
    }

    return (
        <div>

            {
                id ? 
                <div>
                    <h1>Gracias por confiar en nosotros!</h1>
                    <p>Id de pededio: {id}</p>
                </div>
                :
             <Form onSubmit={(e) => {
                finalizarCompra(e)
                clear()
             }}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Nombre
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" onChange={onChangeNombre} placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Email address
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" onChange={onChangeTelefono} placeholder="Email address" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Telefono
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" onChange={onChangeEmail} placeholder="Telefono" />
                    </Col>
                </Form.Group>
                <Button type="submit">Terminar compra</Button>
            </Form>
            }
        </div>
    )
}

export default Formulario
