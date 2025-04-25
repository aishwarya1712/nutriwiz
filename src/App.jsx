import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { Box, Button, Stack, Typography } from '@mui/material'

function App() {
  const [showMore, setShowMore] = useState(false);
  const section3Ref = useRef(null);

  useEffect(() => {
    if (showMore && section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMore]);

  return (
    <>
     <Box className="snap-wrapper">
      {/* Section 1 */}
      <Box className="snap-section">
        <Stack alignItems="center">
          <Typography sx={{ fontWeight: 'bold', fontSize: 107 }}>
            nutri
            <Box component="span" sx={{ color: '#E95322' }}>
              wiz
            </Box>
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 32 }}>
            build plant-powered meals
          </Typography>
        </Stack>
      </Box>

      {/* Section 2 */}
      <Box className="snap-section" sx={{ position: 'relative' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center' }}>
          Did you know it takes <span style={{ color: '#4ac3af' }}>460 gallons of water</span>
          &nbsp;to make a single beef patty?
        </Typography>
        <Box sx={{ position: 'absolute', bottom: 32, right: 32 }}>
        <Button sx= {{ p: 1, width: "100px", backgroundColor: "#4ac3af", borderRadius: "30px"}} variant="contained" onClick={() => setShowMore(true)}>
            Show more
          </Button>
          </Box>
      </Box>

      {/* Section 3 */}
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
