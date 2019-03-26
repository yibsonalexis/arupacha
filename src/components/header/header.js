import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';



import './header.css'
import { SocialButton } from '../socialButton/socialButton';

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
      <AppBar className="transparente" style={{ height: '100px' }}>
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
                <a href="/inicio">Galería</a>
                <a href="/inicio">Contátenos</a>
              </nav>
            </section>

            <SocialButton />
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
