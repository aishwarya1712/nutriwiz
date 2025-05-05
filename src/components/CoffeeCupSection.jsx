import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import coffeeImg from '../assets/coffee.png'

export default function CoffeeCupSection() {
  const rows = 8
  const cols = 8
  const totalCups = rows * cols

  const headerRef = useRef(null)
  const footerRef = useRef(null)
  const [availableH, setAvailableH] = useState(0)
  const [cupSize, setCupSize]     = useState(0)

  useEffect(() => {
    function updateLayout() {
      const headerH = headerRef.current?.clientHeight || 0
      const footerH = footerRef.current?.clientHeight || 0
      const availH  = window.innerHeight - headerH - footerH
      const availW  = window.innerWidth
      const sizeH   = availH / rows
      const sizeW   = availW / cols
      const size    = Math.floor(Math.min(sizeH, sizeW))

      setAvailableH(availH)
      setCupSize(size)
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }
  const cupVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.2 } }
  }

  return (
    <Box
      className="snap-section"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box ref={headerRef} sx={{ p: 2, flexShrink: 0 }}>
        <Typography variant="h4" fontWeight="bold">
        400 gallons can fill up 6,400 glasses of water.
        </Typography>
      </Box>

      {/* Animated Grid: Only starts when scrolled into view */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        sx={{
          height: `${availableH}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, ${cupSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${cupSize}px)`,
          }}
        >
          {Array.from({ length: totalCups }).map((_, idx) => (
            <Box
              key={idx}
              component={motion.img}
              src={coffeeImg}
              alt="Coffee Cup"
              variants={cupVariants}
              sx={{
                width: `${cupSize}px`,
                height: `${cupSize}px`,
                objectFit: 'contain',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Box ref={footerRef} sx={{ p: 2, flexShrink: 0, textAlign: 'center' }}>
        <Typography variant="subtitle1" sx={{fontWeight: "500"}}>
          *Each icon represents ten 8-oz glassses of water.
        </Typography>
      </Box>
    </Box>
  )
}
