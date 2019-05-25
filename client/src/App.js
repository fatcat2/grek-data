import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';

import Table from './Table';
import Graph from './Graphs';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "react-table/react-table.css";

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: purple,
		error: red,
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
  	float: "right"
  },
  card: {
    minWidth: 275,
  }
};

function App() {
  return (
  	<div className="App">
  		<MuiThemeProvider theme={theme}>
  			<Router>
		  		<div className={styles.root}>
		  			<AppBar color='primary' position="static">
		  				<Toolbar>
			  				<Grid
						      justify="space-between" // Add it here :)
						      container 
						      spacing={24}
						    >
						      <Grid item>
				  				<Typography style={{ textDecoration: 'none' }} component={Link} to="/" variant="h6" color="inherit" className={styles.grow}>
				  					pu greek rank
								</Typography>
						      </Grid>

						      <Grid item>
						        <div>
									<Button color="inherit" component={Link} to="/graphs" className="{styles.button}">Graphs</Button>
						        </div>
						      </Grid>
						    </Grid>
		 				</Toolbar>
					</AppBar>
				</div>
			<Route path="/" exact component={Table} />
			<Route path="/graphs" exact component={Graph} />
			</Router>	
		</MuiThemeProvider>
	</div>
	);
}

export default App;
