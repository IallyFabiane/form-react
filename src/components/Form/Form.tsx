import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import  { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

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
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName" as={Row}>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" id="nome" placeholder="Seu nome aqui" onBlur={handleChange} />
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicName" as={Row}>
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" id="sobrenome" placeholder="Seu sobrenome aqui" onBlur={handleChange} />
            </Form.Group>
               
            <Form.Group className="mb-3" controlId="formBasicEmail" as={Row}>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" id="email" placeholder="usuario@mail.com" onBlur={handleChange} />
            </Form.Group>
               
            <Form.Group className="mb-3" controlId="formBasicTel" as={Row}>
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="tel" id="telefone" placeholder="(xx) xxxxx - xxxx" onBlur={handleChange} required />
            </Form.Group>
                
            <Form.Group className="mb-3" controlId="formBasicEmail" as={Row}>
                <Form.Label>Endereço</Form.Label>
                <Form.Control type="text" id="endereço" placeholder="Nome da rua, nº" onBlur={handleChange} />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit} type="submit">Submit</Button>
          
        </Form>
       
    ); 
};


export default Formulario;