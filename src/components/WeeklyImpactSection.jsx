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

const veganDaily = { land: 4.37, CO2: 2.16, CH4: 4.39, N2O: 0.71 }
const meatDaily = { land: 16.78, CO2: 5.61, CH4: 45.09, N2O: 1.88 }

const unitLabels = {
  'Land use': 'm²/yr',
  'CO2': 'kg/yr',
  'CH4': 'g/yr',
  'N2O': 'g/yr',
}

export default function WeeklyImpactSection() {
  const [plantDays, setPlantDays] = useState(0)
  const theme   = useTheme()
  const isSmUp  = useMediaQuery(theme.breakpoints.up('sm'))

  const handleChange = (_, val) => setPlantDays(val)

  const weeksPerYear = 365 / 7
  const daysPlant = plantDays * weeksPerYear
  const daysMeat = (7 - plantDays) * weeksPerYear

  const baseline = {
    land: meatDaily.land * 365,
    CO2: meatDaily.CO2 * 365,
    CH4: meatDaily.CH4 * 365,
    N2O: meatDaily.N2O * 365,
  }

  const scenario = {
    land: veganDaily.land * daysPlant + meatDaily.land * daysMeat,
    CO2: veganDaily.CO2 * daysPlant + meatDaily.CO2 * daysMeat,
    CH4: veganDaily.CH4 * daysPlant + meatDaily.CH4 * daysMeat,
    N2O: veganDaily.N2O * daysPlant + meatDaily.N2O * daysMeat,
  }

  
  const pct = metric =>
    // helper to compute percent reduction
    ((baseline[metric] - scenario[metric]) / baseline[metric]) * 100

  const data = [
    { metric: 'Land use', baseline: baseline.land, you: scenario.land, unit: unitLabels['Land use'] },
    { metric: 'CO2', baseline: baseline.CO2, you: scenario.CO2, unit: unitLabels['CO2'] },
    { metric: 'CH4', baseline: baseline.CH4, you: scenario.CH4, unit: unitLabels['CH4'] },
    { metric: 'N2O', baseline: baseline.N2O, you: scenario.N2O, unit: unitLabels['N2O'] },
  ]

  const renderLabel = ({ x, y, width, value }) => {
    const txt = Number(value).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })
    return (
      <text
        x={x + width / 2}
        y={y - 6}
        fill="#333"
        fontSize="12"
        textAnchor="middle"
      >
        {txt}
      </text>
    )
  }

  return (
    <Box
      className="snap-section"
      sx={{
        px: 2,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant={isSmUp ? 'h4' : 'h5'}
        fontWeight="bold"
        align="center"
        gutterBottom
      >
        Every plant-based day adds up to real change.
      </Typography>

      <Typography
        fontSize={20}
        align="center"
        sx={{ maxWidth: 700, mb: 3 }}
      >
        1. Roll the slider to pick your plant-based days per week.<br/>
        2. See how much land, CO₂, CH₄ &amp; N₂O you save over a year&nbsp;-&nbsp;versus a 100% meat diet.
      </Typography>

      <Paper
        elevation={2}
        sx={{
        p: 1,
        mb: 3,
        textAlign: 'center',
        width: '100%',
        maxWidth: 600,
        }}
    >
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, textAlign: 'center' }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            With <strong>{plantDays}/7</strong> plant-based days you'll reduce annual:
            </Typography>
            <Typography component="li" variant="body1">
            • <strong>Land use</strong> by <strong>{pct('land').toFixed(0)}%</strong>
            </Typography>
            <Typography component="li" variant="body1">
            • <strong>CO₂</strong> by <strong>{pct('CO2').toFixed(0)}%</strong>
            </Typography>
            <Typography component="li" variant="body1">
            • <strong>CH₄</strong> by <strong>{pct('CH4').toFixed(0)}%</strong>
            </Typography>
            <Typography component="li" variant="body1">
            • <strong>N₂O</strong> by <strong>{pct('N2O').toFixed(0)}%</strong>
            </Typography>
        </Box>
    </Paper>

      <Box sx={{ width: '100%', maxWidth: 600, mb: 4 }}>
        <Typography gutterBottom>
          How many plant-based days per week?&nbsp;<strong>{plantDays}</strong>
        </Typography>
        <Slider
          value={plantDays}
          onChange={handleChange}
          min={0}
          max={7}
          step={1}
          marks
        />
      </Box>

      <Box sx={{ width: '100%', height: 600, maxWidth: 700 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, bottom: 60, left: 10 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="metric"
              tickFormatter={val => `${val} (${unitLabels[val]})`}
              interval={0}
              angle={-30}
              textAnchor="end"
              height={60}
            />

            <YAxis hide />

            <Tooltip
              formatter={(val, _, entry) => {
                   const formatted = val.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })
                    // entry.payload.unit is now defined
                    return `${formatted} ${entry.payload.unit}`
                  }}
            />

            <Legend verticalAlign="top" />

            <Bar
              dataKey="baseline"
              name="All meat-eater"
              fill="#ef5350"
              label={renderLabel}
            />

            <Bar
              dataKey="you"
              name="Your plan"
              fill="#66bb6a"
              label={renderLabel}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
