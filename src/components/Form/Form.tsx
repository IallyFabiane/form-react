import React, { useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import PasswordChecklist from "react-password-checklist";
import { Form } from 'react-bootstrap';
import  { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

type Inputs = {
    email: string,
    password: string,
};

const Formulario = () => {
    const [state, setState] = useState('');
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    function handleChange (e: { target: { value: any; }; }): void { 
        const value = e.target.value;
        setState(value);
        localStorage.setItem(value, JSON.stringify(value));
    };


    return (
        <div className="container-fluid overflow-hidden gap-2 w-100" style={{ margin: '2% 5%' }}>
            <Row>
            <Col className="col col-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicName" >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Seu nome aqui" onBlur={handleChange} />
                        </Form.Group> 
                        
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control type="text" placeholder="Seu sobrenome aqui" onBlur={handleChange} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email"  placeholder="usuario@mail.com" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} onBlur={handleChange} />
                            {errors.email?.type === 'required' && <span> This field is required</span>}
                            {errors.email?.type === 'pattern' && <span> Invalid email</span>}

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"  placeholder="........" required  onChange={ e => setPassword(e.target.value)} />
                            <Form.Label>Digite sua senha novamente</Form.Label>
                            <Form.Control type="password"  placeholder="........" required onChange={e => setPasswordAgain(e.target.value)} />
                            <PasswordChecklist
                                rules={["minLength","specialChar","number","capital","match"]}
                                minLength={5}
                                value={password}
                                valueAgain={passwordAgain}
                                onChange={(isValid) => {}}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicTel">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="(xx) xxxxx - xxxx" onBlur={handleChange} />
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="text" placeholder="Nome da rua, nº xx-Bairro: xxx," onBlur={handleChange} />
                        </Form.Group>
                        
                        <div className="d-grid gap-2">
                            <Button variant="outline-info"  type="submit">Enviar</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
        
       
    ); 
};


export default Formulario;
