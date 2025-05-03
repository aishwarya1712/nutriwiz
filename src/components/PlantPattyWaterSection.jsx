import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'


export default function PlantPattyWaterSection() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

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
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const data = [
    { label: 'Beef Patty', value: 400, num_label: 400, color: ['#E95322', '#C34214'] },
    { label: 'Plant Patty', value: 4, num_label: 4, color: ['#4ac3af', '#32a887'] },
  ]
  const maxVal = Math.max(...data.map(d => d.value))

  return (
    <Box
      ref={ref}
      sx={{
        height: '100vh',
        width: '100vw',
        px: 4,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={"bold"}>
        In comparison, one plant-based patty only consumes 4 gallons of virtual water
      </Typography>

      {/* Chart */}
      <Box
        sx={{
          mt: 4,
          width: '100%',
          maxWidth: 600,
          height: 300,
          position: 'relative',
        }}
      >

        <Stack
          direction="row"
          spacing={6}
          alignItems="flex-end"
          justifyContent="center"
          sx={{ height: '100%' }}
        >
          {data.map((d, idx) => {
            const heightPerc = (d.value / maxVal) * 100
            return (
              <Box key={idx} sx={{ width: 80 }}>
                {/* value label */}
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {d.num_label} gal
                </Typography>

                {/* bar container */}
                <Box
                  sx={{
                    position:    'relative',
                    width:       '100%',
                    height:      '220px',
                    bgcolor:     '#f0f0f0',
                    borderRadius:'8px',
                    overflow:    'hidden',
                    boxShadow:   '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: inView ? `${heightPerc}%` : 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      background: `linear-gradient(to top, ${d.color[0]}, ${d.color[1]})`,
                      borderRadius: '8px 8px 0 0',
                    }}
                  />
                </Box>

                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {d.label}
                </Typography>
              </Box>
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}
