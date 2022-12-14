import React, { useState, useRef, useEffect } from 'react'
import Burguer from '../../assets/burguer2.svg'
import Trash from '../../assets/trash.svg'
import True from '../../assets/check.png'
import Arrow from '../../assets/arrow.svg'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import  H1  from '../../components/Title'
import Button from '../../components/Button'

import { Container, ContainerItens, Image, User } from './styles'

function Order() {

  const [order, setOrder] = useState([])
  const atualOrder = useRef()
  const history = useHistory()

  async function ordercompletion (userId) {
     await axios.patch (`http://localhost:3001/order/${userId}`)

     const oudOrder = order.filter({ status: atualOrder.current.value === userId ? 'Pronto' : 'Em preparção'})

     setOrder(oudOrder)
  }

  useEffect(() => {
    async function fetchOrder() {
      const { data: newOrder } = await axios.get('http://localhost:3001/order')

      setOrder(newOrder)
    }
    fetchOrder()
  }, [])

  async function deleteOrder(userId) {

    await axios.delete(`http://localhost:3001/order/${userId}`)
    const newOrder = order.filter((user) => user.id !== userId)

    setOrder(newOrder)

  }

  function goGbackPage() {
    history.push('/')
  }

  return (
    <Container>

      <Image alt="logo-codeclub" src={Burguer} />

      <ContainerItens>
        <H1>Pedidos </H1>

        <ul>
          {order.map((user) => (
            <User key={user.id} >
              <p>{user.order}</p>
              <p>{user.clientName}</p>
              <p>{user.status}</p>
              
              <button onClick={() => deleteOrder(user.id)}> <img src={Trash} alt='latada-de-lixo' /></button>

              <button onClick={() => ordercompletion(user.id)}> <img src={True} alt='Pedido-pronto' /></button>
            </User>

          ))}
        </ul>


        <Button onClick={goGbackPage} isBack={true} > <img src={Arrow} alt='Seta'/> Voltar  </Button>
      </ContainerItens>
    </Container>
  )
}
export default Order