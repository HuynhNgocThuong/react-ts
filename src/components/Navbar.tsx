import {
  AppBar,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: 'white',
      borderBottom: '1px solid white',
    },
  })
);
const Navbar = () => {
  // Contexts
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  // Styles
  const classes = useStyles();
  // States
  const [position, setPosition] = useState<string>('Fullstack developer');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timerId);
  }, []);
  const onPositionChange = (
    event: ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);

  return (
    <AppBar position='static' color={theme}>
      <Toolbar>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          alignItems='center'
          width={1}
          py={2}
        >
          <Typography variant='h6'>My movies</Typography>
          <Box textAlign='center'>
            <WelcomeMessage position={position}></WelcomeMessage>
            <Chip
              label={`Last time working on this project ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  color='primary'
                  disabled={false}
                  placeholder='Choose one…'
                  value={position}
                  variant='outlined'
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value='Fullstack developer'>
                    Fullstack developer
                  </MenuItem>
                  <MenuItem value='Frontend developer'>
                    Frontend developer
                  </MenuItem>
                  <MenuItem value='Backend developer'>
                    Backend developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box my={1}>
              <Typography variant='h6'>{time.toUTCString()}</Typography>
            </Box>
            <Button variant='contained'>Login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
