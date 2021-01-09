import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Hostel from '../components/Hostel'
import React from 'react'
import axios from 'axios'

const HomeScreen = () => {
  const [hostels, setHostels] = useState([])

  useEffect(() => {
    const fetchHostels = async () => {
      const { data } = await axios.get('/api/hostels')

      setHostels(data)
    }

    fetchHostels()
  }, [])

  return (
    <>
      <h1>Latest Hostels</h1>
      <Row>
        {hostels.map((hostel) => (
          <Col key={hostel._id} sm={12} md={6} lg={4} xl={3}>
            <Hostel hostel={hostel} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
