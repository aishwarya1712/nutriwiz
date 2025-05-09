import React, { useState } from 'react'
import {
  Box,
  Typography,
  Slider,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const veganDaily = { land: 4.37, CO2: 2.16, CH4: 4.39, N2O: 0.71, water: 6.6 }
const meatDaily  = { land: 16.78, CO2: 5.61, CH4: 45.09, N2O: 1.88, water: 13.2 }

const unitLabels = {
  'Land use': 'm²/yr',
  'Virtual Water': '~100 gal/yr',
  CO2: 'kg/yr',
  CH4: 'g/yr',
  N2O: 'g/yr',
}

export default function WeeklyImpactSection() {
  const [plantDays, setPlantDays]  = useState(0)
  const [hasInteracted, setInteracted] = useState(false)

  const theme  = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

  const handleChange = (_, val) => {
    setPlantDays(val)
    if (!hasInteracted) setInteracted(true)
  }

  const weeksPerYear = 365 / 7
  const daysPlant = plantDays * weeksPerYear
  const daysMeat = (7 - plantDays) * weeksPerYear

  const baseline = {
    land: meatDaily.land * 365,
    CO2 : meatDaily.CO2  * 365,
    CH4 : meatDaily.CH4  * 365,
    N2O : meatDaily.N2O  * 365,
    water: meatDaily.water * 365,
  }

  const scenario = {
    land: veganDaily.land * daysPlant + meatDaily.land * daysMeat,
    CO2 : veganDaily.CO2  * daysPlant + meatDaily.CO2  * daysMeat,
    CH4 : veganDaily.CH4  * daysPlant + meatDaily.CH4  * daysMeat,
    N2O : veganDaily.N2O  * daysPlant + meatDaily.N2O  * daysMeat,
    water: veganDaily.water * daysPlant + meatDaily.water * daysMeat,
  }

  const pct = m => ((baseline[m] - scenario[m]) / baseline[m]) * 100

  const data = [
    { metric: 'Land use', baseline: baseline.land, you: scenario.land, unit: unitLabels['Land use'] },
    { metric: 'CO2', baseline: baseline.CO2,  you: scenario.CO2,  unit: unitLabels.CO2 },
    { metric: 'CH4', baseline: baseline.CH4,  you: scenario.CH4,  unit: unitLabels.CH4 },
    { metric: 'N2O', baseline: baseline.N2O,  you: scenario.N2O,  unit: unitLabels.N2O },
    { metric: 'Virtual Water', baseline: baseline.water,  you: scenario.water,  unit: unitLabels['Virtual Water'] },
  ]

  const renderLabel = ({ x, y, width, value }) => (
    <text
      x={x + width / 2}
      y={y - 6}
      fill="#333"
      fontSize="12"
      textAnchor="middle"
    >
      {Number(value).toLocaleString(undefined, { maximumFractionDigits: 0 })}
    </text>
  )

  const revealStyle = hasInteracted
    ? { opacity: 1, visibility: 'visible', transition: 'opacity .4s ease' }
    : { opacity: 0, visibility: 'hidden', pointerEvents: 'none' }

  return (
    <Box
      className="snap-section"
      sx={{
        px: 2, py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography fontSize={28} align="center" sx={{ maxWidth: 700, mb: 3 }} fontWeight={"bold"}>
        1.&nbsp;Roll the slider to pick your plant-based diet days per week.<br/>
      </Typography>

      <Box sx={{ width: '100%', maxWidth: 600, mb: 3 }}>
        <Typography 
          fontSize={24} 
          gutterBottom 
          sx={{ 
            color: '#357960',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          How many plant-based days per week? 
          <Box 
            component="span" 
            sx={{ 
              color: '#357960',
              backgroundColor: '#4ac3af66',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              minWidth: 60,
              textAlign: 'center'
            }}
          >
            <strong>{plantDays}</strong>
          </Box>
        </Typography>
        <Slider
          value={plantDays}
          onChange={handleChange}
          min={0}
          max={7}
          step={1}
          marks={[
            { value: 0, label: '0' },
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' }
          ]}
          sx={{
            '& .MuiSlider-thumb': {
              width: 16,
              height: 16,
              backgroundColor: '#357960',
              border: '1px solid white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.2)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              },
              '&.Mui-active': {
                transform: 'scale(1.3)',
                boxShadow: '0 3px 6px rgba(0,0,0,0.4)'
              }
            },
            '& .MuiSlider-track': {
              backgroundColor: '#357960',
              height: 8,
              borderRadius: 4
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#f66277',
              height: 8,
              borderRadius: 4,
              opacity: 0.3
            },
            '& .MuiSlider-mark': {
              backgroundColor: '#357960',
              width: 2,
              height: 8,
              borderRadius: 1,
              '&.MuiSlider-markActive': {
                backgroundColor: '#357960'
              }
            },
            '& .MuiSlider-markLabel': {
              color: '#357960',
              fontSize: '0.875rem',
              fontWeight: 500,
              top: 20
            }
          }}
        />
      </Box>

      <Typography fontSize={24} align="center" sx={{ maxWidth: 900, mb: 3 }}  fontWeight={"bold"}>
        2.&nbsp;Compare how much land, virtual water, CO₂, CH₄ &amp; N₂O you use, versus a 100 % meat diet.
      </Typography>
      <Paper
        elevation={2}
        sx={{
          p: 1,
          mb: 3,
          textAlign: 'center',
          width: '100%',
          maxWidth: 600,
          ...revealStyle,
        }}
      >
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            With <strong>{plantDays}/7</strong> plant-based days you’ll reduce annual:
          </Typography>
          <Typography component="li" variant="body1">
            • <strong>Land use</strong> by <strong>{pct('land').toFixed(0)} %</strong>
          </Typography>
          <Typography component="li" variant="body1">
            • <strong>CO₂</strong> by <strong>{pct('CO2').toFixed(0)} %</strong>
          </Typography>
          <Typography component="li" variant="body1">
            • <strong>CH₄</strong> by <strong>{pct('CH4').toFixed(0)} %</strong>
          </Typography>
          <Typography component="li" variant="body1">
            • <strong>N₂O</strong> by <strong>{pct('N2O').toFixed(0)} %</strong>
          </Typography>
          <Typography component="li" variant="body1">
            • <strong>Virtual Water</strong> by <strong>{pct('water').toFixed(0)} %</strong>
          </Typography>
        </Box>
      </Paper>

      <Box
        sx={{
          width: '100%',
          height: 400,
          maxWidth: 1000,
          ...revealStyle,
        }}
      >
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, bottom: 10, left: 10 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="metric"
              tickFormatter={v => `${v} (${unitLabels[v]})`}
              interval={0}
              angle={-15}
              textAnchor="end"
              height={60}
            />
            <YAxis hide />
            <Tooltip
              formatter={(val, _n, entry) =>
                `${val.toLocaleString(undefined, { maximumFractionDigits: 0 })} ${entry.payload.unit}`
              }
            />
            <Legend verticalAlign="top" />
            <Bar
              dataKey="baseline"
              name="All meat-eater"
              fill="#df264e"
              label={renderLabel}
            />
            <Bar
              dataKey="you"
              name={`${plantDays}/7 days a week plan`}
              fill="#357960"
              label={renderLabel}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
