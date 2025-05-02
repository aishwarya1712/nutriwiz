import React from 'react'
import {
  Box,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import OpacityIcon from '@mui/icons-material/Opacity'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import PublicIcon from '@mui/icons-material/Public'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import FastfoodIcon from '@mui/icons-material/Fastfood';

function SquareCard({ icon, title, children }) {
  const theme = useTheme()

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'relative',
        aspectRatio: '1 / 1',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        boxSizing: 'border-box',
        borderLeft: '6px solid #357960',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        {icon}
        <Typography variant="subtitle1" fontWeight={700}>
          {title}
        </Typography>
      </Box>
      <Typography
        component="div"
        variant="body2"
        sx={{ overflowY: 'auto', pr: 1 }}
      >
        {children}
      </Typography>
    </Paper>
  )
}

export default function VirtualWaterSection() {
  const theme  = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

  const cards = [
    {
      icon: <OpacityIcon fontSize="large" />,
      title: 'Virtual Water',
      body:
        'Virtual water is the water “hidden” in the food, products and services people buy and use every day.',
    },
    {
      icon: <CompareArrowsIcon fontSize="large" />,
      title: 'Direct vs Virtual',
      body:
        'Direct water is what you use from the tap. Virtual water is the hidden water embedded throughout a product\'s entire supply chain.',
    },
    {
      icon: <FastfoodIcon fontSize="large" />,
      title: 'An example',
      body:
        'If you\'re making pasta, you only see the water in your pot, but wheat farming, milling and energy add far more virtual water to every bowl of pasta.',
    },
    {
      icon: <PublicIcon fontSize="large" />,
      title: 'Footprint Link',
      body:
        'Add up all the hidden (virtual) water in farming, processing, and shipping, and you get a product\'s total water footprint.',
    },
    {
      icon: <HistoryEduIcon fontSize="large" />,
      title: 'Origins',
      body:
        'Professor Tony Allan coined the term in the 1990s studying how ' +
        'water-scarce nations met food demand; he won the 2008 Stockholm Water Prize.',
    },
    {
      icon: <LightbulbIcon fontSize="large" />,
      title: 'Why Care?',
      body:
        'Virtual water can help understand the relationship between water scarcity and food, and the role that consumers\' dietary choices play in water scarcity. '
    },
  ]

  return (
    <Box
      className="snap-section"
      sx={{
        height: '100vh',
        scrollSnapAlign: 'start',
        overflowY: 'auto',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Header */}
        <Typography
          variant={isSmUp ? 'h4' : 'h5'}
          textAlign="center"
          fontWeight={700}
        >
          The Concept of Virtual Water
        </Typography>

        {/* CSS grid with true-square cards */}
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(auto-fill, minmax(160px, 1fr))',
              sm: 'repeat(auto-fill, minmax(200px, 1fr))',
              md: 'repeat(auto-fill, minmax(220px, 1fr))',
            },
          }}
        >
          {cards.map(({ icon, title, body }) => (
            <SquareCard key={title} icon={icon} title={title}>
              {body}
            </SquareCard>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
