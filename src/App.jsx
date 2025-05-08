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
import BurgerComparison from './components/BurgerComparison';
import WeeklyImpactSection from './components/WeeklyImpactSection';
import VirtualWaterSection from './components/VirtualWaterSection';
import FlashCard from './components/FlashCard';

// https://www.downstate.edu/about/community-impact/plant-based/_documents/myths-facts.pdf

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
  { front: (
    <>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Typography align="center" variant="h4" fontWeight="bold">
            "But plant-based diets lack protein"
          </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: '', justifyContent: 'center', width: "100%", borderRadius: "0px 0px 8px 8px", backgroundColor: "#357960", height: "50px"}}>
          <Typography fontWeight={500} fontSize={"20px"} color={"#fff"} sx={{ mt: 'auto'}} align="center">Click the card to flip 👆</Typography>
        </Box>
    </>
  ), 
    back: ( <Box
      sx={{
        height: '100%',
        p: 3,
        bgcolor: '#f0fdfa',       // very light teal background
        borderRadius: 2,
        overflowY: 'auto'
      }}
    >
      <Stack spacing={4}>
        {/* Myth/Fact #1 */}
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1623509636544-4cfcb1195b40?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Plant protein sources"
            sx={{
              width: 200,
              height: 200,
              objectFit: 'cover',
              borderRadius: 1
            }}
          />
          <Box>
            <Typography fontWeight="bold" gutterBottom>
              It's possible to get enough protein on a plant-based diet
            </Typography>
            <Typography variant="body2">
              The US recommended daily allowance for protein is just 0.8 grams per kg of body weight.
              Contrary to the hype that everyone needs more protein, most people in the U.S. meet or exceed their needs. 
              Protein appears in nuts, beans, legumes, soy, whole grains—and even greens, potatoes, mushrooms and squash!. 
              Fruits contain small amounts, too.
              A varied whole-food plant diet easily covers your protein needs.
              Source: https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials
            </Typography>
          </Box>
        </Stack>

        {/* Myth/Fact #2 */}
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Box
            component="img"
            src="https://static01.nyt.com/images/2022/09/01/sports/01streeter-sot-4/01streeter-sot-4-mediumSquareAt3X.jpg"
            alt="Plant-based athletes"
            sx={{
              width: 150,
              height: 200,
              objectFit: 'cover',
              borderRadius: 1
            }}
          />
          <Box>
            <Typography fontWeight="bold" gutterBottom>
              Plant protein is effective, even for athletes
            </Typography>
            <Typography variant="body2">
              Countless plant-based bodybuilders and athletes (Serena and Venus Williams, Lewis Hamilton, Tom Brady, Kendrick Farris) thrive on plant protein.  
              Reviews comparing soy vs. animal supplements show equivalent strength gains—so plants build muscle just fine.
            </Typography>
          </Box>
        </Stack>

        <Typography
          variant="caption"
          color="textSecondary"
          align="center"
        >
          Sources: PMC 6893534, PMC 3662288
        </Typography>
      </Stack>
    </Box>)},
  { front:  <>
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Typography align="center" variant="h4" fontWeight="bold">
        "But plant-based diets are so expensive"
      </Typography>
    </Box>
    <Box sx={{display: 'flex', alignItems: '', justifyContent: 'center', width: "100%", borderRadius: "0px 0px 8px 8px", backgroundColor: "#357960", height: "50px"}}>
      <Typography fontWeight={500} fontSize={"20px"} color={"#fff"} sx={{ mt: 'auto'}} align="center">Click the card to flip 👆</Typography>
    </Box>
</>, 
  back: ( <Box
    sx={{
      height: '100%',
      p: 3,
      bgcolor: '#f0fdfa',       // very light teal background
      borderRadius: 2,
      overflowY: 'auto'
    }}
  >
    <Stack spacing={4}>
      {/* Myth/Fact #1 */}
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1656049471454-ff3c59812741?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Plant protein sources"
          sx={{
            width: 200,
            height: 200,
            objectFit: 'cover',
            borderRadius: 1
          }}
        />
        <Box>
          <Typography fontWeight="bold" gutterBottom>
            Plant-based diet can actually save you money 
          </Typography>
          <Typography variant="body2">
          A 2015 study from the Journal of Hunger & Environmental Nutrition suggests that a plant-based diet could lead to savings of nearly $750 a year for an average cost of a 2,000-calorie diet following the federal MyPlate nutrition guidelines. 

          Plant-based foods such as beans, grains, sweet potatoes, lentils, and fruits are found in most local
          supermarkets at relatively low cost and covered under SNAP benefits (Supplemental Nutrition Assistance
          Program). 
          </Typography>
        </Box>
      </Stack>

      {/* Myth/Fact #2 */}
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          component="img"
          src="https://thumbs.dreamstime.com/b/saving-money-cartoon-icon-cash-bills-vector-illustration-graphic-design-143356787.jpg"
          alt="Plant-based athletes"
          sx={{
            width: 135,
            height: 200,
            objectFit: 'cover',
            borderRadius: 1
          }}
        />
        <Box>
          <Typography fontWeight="bold" gutterBottom>
          Eating Plant-Based Costs 33% Less
          </Typography>
          <Typography variant="body2">
            Whole-food vegan proteins like dried beans cost as little as $1.50/lb compared to $4-$20/lb for meats, and even processed plant alternatives (e.g., tofu, tempeh) deliver comparable protein at lower cost, while Oxford research suggests that fully vegan eating can cut grocery bills by up to 33% (flexitarian -14%, pescatarian +2%) in high-income countries 
          </Typography>
        </Box>
      </Stack>
      
      {/* (optional) Sources at bottom */}
      <Typography
        variant="caption"
        color="textSecondary"
        align="center"
      >
        Sources: PMC 6893534, PMC 3662288
      </Typography>
    </Stack>
  </Box>)}
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

      <Box
        className="snap-section water-fill"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: 48,
            textAlign: 'center',
            zIndex: 2,
            position: 'relative',
          }}
        >
          Let's talk <Box component="span" sx={{ color: '#0077b6' }}>water</Box>
        </Typography>
        
        {/* SVG Water Wave */}
        {/* BACK WAVE */}
      <Box
        component="svg"
        viewBox="0 0 1440 320"
        sx={{
          position: 'absolute',
          bottom: -20,
          left: 0,
          width: '100%',
          height: '50vh',
          zIndex: 1,
          opacity: 0.4,
          animation: 'waveBack 10s ease-in-out infinite',
        }}
      >
        <path
          fill="#4dd0e1"
          d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,192C672,181,768,139,864,133.3C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Box>

      {/* FRONT WAVE */}
      <Box
        component="svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '30vh',   
          zIndex: 2,
          animation: 'waveFront 6s ease-in-out infinite',
        }}
      >
        <path
          fill="#00bcd4"
          fillOpacity="0.5"
          d="M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,218.7C672,192,768,128,864,112C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L0,320Z"
        />
      </Box>
      {Array.from({ length: 40 }).map((_, i) => (
        <Box
          key={i}
          component="img"
          src="/src/assets/water_drop.png" 
          className="rising-drop"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: `${Math.random() * 100}%`,
            width: 60,
            height: 60,
            animation: `riseDrop ${4 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.9,
            pointerEvents: 'none',
          }}
        />
      ))}
      </Box>

      <Box className="snap-section">
        <VirtualWaterSection />
      </Box>

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

      <Box
        className="snap-section"
        sx={{
          position: 'relative',        // ← Important for containment
          overflow: 'hidden',          // ← Prevents leaves from spilling out
          height: '100vh',
        }}
      >
        <Stack alignItems="center" justifyContent="center" sx={{ height: '80%' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 48, textAlign: 'center' }}>
            Let's talk <Box component="span" sx={{ color: '#6b311b' }}>land</Box>
          </Typography>
        </Stack>

        {/* Falling leaves inside this box only */}
        {Array.from({ length: 40 }).map((_, i) => (
          <Box
            key={i}
            component="img"
            src="/src/assets/leaf.png" // replace with correct path
            className="falling-leaf"
            sx={{
              position: 'absolute',
              top: 0,
              left: `${Math.random() * 100}%`,
              width: 80,
              height: 80,
              animation: `fallLeaf ${4 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.8,
              pointerEvents: 'none',
            }}
          />
        ))}
      </Box>

      <Box className="snap-section">
        <LandUseSection/>
      </Box>

      <Box className="snap-section">
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, textAlign: 'center' }}>
          Let's talk <Box component="span" sx={{ color: '#f66277' }}> greenhouse gas emissions</Box>
        </Typography>
      </Box>

      <Box className="snap-section">
        <EmissionsRadarChart/>
      </Box>

      <Box className="snap-section">
        <Typography sx={{ fontWeight: 'bold', fontSize: 40, px: 3, textAlign: 'center' }}>
          Every day you eat plant-based adds up to real change.
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center', color: '#f66277' }}>
          Ready to see the impact of going plant-based over the course of a year?
        </Typography>
      </Box>
      
      <Box className="snap-section">
        <WeeklyImpactSection />
      </Box>
      <Box className="snap-section">
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center' }}>
          The health benefits of plant-based diets are extraordinary.
        </Typography>
      </Box>

      <Box className="snap-section">
        <Stack direction="row" spacing={2}>
        {
          cards.map((card, key) => {
            return (<FlashCard key={key} front={card.front} back={card.back} height={600} width={700}/>)
          })
        }
        </Stack>
      </Box>

    </Box>
    </>
  )
}

export default App
