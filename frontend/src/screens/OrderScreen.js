import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OrderScreen = () => {
  return (
    <h1 className='center'>
      Thank You for purchasing.
      <br />
      <br />
      <h2>
        The item has been reserved and can be collected at your nearest offline
        store
      </h2>
      <br />
      <br />
      <Button className='custom-btn'>
        <Link to='/'>Go Back</Link>
      </Button>
    </h1>
  )
}

export default OrderScreen
