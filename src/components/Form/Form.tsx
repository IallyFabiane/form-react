import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import  { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Formulario = () => {
    const [state, setState] = useState('');

    function handleChange (e: { target: { value: any; }; }) { 
        const value = e.target.value;
        setState(value);
        localStorage.setItem(value, JSON.stringify(value));
    }

    function handleSubmit (e: { preventDefault: () => void; }) {
            e.preventDefault();
    };


    return (
        <div className="container-fluid overflow-hidden gap-2">
            <Row>
            <Col className="col col-4">
                <Form>
                        <Form.Group className="mb-3" controlId="formBasicName" >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" id="nome" placeholder="Seu nome aqui" onBlur={handleChange} />
                        </Form.Group> 
                        
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control type="text" id="sobrenome" placeholder="Seu sobrenome aqui" onBlur={handleChange} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" id="email" placeholder="usuario@mail.com" onBlur={handleChange} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicTel">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" id="telefone" placeholder="(xx) xxxxx - xxxx" onBlur={handleChange} required />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="text" id="endereço" placeholder="Nome da rua, nº" onBlur={handleChange} />
                        </Form.Group>
                        
                        <div className="d-grid gap-2">
                            <Button variant="outline-info" onClick={handleSubmit} type="submit">Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
        
       
    ); 
};


export default Formulario;
