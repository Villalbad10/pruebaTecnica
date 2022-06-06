import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import postData from '../helpers/postData';
import UseForm from '../hook/UseForm'

const Registro = () => {

   const [data, handleChange, reset] = UseForm({
      title: "",
      image: ""
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      postData(data)
      reset()
      alert('Producto Registrado')
   }




   return (
      <>
         <Form onSubmit={handleSubmit} className='container mt-5'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
               <Form.Label>Titulo del Producto</Form.Label>
               <Form.Control value={data.title} onChange={handleChange} name='title' type="text" placeholder="Titulo del producto..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
               <Form.Label>Imagen del Producto</Form.Label>
               <Form.Control value={data.image} onChange={handleChange} name='image' type="text" placeholder="Link de la imagen..." />
            </Form.Group>
            <Button variant='outline-success' type="submit">Registrar</Button>
         </Form>
      </>
   )
}

export default Registro