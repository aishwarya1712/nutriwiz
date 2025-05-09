import React from 'react'
import { Box, Paper, Typography, useTheme, useMediaQuery } from '@mui/material'
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
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          '& .water-drop': {
            transform: 'scale(1.1)',
            opacity: 0.8
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(53, 121, 96, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
          zIndex: 0
        }
      }}
    >
      <Box 
        className="water-drop"
        sx={{ 
          position: 'absolute',
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          background: 'radial-gradient(circle, rgba(53, 121, 96, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          zIndex: 0
        }}
      />
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        mb: 1,
        position: 'relative',
        zIndex: 1
      }}>
        <Box sx={{
          color: '#357960',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}>
          {icon}
        </Box>
        <Typography 
          fontSize={"20px"} 
          fontWeight={700}
          sx={{
            background: 'linear-gradient(45deg, #357960 30%, #4CAF50 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            transition: 'all 0.3s ease'
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        component="div"
        variant="body1"
        sx={{ 
          overflowY: 'auto', 
          pr: 1,
          position: 'relative',
          zIndex: 1,
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(53, 121, 96, 0.1)',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#357960',
            borderRadius: '2px',
          }
        }}
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
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated water drops in background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: 20,
            height: 20,
            background: 'radial-gradient(circle, rgba(53, 121, 96, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
            borderRadius: '50%',
            animation: `float ${5 + i}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
            pointerEvents: 'none'
          }}
        />
      ))}

      <Box sx={{ 
        width: '100%', 
        maxWidth: 1100, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 4, 
        p: 10,
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <Typography
          variant={isSmUp ? 'h4' : 'h5'}
          textAlign="center"
          fontWeight={700}
          sx={{
            background: 'linear-gradient(45deg, #357960 30%, #4CAF50 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            animation: 'fadeInUp 0.8s ease-out'
          }}
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
              sm: 'repeat(3, 1fr)'
            },
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}
        >
          {cards.map(({ icon, title, body }, index) => (
            <Box
              key={title}
              sx={{
                animation: `fadeInUp 0.8s ease-out ${0.3 + index * 0.1}s both`
              }}
            >
              <SquareCard icon={icon} title={title}>
                {body}
              </SquareCard>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
