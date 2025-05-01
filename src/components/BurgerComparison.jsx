import React from 'react'
import { Box, Typography } from '@mui/material'
import meatBurger from '../assets/meat_burger.png'
import meatlessBurger from '../assets/meatless_burger.png'

export default function BurgerComparison() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
      >
        In other words, one meat burger uses as much water as 100 plant-based burgers.
      </Typography>

      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Left: one meat burger, smaller size */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={meatBurger}
            alt="Meat Burger"
            sx={{ width: 200, height: 'auto' }}
          />
        </Box>

        {/* Right: 100 plant-based burgers, full grid visible */}
        <Box
          sx={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: 0,
          }}
        >
          {Array.from({ length: 100 }).map((_, idx) => (
            <Box
              key={idx}
              component="img"
              src={meatlessBurger}
              alt={`Plant Burger ${idx + 1}`}
              sx={{ width: '100%', height: 'auto' }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}