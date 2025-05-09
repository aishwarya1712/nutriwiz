import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { Box, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Slider, IconButton, Button } from '@mui/material'
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
import waterImg from './assets/water_drop.png';
import leafImg from './assets/leaf.png';
import smokeCloud from './assets/smoke_cloud.png';
import PriceComparison from './components/PriceComparison';
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
        bgcolor: '#f0fdfa',
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1623509636544-4cfcb1195b40?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Plant protein sources"
            sx={{
              width: 200,
              height: 200,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#357960">
              Plant-based diets provide more than enough protein
            </Typography>
            
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Protein-Rich Plant Foods:
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
            }}>
              {[
                { category: 'Legumes', items: 'Lentils, Chickpeas' },
                { category: 'Soy Products', items: 'Tofu, Tempeh' },
                { category: 'Whole Grains', items: 'Quinoa, Brown Rice' },
                { category: 'Nuts & Seeds', items: 'Almonds, Chia' },
                { category: 'Vegetables', items: 'Broccoli, Spinach' }
              ].map((item, index) => (
                <Box 
                  key={index}
                  sx={{
                    p: 1,
                    backgroundColor: 'rgba(53, 121, 96, 0.1)',
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(53, 121, 96, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="bold" color="#357960">
                    {item.category}
                  </Typography>
                  <Typography variant="body2">
                    {item.items}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Daily Protein Requirements:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', mb: 1 }}>
              The US recommended daily allowance is just 0.8g per kg of body weight.
              Most Americans exceed this requirement, even on plant-based diets!
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1rem', mb: 1 }}>
              Research shows that protein-rich plant foods are sufficient to achieve full protein adequacy in adults consuming vegetarian/vegan diets. The question of amino acid deficiency has been substantially overstated.
            </Typography>
            
          </Box>
        </Stack>

        <Box sx={{ 
          p: 1, 
          backgroundColor: 'rgba(53, 121, 96, 0.05)',
          borderRadius: 1,
          textAlign: 'center'
        }}>
          <Typography variant="body2" color="text.secondary">
            Sources: <Box 
              component="a" 
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6893534/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#357960',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Nutrients, 2019
            </Box>
            {' • '}
            <Box 
              component="a" 
              href="https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#357960',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Dietary Guidelines for Americans 2020-2025
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Box>)},
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
            "But plant-based diets can't build muscle"
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
        bgcolor: '#f0fdfa',
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Box
            component="img"
            src="https://static01.nyt.com/images/2022/09/01/sports/01streeter-sot-4/01streeter-sot-4-mediumSquareAt3X.jpg"
            alt="Plant-based athletes"
            sx={{
              width: 200,
              height: 200,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#357960">
              Plant protein builds muscle just as effectively
            </Typography>
            
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Elite Athletes on Plant-Based Diets:
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
              mb: 1
            }}>
              {[
                { name: 'Serena Williams', sport: 'Tennis' },
                { name: 'Lewis Hamilton', sport: 'Formula 1' },
                { name: 'Tom Brady', sport: 'NFL' },
                { name: 'Kendrick Farris', sport: 'Olympic Weightlifting' }
              ].map((athlete, index) => (
                <Box 
                  key={index}
                  sx={{
                    p: 1,
                    backgroundColor: 'rgba(53, 121, 96, 0.1)',
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(53, 121, 96, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="bold" color="#357960">
                    {athlete.name}
                  </Typography>
                  <Typography variant="body2">
                    {athlete.sport}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Scientific Evidence:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', mb: 1 }}>
              Research shows that plant protein supplements (like soy) produce equivalent muscle growth and strength gains compared to animal protein when matched for leucine content. The key is adequate total protein intake and proper training, not the protein source.
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1rem', fontStyle: 'italic' }}>
              The key is adequate total protein intake and proper training, not the protein source.
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ 
          p: 1, 
          backgroundColor: 'rgba(53, 121, 96, 0.05)',
          borderRadius: 1,
          textAlign: 'center'
        }}>
          <Typography variant="body2" color="text.secondary">
            Source: <Box 
              component="a" 
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3662288/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#357960',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Journal of the International Society of Sports Nutrition, 2013
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Box>)}
]

function App() {
  const [showMore, setShowMore] = useState(false);
  const [reasons, setReasons] = useState({
    waterFootprint: false,
    landUse: false,
    emissions: false,
    cheaper: false,
    notReally: false
  });
  const section3Ref = useRef(null);

  useEffect(() => {
    if (showMore && section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMore]);

  const snapDown = () =>
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

  const handleReasonChange = (event) => {
    setReasons({
      ...reasons,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    // Implement the submit logic here
    console.log("Submit clicked");
    setReasons({
      waterFootprint: false,
      landUse: false,
      emissions: false,
      cheaper: false,
      notReally: false
    });
  };

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
        className="snap-section"
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
          src={waterImg}
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
            src={leafImg}
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

      <Box
        className="snap-section"
        sx={{
          position: 'relative',        // ← Important for containment
          overflow: 'hidden',          // ← Prevents leaves from spilling out
          height: '100vh',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, textAlign: 'center' }}>
          Let's talk <Box component="span" sx={{ color: '#357960' }}> greenhouse gas emissions</Box>
        </Typography>
        {/* Floating smoke clouds */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Box
            key={i}
            component="img"
            src={smokeCloud}
            alt="smoke"
            sx={{
              position: 'absolute',
              top: `${Math.random() * 80}vh`,
              left: '-200px',
              width: `${300 + Math.random() * 100}px`,
              height: 'auto',
              opacity: 0.3 + Math.random() * 0.4,
              animation: `floatSmoke ${8 + i * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              pointerEvents: 'none',
              zIndex: 1,
              transform: `scale(${0.8 + Math.random() * 0.4})`,
              filter: 'blur(1px)',
              '&:hover': {
                filter: 'blur(2px)',
              },
            }}
          />
        ))}
      </Box>

      <Box className="snap-section">
        <EmissionsRadarChart/>
      </Box>

      <Box className="snap-section">
        <Typography sx={{ fontWeight: 'bold', fontSize: 40, px: 3, textAlign: 'center' }}>
          Every day you eat plant-based adds up to real change.
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center', color: '#357960' }}>
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
        <PriceComparison />
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

      <Box className="snap-section">
        <Typography sx={{ fontWeight: 'bold', fontSize: 48, px: 3, textAlign: 'center', mb: 4 }}>
          Why will you choose plant-based diets?
        </Typography>
        <Box sx={{
          maxWidth: '800px',
          mx: 'auto',
          p: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 4,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}>
          <FormGroup sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3
          }}>
            {[
              { name: 'waterFootprint', label: 'Virtual Water Footprint' },
              { name: 'landUse', label: 'Land Use' },
              { name: 'emissions', label: 'Greenhouse Gas Emissions' },
              { name: 'cheaper', label: "It's cheaper" },
              { name: 'notReally', label: 'Not Sure' }
            ].map((option) => (
              <FormControlLabel
                key={option.name}
                control={
                  <Checkbox 
                    checked={reasons[option.name]}
                    onChange={handleReasonChange}
                    name={option.name}
                    sx={{ 
                      '& .MuiSvgIcon-root': { 
                        fontSize: 32,
                        color: '#357960',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(53, 121, 96, 0.04)',
                      },
                      padding: '8px',
                      borderRadius: '8px',
                    }}
                  />
                }
                label={option.label}
                sx={{ 
                  '& .MuiFormControlLabel-label': { 
                    fontSize: 24,
                    color: '#2c3e50',
                    fontWeight: 500,
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(53, 121, 96, 0.04)',
                    borderRadius: '8px',
                  },
                  padding: '8px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease-in-out',
                }}
              />
            ))}
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 4,
                py: 2,
                px: 4,
                fontSize: '1.25rem',
                fontWeight: 600,
                backgroundColor: '#357960',
                color: 'white',
                borderRadius: '12px',
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(53, 121, 96, 0.2)',
                '&:hover': {
                  backgroundColor: '#2c6350',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(53, 121, 96, 0.3)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Submit Your Choices
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default App