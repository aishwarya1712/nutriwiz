import React, { useState } from 'react';
import { Box, Stack, Typography, Slider, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const PriceComparison = () => {
  const [monthlyMeals, setMonthlyMeals] = useState(14); // Default to 7 meals per week
  const veganMealCost = 22.50;
  const meatMealCost = 42.00;

  const calculateSavings = (meals) => {
    const monthlyVeganCost = meals * veganMealCost;
    const monthlyMeatCost = meals * meatMealCost;
    const savings = monthlyMeatCost - monthlyVeganCost;
    return savings.toFixed(2);
  };

  const comparisonData = [
    { item: 'Daily Calories', vegan: '2100', meat: '2600' },
    { item: 'Daily Protein (grams)', vegan: '92', meat: '140' },
    { item: 'Protein Source', vegan: 'Lentils, Chickpeas, Tofu', meat: 'Chicken, Beef, Pork' },
    { item: 'Produce', vegan: 'Veggies, Fruits, Grains', meat: 'Veggies, Fruits, Grains' },
    { item: 'Dairy Substitute', vegan: 'Almond Milk, Soy Milk', meat: 'Cow Milk' },
    { item: 'Meat Substitute', vegan: 'Seitan, Tempeh', meat: 'Ground Beef' },
    { item: 'Daily Cost', vegan: '$22.50', meat: '$42.00' },
    { item: 'Weekly Cost', vegan: '$157.50', meat: '$294.00' },
    { item: 'Monthly Cost', vegan: '$630.00', meat: '$1176.00' },
  ];

  return (
    <Box className="snap-section">
      <Box sx={{
        maxWidth: '1600px',
        mx: 'auto',
        p: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <Stack spacing={4}>
          <Typography variant="h4" fontWeight="bold" color="#357960" textAlign="center">
            Cost Comparison: Plant-Based vs Meat-Based Diet
          </Typography>

          <Stack direction="row" spacing={4}>
            {/* Left side - Comparison Table */}
            <Box sx={{ flex: 1 }}>
              <TableContainer component={Paper} sx={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <Table>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow 
                        key={row.item}
                        sx={{ 
                          backgroundColor: index % 2 === 0 ? 'rgba(53, 121, 96, 0.05)' : 'white',
                          '&:hover': { backgroundColor: 'rgba(53, 121, 96, 0.1)' }
                        }}
                      >
                        <TableCell sx={{ 
                          fontWeight: 'bold', 
                          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                          fontSize: '1.1rem'
                        }}>
                          {row.item}
                        </TableCell>
                        <TableCell sx={{ 
                          color: '#357960', 
                          textAlign: 'center',
                          fontSize: '1.1rem'
                        }}>
                          {row.vegan}
                        </TableCell>
                        <TableCell sx={{ 
                          color: '#f66277', 
                          textAlign: 'center',
                          fontSize: '1.1rem'
                        }}>
                          {row.meat}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Right side - Interactive Calculator */}
            <Box sx={{ 
              flex: 1,
              p: 3,
              backgroundColor: 'rgba(53, 121, 96, 0.05)',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h5" fontWeight="bold" color="#357960" gutterBottom>
                Calculate Your Savings
              </Typography>
              
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Select number of plant-based days per month:
              </Typography>

              <Slider
                value={monthlyMeals}
                onChange={(_, newValue) => setMonthlyMeals(newValue)}
                min={0}
                max={30}
                step={1}
                marks={[
                  { value: 0, label: '0' },
                  { value: 7, label: '7' },
                  { value: 14, label: '14' },
                  { value: 21, label: '21' },
                  { value: 30, label: '30' }
                ]}
                sx={{
                  my: 4,
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#357960',
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: '#357960',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#357960',
                    opacity: 0.3,
                  },
                }}
              />

              <Box sx={{ 
                mt: 4,
                p: 3,
                backgroundColor: 'rgba(53, 121, 96, 0.1)',
                borderRadius: 2,
                textAlign: 'center'
              }}>
                <Typography variant="h6" color="#357960" gutterBottom>
                  Monthly Savings
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <TrendingDownIcon sx={{ color: '#357960', fontSize: 40 }} />
                  <Typography variant="h3" color="#357960" fontWeight="bold">
                    ${Math.round(calculateSavings(monthlyMeals))}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {monthlyMeals} plant-based meals per month
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default PriceComparison;
