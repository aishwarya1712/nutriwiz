import { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';

export default function FlashCard({
  front,
  back,
  width = 320,
  height = 200,
  elevation = 6,
  radius = 2,
}) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <Box
      sx={{ perspective: 1200, width, height: height + 30, cursor: 'pointer', outline: 'none' }}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle()}
    >
      <Card
        elevation={elevation}
        sx={{
          width: 1,
          height,
          borderRadius: radius,
          bgcolor: 'background.paper',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          overflow: 'visible',
          position: 'relative',
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: "100%"
            // p: 2,
          }}
        >
          {front}
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
          }}
        >
          {back}
        </Box>
      </Card>

    </Box>
  );
}
