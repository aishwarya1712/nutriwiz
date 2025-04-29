import React from 'react'
import { Box, Typography, Stack, Paper } from '@mui/material'
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart'

export default function EmissionsRadarChartWithInfo() {
  const series = [
    { label: 'Vegans', data: [2.16,  4.39,  0.71 ] },
    { label: 'Vegetarians', data: [3.33, 20.21,  0.98 ] },
    { label: 'Fish-eaters', data: [3.81, 22.55,  1.09 ] },
    { label: 'Low meat-eaters', data: [4.21, 28.99,  1.29 ] },
    { label: 'Medium meat-eaters', data: [5.34, 40.88,  1.73 ] },
    { label: 'High meat-eaters', data: [7.28, 65.40,  2.62 ] },
  ];

  const metrics = [
    { name: 'CO₂ (kg/d)', max: 8 },
    { name: 'CH₄ (g/d)', max: 70 },
    { name: 'N₂O (g/d)', max: 3 },
  ];

  return (
    <Box sx={{ width: '100%', mx: 'auto', px: 2, py: 4 }}>
      <Typography fontSize={32} fontWeight={"bold"} align="center" gutterBottom>
      The more animal products in your diet, the higher your daily greenhouse-gas emissions across CO₂, CH₄, and N₂O.
      </Typography>

      <RadarChart
        height={400}
        series={series}
        radar={{ metrics }}
        slotProps={{
          legend: {
            position: { vertical: 'top', horizontal: 'center' },
            direction: 'row',
            sx: { mb: 0 }
          }
        }}
      />
      <Typography fontSize={20} fontWeight={"bold"} align="center" gutterBottom>
      Daily GHG Emissions by Diet Group
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
        Units: CO₂ in kg per day (kg d⁻¹); CH₄ and N₂O in g per day (g d⁻¹)
      </Typography>

      <Stack justifyContent={"center"} sx={{px: 20}} direction={{ xs: 'column', md: 'row' }} spacing={2} mt={4}>
        <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            Vegans
          </Typography>
          <Typography>
            Emit the lowest GHGs: only 2.16 kg CO₂, 4.39 g CH₄, and 0.71 g N₂O per day.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            High Meat-Eaters
          </Typography>
          <Typography>
            Produce up to 7.28 kg CO₂ and 65.40 g CH₄ daily—over 3x more methane than vegans.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            Methane Spotlight
          </Typography>
          <Typography>
            CH₄ is a powerful short-lived gas; high meat diets emit ~15x more CH₄ than vegan diets.
          </Typography>
        </Paper>
      </Stack>
    </Box>
  )
}
