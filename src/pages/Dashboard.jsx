import React from 'react'
import Header from '../components/Header'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { mockTransactions } from '../data/mockData'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'

const Dashboard = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
      </Box>
    </Box>
  )
}

export default Dashboard
