import React from 'react'
import {
  Box,
  Stack,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const metrics = [
  { name: 'CO₂ (kg/d)', max: 8 },
  { name: 'CH₄ (g/d)', max: 70 },
  { name: 'N₂O (g/d)', max: 3 },
]

const dietData = {
  vegans: [2.16,  4.39,  0.71],
  vegetarians: [3.33, 20.21,  0.98],
  fish: [3.81, 22.55,  1.09],
  lowMeat: [4.21, 28.99,  1.29],
  medMeat: [5.34, 40.88,  1.73],
  highMeat: [7.28, 65.40,  2.62],
}

const groups = [
  {
    title:  'Vegan & Vegetarian',
    series: [
      { label: 'Vegans', data: dietData.vegans, fillArea: true },
      { label: 'Vegetarians', data: dietData.vegetarians, fillArea: true },
    ],
    colors: ['#2e7d32', '#66bb6a'],
  },
  {
    title:  'Pescatarians (Fish-eaters)',
    series: [
      { label: 'Fish-eaters', data: dietData.fish, fillArea: true },
    ],
    colors: ['#1976d2'],
  },
  {
    title:  'Meat-Eaters',
    series: [
      { label: 'Low meat-eaters', data: dietData.lowMeat, fillArea: true },
      { label: 'Medium meat-eaters', data: dietData.medMeat, fillArea: true },
      { label: 'High meat-eaters', data: dietData.highMeat, fillArea: true },
    ],
    colors: ['#ef5350', '#e53935', '#b71c1c'],
  },
]

export default function GroupedRadarCharts() {
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  const chartHeight = isSmUp ? 300 : 240
  const titleVariant = isMdUp ? 'h4' : isSmUp ? 'h5' : 'h6'

  return (
    <Box
      className="snap-section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 3, sm: 4 },
        px: { xs: 2, md: 4 },
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant={titleVariant}
        align="center"
        fontWeight="bold"
        gutterBottom
      >
        Plant-based diets are associated with the lowest release of major greenhouse gases — CO₂, CH₄, and N₂O.
      </Typography>

      <Paper
        sx={{
          p: 2,
          width: '100%',
          maxWidth: 1200,
          boxSizing: 'border-box',
        }}
        elevation={2}
      >
        <Grid
          container
          spacing={isSmUp ? 4 : 2}
          justifyContent="center"
        >
          {groups.map(({ title, series, colors }) => (
            <Grid key={title}>
              <Typography
                variant={isSmUp ? 'h6' : 'subtitle1'}
                align="center"
                fontWeight="bold"
                gutterBottom
              >
                {title}
              </Typography>
              <RadarChart
                shape={"circle"}
                height={chartHeight}
                series={series}
                radar={{ metrics }}
                colors={colors}
                highlight="series"
                slotProps={{
                  legend: {
                    position: { vertical: 'top', horizontal: 'center' },
                    direction: 'row',
                    sx: { mb: 1 },
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Typography
          variant={isSmUp ? 'h6' : 'subtitle1'}
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mt: 3 }}
        >
          Daily GHG Emissions by Diet Category
        </Typography>
        <Typography
          variant={isSmUp ? 'subtitle1' : 'caption'}
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Units: CO₂ in kg per day (kg/d); CH₄ and N₂O in g per day (g/d)
        </Typography>
      </Paper>


      <Stack
        justifyContent="center"
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ width: '100%', maxWidth: 1200, mt: 4 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            flex: 1,
            border: '1px solid #357960',
            borderRadius: '10px',
            background: 'rgba(53, 121, 96, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EnergySavingsLeafIcon sx={{ color: '#357960' }} />
            <Typography variant="h6" fontWeight="bold">
              Vegans
            </Typography>
          </Box>
          <Typography variant="body2">
            Emit the lowest amount of greenhouse gases.
          </Typography>
        </Paper>

  <Paper
    elevation={0}
    sx={{
      p: 3,
      flex: 1,
      border: '1px solid #d32f2f',
      borderRadius: '10px',
      background: 'rgba(211, 47, 47, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <FastfoodIcon sx={{ color: '#d32f2f' }} />
      <Typography variant="h6" fontWeight="bold">
        High Meat-Eaters
      </Typography>
    </Box>
    <Typography variant="body2">
      Produce up to <strong>3x</strong> more greenhouse gases than vegans.
    </Typography>
  </Paper>

  <Paper
    elevation={0}
    sx={{
      p: 3,
      flex: 1,
      border: '1px solid #f9a825',
      borderRadius: '10px',
      background: 'rgba(249, 168, 37, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LightbulbIcon sx={{ color: '#f9a825' }} />
      <Typography variant="h6" fontWeight="bold">
        Why This Matters
      </Typography>
    </Box>
    <Typography variant="body2">
      Food production drives ~26 % of global emissions. Swapping even a few meals
      for plant-based options trims your climate footprint and eases demand for
      resource-intensive livestock.
    </Typography>
  </Paper>
</Stack>
    </Box>
  )
}