import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { Box, Button, Stack, Typography } from '@mui/material'
import FlashCard from './components/Flashcard';
import WaterImpactSection from './components/WaterImpactSection';
function App() {
  const [showMore, setShowMore] = useState(false);
  const section3Ref = useRef(null);

  useEffect(() => {
    if (showMore && section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMore]);

  const snapDown = () =>
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <>
     <Box className="snap-wrapper">
      <Box className="snap-section">
        <Stack alignItems="center">
          <Typography sx={{ fontWeight: 'bold', fontSize: 107 }}>
            nutri
            <Box component="span" sx={{ color: '#E95322' }}>
              wiz
            </Box>
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 32 }}>
            plant-based eating offers more benefits than you might think
          </Typography>
        </Stack>
      </Box>

      <Box className="snap-section">
            <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center' }}>
              Let's talk environment
            </Typography>
      </Box>

      {/* <Box className="snap-section" sx={{ position: 'relative' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center' }}>
          Did you know it takes <span style={{ color: '#4ac3af' }}>460 gallons of water</span>
          &nbsp;to make a single beef patty?
        </Typography>
        <Box sx={{ position: 'absolute', bottom: 32, right: 32 }}>
        <Button sx= {{ p: 1, width: "100px", backgroundColor: "#4ac3af", borderRadius: "30px"}} variant="contained" onClick={() => setShowMore(true)}>
            Show more
          </Button>
          </Box>
      </Box> */}
      <Box className="snap-section">
        <WaterImpactSection onNext={snapDown} />
      </Box>

      <Box className="snap-section">
      <FlashCard
        front={<Typography variant="h4">🌱 Quinoa</Typography>}
        back={
          <Typography align="center">
            A complete protein seed rich in iron and magnesium.
          </Typography>
        }
        width={320}
        height={220}
      />
      </Box>

      

      {/* Section 4 */}
      {showMore && (
        <Box className="snap-section" ref={section3Ref}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 48 }} variant="h4">
            Here's how plant-powered meals can shrink your water footprint
          </Typography>
        </Box>
      )}
    </Box>
    </>
  )
}

export default App
