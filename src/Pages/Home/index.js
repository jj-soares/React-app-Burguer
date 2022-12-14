import React, {useState, useRef } from 'react'
import Burguer from '../../assets/burger1.svg'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import  H1  from '../../components/Title'
import Button from '../../components/Button'


import { Container,  InputLabel, Input,  ContainerItens, Image, } from './styles'

function App() {

  const [order, setOrder] = useState ([])
  const inputRequest = useRef()
  const inputName = useRef()
  const history = useHistory()

  
  async function addNewOrder () {

    const {data : newOrder} = await axios.post('http://localhost:3001/order',
     {order: inputRequest.current.value,
       clientName: inputName.current.value, })

   setOrder([...order, newOrder])

   history.push('/order')
  }

  return (
    <Container>

    <Image alt="logo-codeclub" src={Burguer}/>

      <ContainerItens>
        <H1>Faça seu pedido !</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputRequest}  placeholder='1-Coca-Cola, 1- X- Salada'/>


        <InputLabel>Nome do Cliente</InputLabel>
        <Input  ref={inputName} placeholder='Irineu'/>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>
  )
}
export default App