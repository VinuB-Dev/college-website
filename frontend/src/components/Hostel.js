import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Hostel = ({ hostel }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/hostel/${hostel._id}`}>
        <Card.Img src={hostel.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/hostel/${hostel._id}`}>
          <Card.Title as='div'>
            <strong>{hostel.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={hostel.rating} text={`${hostel.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as='h3'>Rs.{hostel.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Hostel
