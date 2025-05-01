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

const metrics = [
  { name: 'CO₂ (kg/d)', max: 8 },
  { name: 'CH₄ (g/d)',   max: 70 },
  { name: 'N₂O (g/d)',   max: 3 },
]

const dietData = {
  vegans:      [2.16,  4.39,  0.71],
  vegetarians: [3.33, 20.21,  0.98],
  fish:        [3.81, 22.55,  1.09],
  lowMeat:     [4.21, 28.99,  1.29],
  medMeat:     [5.34, 40.88,  1.73],
  highMeat:    [7.28, 65.40,  2.62],
}

const groups = [
  {
    title:  'Vegan & Vegetarian',
    series: [
      { label: 'Vegans',      data: dietData.vegans,      fillArea: true },
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
      { label: 'Low meat-eaters',    data: dietData.lowMeat,  fillArea: true },
      { label: 'Medium meat-eaters', data: dietData.medMeat,  fillArea: true },
      { label: 'High meat-eaters',   data: dietData.highMeat, fillArea: true },
    ],
    colors: ['#ef5350', '#e53935', '#b71c1c'],
  },
]

export default function GroupedRadarCharts() {
  const theme   = useTheme()
  const isSmUp  = useMediaQuery(theme.breakpoints.up('sm'))
  const isMdUp  = useMediaQuery(theme.breakpoints.up('md'))

  const chartHeight = isSmUp ? 300 : 240
  const titleVariant = isMdUp ? 'h4' : isSmUp ? 'h5' : 'h6'

  return (
    <Box
      className="snap-section"
      sx={{
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        py:            { xs: 3, sm: 4 },
        px:            { xs: 2, md: 4 },
        boxSizing:     'border-box',
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
          p:        2,
          width:    '100%',
          maxWidth: 1200,
          boxSizing:'border-box',
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
                    position:  { vertical: 'top', horizontal: 'center' },
                    direction: 'row',
                    sx:        { mb: 1 },
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
        <Paper sx={{ p: 2, flex: 1, background: "transparent", border: "1px solid #E95322", borderRadius: "10px" }} elevation={0}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Vegans
          </Typography>
          <Typography>
            Emit the lowest GHGs: only 2.16 kg CO₂, 4.39 g CH₄, and 0.71 g N₂O per day.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, flex: 1, background: "transparent", border: "1px solid #E95322", borderRadius: "10px" }} elevation={0}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            High Meat-Eaters
          </Typography>
          <Typography>
            Produce up to 7.28 kg CO₂ and 65.40 g CH₄ daily—over 3x more methane than vegans.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, flex: 1, background: "transparent", border: "1px solid #E95322", borderRadius: "10px" }} elevation={0}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Methane Spotlight
          </Typography>
          <Typography>
            CH₄ is a powerful short-lived gas; high-meat diets emit ~15x more CH₄ than vegan diets.
          </Typography>
        </Paper>
      </Stack>
    </Box>
  )
}