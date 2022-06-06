import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import deleteData from '../helpers/deleteData';
import getData from '../helpers/getData';
import { ConteTrajetas } from '../styles/style'

const Inicio = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      getData().
         then(res => setData(res))
   }, [data])


   const deleteProducto = ({ target }) => {
      deleteData(target.id);
      alert('Producto eliminado')
   }




   return (
      <>
         <ConteTrajetas className='container mt-5' >

            {
               data.map((producto, i) => (
                  <Card key={i} className='m-3' style={{ width: '18rem' }}>
                     <Card.Img style={{ height: ' 23rem' }} variant="top" src={producto.image} />
                     <Card.Body>
                        <Card.Title>{producto.title}</Card.Title>
                        <Button id={producto.id} onClick={deleteProducto} variant="outline-danger">Delete</Button>
                     </Card.Body>
                  </Card>
               ))
            }


         </ConteTrajetas>
      </>
   )
}

export default Inicio