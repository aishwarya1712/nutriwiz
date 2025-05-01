import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { Box, Stack, Typography } from '@mui/material'
import WaterImpactSection from './components/WaterImpactSection';
import ImageMorpher from './components/ImageMorpher';
import CoffeeCupSection from './components/CoffeeCupSection';
import PlantPattyWaterSection from './components/PlantPattyWaterSection';
import heart from './assets/Capa_2.svg';
import LandUseSection from './components/LandUseSection';
import EmissionsRadarChart from './components/Emissions';
import FlashCardCarousel from './components/FlashCardCarousel';
import BurgerComparison from './components/BurgerComparison';
import WeeklyImpactSection from './components/WeeklyImpactSection';

// add more icons and pictures
// rice beans hummus - use pictures or icons.
// make it more visual
// more data, where data is shown with charts, or it can be more narrative
// make it more convincing and engaging with different approach: 1) add more data so thigns can be compared, or 2) add more narrative by adding more visual elements
// mmake sure to add instructions for flipping
// can design the information in the style of the infographic - just add more styling
// use more visual imagery and data
// approach it in a similar way for the expensive
// make the cards a little bigger - even if you just have two 
// then you can have them flippable indivodually
// clearly communicate 
// flip automativally after X seconds
// if you only have two 
// jsut two but dive deep
// ehave two cards indivodia;;y flippable side-by-side, very visual, numbers emphasized
// its lacking some depth at the moment.
// can you dive deep into any one specific thing?
// focus on tying everything together 

// recommendations = starting small => make it interactive
// slider = one day to seven days => based on then user's interaction => 
// just one day a week for a year => do the math => visualize the impact on emissions/land and health
const cards = [
  { front: 
    <Typography align="center" variant="h4" fontWeight={"bold"}>Think plant-based diets lack complete protein?</Typography>, 
    back: <Stack spacing={2}>
    <Typography fontSize={24} align="center" fontWeight={"bold"}>
      Plant-based foods contain all 20 amino acids, including the 9 essential amino acids.
    </Typography>
    <Typography>
      A well-balanced, plant-based diet will provide adequate amounts of essential amino acids and prevent protein deficiency.
      Essential amino acids can be obtained by eating certain combinations of plant-based foods.
      Examples include brown rice with beans, and hummus with whole wheat pita. 
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" fontSize={12}>
      Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6893534/
      https://pmc.ncbi.nlm.nih.gov/articles/PMC3662288/
    </Typography>
    </Stack>},
  { front: <Typography align="center" variant="h4" fontWeight={"bold"}>Think plant-based diets are expensive?</Typography>, 
  back: <Stack spacing={2}>
    <Typography fontSize={24} align="center" fontWeight={"bold"}>
      Plant-based consumption is associated with lower food expenditures compared to meat-based consumption.
    </Typography>
    <Typography>
      Plant-based consumers do not spend more but in fact less than any consumer assessed. It is healthier, more sustainable and cheaper.
    </Typography>
  </Stack> },
  {
    front: <Typography align="center" variant="h4" fontWeight={"bold"}>Another myth about plant-based food</Typography>,
    back: <Stack spacing={2}>
    <Typography fontSize={24} align="center" fontWeight={"bold"}>
      Address the myth
    </Typography>
    <Typography>
      Some description
    </Typography>
    </Stack>
  }
]

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
          <img src={heart} alt="Heart"/>
          <Typography sx={{ fontWeight: 'bold', fontSize: 107 }}>
            nutri
            <Box component="span" sx={{ color: '#357960' }}>
              wiz
            </Box>
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 32 }}>
            Explore the benefits of plant-based eating
          </Typography>
        </Stack>
      </Box>
      <Box className="snap-section">
        <Stack alignItems="center">
          <Typography sx={{ fontWeight: 'bold', fontSize: 32 }}>
            Every bite of the food you eat shapes your health, and the planet's
          </Typography>
          <ImageMorpher />
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
        <CoffeeCupSection />
      </Box>

      <Box className="snap-section">
        <PlantPattyWaterSection />
      </Box>

      <Box className="snap-section">
        <BurgerComparison />
      </Box>

      <Box className="snap-section">
        <Typography sx={{ fontWeight: 'bold', fontSize: 45}}>
          Plant-based food also has a smaller land footprint.
        </Typography>
      </Box>

      <Box className="snap-section">
        <LandUseSection/>
      </Box>

      <Box className="snap-section">
          <Typography sx={{ fontWeight: 'bold', fontSize: 32 }}>
            It doesn't end there.</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 32 }}>
              Plant based food is much kinder to the planet in terms of emissions.
            </Typography>
      </Box>

      <Box className="snap-section">
        <EmissionsRadarChart/>
      </Box>

      <Box className="snap-section">
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center' }}>
          The health benefits of plant-based diets are extraordinary.
        </Typography>
      </Box>

      <Box className="snap-section">
      {/* <FlashCard
        front={<Typography align="center" variant="h4">Think plant-based diets lack complete protein?</Typography>}
        back={
          <Stack>
          <Typography align="center">
            Think again!
          </Typography>
          <Typography align="center">
            Plant-based foods contain all 20 amino acids, including the 9 indispensable amino acids
          </Typography>
          <Typography align="center">
            Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6893534/
          </Typography>
          </Stack>
        }
        width={500}
        height={350}
      /> */}
      <FlashCardCarousel cards={cards} cardWidth={550} cardHeight={400} />
      </Box>

        <Box className="snap-section">
          <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center' }}>
            Ready to see the impact of going plant-based over the course of a year?
          </Typography>
        </Box>
      <Box className="snap-section">
        <WeeklyImpactSection />
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
