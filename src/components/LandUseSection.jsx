import React, { useState, useEffect, useRef } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

import veganLandUse from '../assets/vegan_landuse.svg'
import vegetarianLandUse from '../assets/vegetarian_landuse.svg'
import meatLandUse from '../assets/meat_landuse.svg'

// in m² per day
const landUseData = {
    'Vegan': 4.37,
    'Vegetarian': 6.01,
    'Meat Eater': 16.78,
  }

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

// if you increase more width and height it makes it harder to comapre
// maybe just increase the width and not the height
// unless yo uhave a view that super imposes them 
// if there's some animation that super imposes them, putting the
// make it 
export default function LandUseSection() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <Stack spacing={2} alignItems="center">
        <Typography fontSize={45} fontWeight="bold">
          How much land is used daily to feed one person?
        </Typography>

        <Stack spacing={5}>
          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={5} alignItems="center">
              <img
                src={veganLandUse}
                style={{ height: 100, width: 100, borderRadius: 20 }}
              />
              <Stack>
              <Typography fontSize={32} fontWeight="bold">
                Vegan
              </Typography>
              <Typography fontSize={16}>
                {landUseData.Vegan} m²/day
              </Typography>
              </Stack>
            </Stack>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={5} alignItems="center">
              <img
                src={vegetarianLandUse}
                style={{ height: 100, width: 150, borderRadius: 20 }}
              />
              <Stack>
                <Typography fontSize={32} fontWeight="bold">
                  Vegetarian
                </Typography>
                <Typography fontSize={16}>
                {landUseData.Vegetarian} m²/day
                </Typography>
                <Typography fontSize={16} fontWeight="bold" color="#d1894b">
                  Needs 1.5x more land
                </Typography>

                
              </Stack>
            </Stack>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={5} alignItems="center">
              <img
                src={meatLandUse}
                style={{ height: 100, width: 400, borderRadius: 20 }}
              />
              <Stack>
                <Typography fontSize={32} fontWeight="bold">
                  Meat Eater
                </Typography>
                <Typography fontSize={16}>
                {landUseData['Meat Eater']} m²/day
                </Typography>
                <Typography fontWeight="bold" color="#df264e">
                  Now we need&nbsp;
                  <Box component="span" sx={{ fontSize: '30px' }}>
                    4x
                  </Box>
                  &nbsp;more land!
                </Typography>
              </Stack>
            </Stack>
          </motion.div>
        </Stack>

        <Typography>
          Study: https://www.nature.com/articles/s43016-023-00795-w
        </Typography>
      </Stack>
    </motion.div>
  )
}
