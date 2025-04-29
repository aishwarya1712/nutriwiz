import React, { useState, useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

import healthyImg from '../assets/healthy.png'
import earthImg   from '../assets/earth.png'

export default function ImageMorpher() {
  const [inView, setInView]     = useState(false)
  const [flipped, setFlipped]   = useState(false)
  const containerRef            = useRef(null)

  const size = 350

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let timer
    if (inView) {
      timer = setTimeout(() => {
        setFlipped(true)
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [inView])

  const wrapperStyles = {
    width:          size,
    height:         size,
    margin:         '0 auto',
    position:       'relative',
    perspective:    '1000px',
    transformStyle: 'preserve-3d',
    borderRadius:   '50%',
    overflow:       'hidden',
  }

  const faceStyles = {
    width:              '100%',
    height:             '100%',
    position:           'absolute',
    top:                 0,
    left:                0,
    backfaceVisibility: 'hidden',
    transformStyle:     'preserve-3d',
    transformOrigin:    '50% 50%',
  }

  return (
    <Box ref={containerRef} sx={wrapperStyles}>
      {/* Plate Face */}
      <motion.div
        style={faceStyles}
        initial={{ rotateY: 0,   opacity: 1 }}
        animate={{ rotateY: flipped ? 180 : 0, opacity: flipped ? 0 : 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      >
        <img
          src={healthyImg}
          alt="Vegan Plate"
          width={size}
          height={size}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Earth Face */}
      <motion.div
        style={faceStyles}
        initial={{ rotateY: -180, opacity: 0 }}
        animate={{ rotateY: flipped ? 0 : -180, opacity: flipped ? 1 : 0 }}
        transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.1 }}
      >
        <img
          src={earthImg}
          alt="Earth"
          width={size}
          height={size}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>
    </Box>
  )
}
