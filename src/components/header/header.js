import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import SvgIcon from '@material-ui/core/SvgIcon';

import Tooltip from "@material-ui/core/Tooltip";


import './header.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    backgroundColor: 'red',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },

  },
});


function Header(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static" color="primary" style={{ height: '100px' }}>
        <Toolbar className={classes.root}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Typography variant="h6" color="inherit">
            ARUPACHA
          </Typography>

            <section className="color-1">
              <nav className="cl-effect-6">
                <a href="/">Inicio</a>
                <a href="/inicio">Servicios</a>
                <a href="/inicio">Visitanos</a>
                <a href="/inicio">Contátenos</a>
                <a href="/inicio">Galería</a>
              </nav>
            </section>

            <div>
            <Tooltip title="Siguenos en Facebook">
              <IconButton style={{color:'white'}}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                </SvgIcon>
              </IconButton>
            </Tooltip>

            <Tooltip title="Siguenos en Facebook">
              <IconButton style={{color:'white'}}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z" />
                </SvgIcon>
              </IconButton>
            </Tooltip>

            <Tooltip title="Siguenos en Facebook">
              <IconButton style={{color:'white'}}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </SvgIcon>
              </IconButton>
            </Tooltip>

            <Tooltip title="Siguenos en Facebook">
              <IconButton style={{color:'white'}}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                <path d="M2.5,4.5H21.5C22.34,4.5 23,5.15 23,6V17.5C23,18.35 22.34,19 21.5,19H2.5C1.65,19 1,18.35 1,17.5V6C1,5.15 1.65,4.5 2.5,4.5M9.71,8.5V15L15.42,11.7L9.71,8.5M17.25,21H6.65C6.35,21 6.15,20.8 6.15,20.5C6.15,20.2 6.35,20 6.65,20H17.35C17.65,20 17.85,20.2 17.85,20.5C17.85,20.8 17.55,21 17.25,21Z" />
                </SvgIcon>
              </IconButton>
            </Tooltip>


            </div>



          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
