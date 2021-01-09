import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const HostelScreen = ({ match }) => {
  const [hostel, setHostel] = useState({})

  useEffect(() => {
    const fetchHostel = async () => {
      const { data } = await axios.get(`/api/hostels/${match.params.id}`)

      setHostel(data)
    }

    fetchHostel()
  }, [match])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={hostel.image} alt={hostel.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{hostel.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={hostel.rating}
                text={`${hostel.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                {hostel.location},{hostel.city}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>Price: Rs.{hostel.price}\Month</ListGroup.Item>
            <ListGroup.Item>Description: {hostel.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs.{hostel.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {hostel.roomAvailabe > 0 ? 'Available' : 'Not Available'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={hostel.roomAvailabe === 0}
                >
                  Select Hostel
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default HostelScreen
