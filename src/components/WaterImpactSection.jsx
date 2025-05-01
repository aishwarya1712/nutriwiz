import { useState, useRef, useEffect } from 'react';
import {
  Box, Typography, IconButton
} from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { motion, useAnimation } from 'framer-motion';
import confetti from 'canvas-confetti';

const TRUE_GAL = 400;
const TANK_H = 300;
const TANK_W = 140;

export default function WaterImpactSection({ onNext }) {
  const [filling, setFilling] = useState(false);
  const [gallons, setGallons] = useState(0);
  const [done, setDone] = useState(false);
  const [guess, setGuess] = useState(null)
  const controls = useAnimation();
  const intervalRef = useRef(null);

  useEffect(() => {
    if(!filling){
      if(gallons > 0){
        if(gallons === TRUE_GAL){
          setGuess(true)
        } else {
          setGuess(false)
        }
      }
    } else {
      setGuess(null)
    }
  }, [filling])

  const toggleFill = async () => {
    if (done) return onNext?.();

    if (!filling) {
      setFilling(true);
      controls.start({ rotate: 360, transition: { repeat: Infinity, ease: 'linear', duration: 2 } });

      intervalRef.current = setInterval(() => {
        setGallons((g) => {
          if (g >= TRUE_GAL) {
            clearInterval(intervalRef.current);
            setDone(true);
            setFilling(false);
            controls.stop();
            confetti({ particleCount: 120, spread: 70, origin: { y: 0.4 } });
            return TRUE_GAL;
          }
          return g + 10;
        });
      }, 80);
    } else {
      clearInterval(intervalRef.current);
      controls.stop();
      setFilling(false);
    }
  };

  const pct = gallons / TRUE_GAL;
  const waveY = TANK_H * (1 - pct);

  /* ------------ bubble generator ------------ */
  const bubbles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <Box
      className="snap-section"
      sx={{
        position: 'relative',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        px: 2,
      }}
    >
      <Typography variant="h4" fontWeight={700} sx={{fontSize: 50}}>
       Can you guess the amount of virtual water it takes to make&nbsp;
        <Box component="span">one beef patty?</Box>
      </Typography>

      <Typography variant="h3">{gallons}&nbsp;gal</Typography>
      <Typography variant="subtitle1" color={guess === null ? "textSecondary" : (guess === false ? "tomato": "green")}>
        {guess === null ? "Make a guess!" : (guess === false ? "Your guess is incorrect - try again!": "Your guess is correct!")}
      </Typography>

      {/* ------- tank graphic ------- */}
      <Box sx={{ position: 'relative', width: TANK_W, height: TANK_H }}>
        {/* glass outline */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            border: guess === null ? "4px solid #4ac3af55" : (guess === false ? "4px solid tomato": "4px solid #4ac3af55"),
            borderRadius: TANK_W / 2,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(3px)',
          }}
        />

        {/* animated water (wave SVG used as mask) */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: TANK_H,
            overflow: 'hidden',
            borderRadius: `${TANK_W / 2}px`,
            border: guess === null ? "" : (guess === false ? "4px solid tomato": "")
          }}
        >
          {/* blue rect slides up */}
          <motion.div
            style={{ width: '100%', height: '100%', background: '#4ac3af' }}
            animate={{ y: waveY }}
            initial={false}
            transition={{ ease: 'linear', duration: 0.5 }}
          />
          <motion.img
            src="/wave.svg"
            alt=""
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
            animate={{ y: waveY - 10 }}
            initial={false}
            transition={{ ease: 'linear', duration: 0.5 }}
          />
        </motion.div>

        {/* bubbles */}
        {bubbles.map((b) => (
          <motion.div
            key={b}
            style={{
              position: 'absolute',
              bottom: 0,
              left: `${20 + b * 10}%`,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#b2f5f0',
              opacity: 0.8,
            }}
            animate={{
              y: [-5, -TANK_H + 20],
              scale: [0.2, 1],
              opacity: [0.8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              delay: b * 0.4,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* burger patty */}
        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            translateX: '-50%',
            color: '#8B4513',
          }}
          animate={{
            y: [waveY - 60, waveY - 56, waveY - 60], // gentle bob
          }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <LunchDiningIcon sx={{ fontSize: 120 }} />
        </motion.div>
      </Box>

      {/* ------- faucet knob controller ------- */}
      <IconButton
        onClick={toggleFill}
        sx={{
          border: '2px solid #4ac3af',
          '&:hover': { bgcolor: '#4ac3af22' },
        }}
      >
        {/* <motion.div animate={controls}> */}
          {filling
    ? <PauseCircleFilledIcon sx={{ color: '#4ac3af', fontSize: 36 }} />
    : <PlayCircleFilledIcon  sx={{ color: '#4ac3af', fontSize: 36 }} />
  }
        {/* </motion.div> */}
      </IconButton>
      <Typography variant="body2">
        Click the icon to&nbsp;
        {done ? 'continue ↓' : filling ? 'pause' : 'start'}&nbsp;the flow of water
      </Typography>


      {/* ------- scroll hint ------- */}
      {done && (
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onNext}
          onKeyDown={(e) => e.key === 'Enter' && onNext?.()}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 28,
            color: '#4ac3af',
            cursor: 'pointer',
          }}
        >
          ⌄
        </motion.div>
      )}
      
    </Box>
  );
}
