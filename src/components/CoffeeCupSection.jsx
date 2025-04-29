import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import coffeeImg from '../assets/coffee.png'

const cupSize = 80
const gap     = 8 


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03
    }
  }
}

const cupVariants = {
  hidden: { scale: 0, opacity: 0 },
  show:   { scale: 1, opacity: 1, transition: { duration: 0.1 } }
}

export default function CoffeeCupSection() {
  const [cupCount, setCupCount] = useState(0)
  const [inView, setInView]     = useState(false)
  const containerRef            = useRef(null)

  // recalc how many cups fit on resize
  useEffect(() => {
    function updateCount() {
      const total = cupSize + gap
      const cols  = Math.floor(window.innerWidth  / total)
      const rows  = Math.floor(window.innerHeight / total)
      setCupCount(cols * rows)
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  // trigger when 50% of section is visible
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  const cups = Array.from({ length: cupCount }, (_, i) => i)

  return (
    <Box
      ref={containerRef}
      sx={{
        position:    'relative',
        left:        '50%',
        marginLeft:  '-100vw',
        width:       '100vw',
        height:      '100vh',
        overflow:    'hidden',
        display:     'flex',
        flexDirection:'column',
        alignItems:  'center',
        pt:          4,
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={"bold"}>
        That's equivalent to the amount of coffee in 4544 cups!
      </Typography>

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        sx={{
          flex:               1,
          width:              '100%',
          display:            'grid',
          gridTemplateColumns:`repeat(auto-fill, ${cupSize}px)`,
          justifyContent:     'start',
          gap:                `${gap}px`,
        }}
      >
        {cups.map((_, idx) => (
          <Box
            key={idx}
            component={motion.img}
            src={coffeeImg}
            alt="Coffee Cup"
            variants={cupVariants}
            sx={{
              width:   `${cupSize}px`,
              height:  `${cupSize}px`,
              display: 'block',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
