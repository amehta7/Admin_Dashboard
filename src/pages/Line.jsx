import React from 'react'
import Header from '../components/Header'
import { Box } from '@mui/material'
import LineChart from '../components/LineChart'

const Line = () => {
  return (
    <Box m='20px'>
      <Header title='LINE CHART' subtitle='Simple Line Chart' />
      <Box height='70vh'>
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line
