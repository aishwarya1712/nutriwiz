import React, { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import FlashCard from './FlashCard'

export default function FlashCardCarousel({
  cards,
  cardWidth = 320,
  cardHeight = 200,
  cardProps = {},
}) {
  const [current, setCurrent] = useState(0)
  const total = cards.length

  const prev = () => setCurrent((idx) => (idx - 1 + total) % total)
  const next = () => setCurrent((idx) => (idx + 1) % total)

  if (total === 0) return null
  const { front, back } = cards[current]

  return (
    <Box sx={{ width: '100%', userSelect: 'none', textAlign: 'center' }}>

      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton onClick={prev} aria-label="Previous card">
          <ArrowBackIos />
        </IconButton>

        <Box sx={{ mx: 2 }}>
          <FlashCard
            key={current}
            front={front}
            back={back}
            width={cardWidth}
            height={cardHeight}
            {...cardProps}
          />
        </Box>

        <IconButton onClick={next} aria-label="Next card">
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary' }}>
        {current + 1} / {total}
      </Typography>
    </Box>
  )
}
