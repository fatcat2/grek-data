import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

import ReactTable from "react-table";

import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';


import "react-table/react-table.css";

const columns = [
	{ accessor: 'name', Header: 'Name', resizable:true },
	{ accessor: 'semester_gpa', Header: 'Semester GPA' },
	{ accessor: 'cum_gpa', Header: 'Cumulative GPA' },
	// { accessor: 'rank', Header: 'Rank' },
	{ accessor: 'nm_gpa', Header: 'New Member GPA' },
	{ accessor: 'new_mem', Header: 'New Members' },
	{ accessor: 'total_mem', Header: 'Total Members' },
	{ accessor: 'service_hrs', Header: 'Service Hours' },
	{ accessor: 'phil', Header: 'Philantropy Money' },
	{ accessor: 'alc', Header: 'Events w/ Alcohol' },
	{ accessor: 'reporting', Header: 'Reporting' },
	{ accessor: 'attendance', Header: 'Attendance' },
	{ accessor: 'conduct', Header: 'Conduct Level' }
];

const data = [{"name": "Twin Pines", "semester_gpa": 3.48, "cum_gpa": 3.36, "rank": 1, "nm_gpa": 3.41, "new_mem": 5, "total_mem": 30, "service_hrs": 158, "phil": "NR", "alc": 11, "reporting": 80, "attendance": 90, "conduct": "Compliant"}, {"name": "Ann Tweedale", "semester_gpa": 3.47, "cum_gpa": 3.5, "rank": 2, "nm_gpa": 3.38, "new_mem": 12, "total_mem": 43, "service_hrs": 87, "phil": "NR", "alc": 17, "reporting": 80, "attendance": 90, "conduct": "Compliant"}, {"name": "Alpha Xi Delta", "semester_gpa": 3.41, "cum_gpa": 3.3, "rank": 3, "nm_gpa": 3.39, "new_mem": 45, "total_mem": 141, "service_hrs": 362, "phil": 32026, "alc": 4, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Phi Mu", "semester_gpa": 3.39, "cum_gpa": 3.36, "rank": 4, "nm_gpa": 3.19, "new_mem": 41, "total_mem": 143, "service_hrs": 674, "phil": 13950, "alc": 8, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Alpha Omicron Pi", "semester_gpa": 3.35, "cum_gpa": 3.3, "rank": 5, "nm_gpa": 3.51, "new_mem": 46, "total_mem": 134, "service_hrs": 2945, "phil": "NR", "alc": 17, "reporting": 80, "attendance": 66, "conduct": "Compliant"}, {"name": "Delta Gamma", "semester_gpa": 3.35, "cum_gpa": 3.39, "rank": 5, "nm_gpa": 3.17, "new_mem": 41, "total_mem": 143, "service_hrs": 770, "phil": 15500, "alc": 0, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Stewart", "semester_gpa": 3.33, "cum_gpa": 3.4, "rank": 7, "nm_gpa": 3.32, "new_mem": 15, "total_mem": 33, "service_hrs": 220, "phil": 1126, "alc": 0, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Evans Scholars #", "semester_gpa": 3.33, "cum_gpa": 3.25, "rank": 7, "nm_gpa": 3.03, "new_mem": 4, "total_mem": 27, "service_hrs": 25, "phil": 400, "alc": 0, "reporting": 100, "attendance": 0, "conduct": "Compliant"}, {"name": "Kappa Alpha Theta", "semester_gpa": 3.32, "cum_gpa": 3.36, "rank": 9, "nm_gpa": 3.41, "new_mem": 42, "total_mem": 154, "service_hrs": 651, "phil": 2382, "alc": 0, "reporting": 100, "attendance": 60, "conduct": "Compliant"}, {"name": "Chi Omega", "semester_gpa": 3.31, "cum_gpa": 3.32, "rank": 10, "nm_gpa": 3.14, "new_mem": 43, "total_mem": 147, "service_hrs": 1706, "phil": 17425, "alc": 1, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Glenwood", "semester_gpa": 3.3, "cum_gpa": 3.28, "rank": 11, "nm_gpa": 3.18, "new_mem": 10, "total_mem": 35, "service_hrs": 155, "phil": 1280, "alc": 10, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Kappa Delta", "semester_gpa": 3.3, "cum_gpa": 3.31, "rank": 11, "nm_gpa": 3.28, "new_mem": 44, "total_mem": 134, "service_hrs": 346, "phil": 14188, "alc": 6, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Marwood", "semester_gpa": 3.29, "cum_gpa": 3.29, "rank": 13, "nm_gpa": 3.35, "new_mem": 9, "total_mem": 25, "service_hrs": 70, "phil": "NR", "alc": 9, "reporting": 80, "attendance": 80, "conduct": "Compliant"}, {"name": "Alpha Chi Omega", "semester_gpa": 3.29, "cum_gpa": 3.39, "rank": 13, "nm_gpa": 3.05, "new_mem": 44, "total_mem": 144, "service_hrs": 1307, "phil": 10072, "alc": 19, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Alpha Gamma Delta", "semester_gpa": 3.29, "cum_gpa": 3.31, "rank": 13, "nm_gpa": 3.13, "new_mem": 44, "total_mem": 133, "service_hrs": 1114, "phil": 1094, "alc": 18, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Sigma Tau Gamma", "semester_gpa": 3.29, "cum_gpa": 3.31, "rank": 13, "nm_gpa": 3.53, "new_mem": 24, "total_mem": 155, "service_hrs": 2396, "phil": 21680, "alc": 21, "reporting": 100, "attendance": 50, "conduct": "Compliant"}, {"name": "Beta Upsilon Chi @ Fairway", "semester_gpa": 3.28, "cum_gpa": 3.39, "rank": 17, "nm_gpa": 3.34, "new_mem": 28, "total_mem": 63, "service_hrs": 56, "phil": 300, "alc": 0, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Sigma Kappa", "semester_gpa": 3.28, "cum_gpa": 3.24, "rank": 17, "nm_gpa": 3.34, "new_mem": 41, "total_mem": 145, "service_hrs": 3610, "phil": 27404, "alc": 7, "reporting": 80, "attendance": 70, "conduct": "Compliant"}, {"name": "Gamma Phi Beta", "semester_gpa": 3.26, "cum_gpa": 3.29, "rank": 19, "nm_gpa": 3.14, "new_mem": 44, "total_mem": 132, "service_hrs": 620, "phil": 1790, "alc": 19, "reporting": 100, "attendance": 70, "conduct": "Compliant"}, {"name": "Kappa Kappa Gamma", "semester_gpa": 3.24, "cum_gpa": 3.31, "rank": 20, "nm_gpa": 3.18, "new_mem": 44, "total_mem": 145, "service_hrs": 2726, "phil": 1828, "alc": 0, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Theta Tau", "semester_gpa": 3.24, "cum_gpa": 3.31, "rank": 20, "nm_gpa": 3.38, "new_mem": 6, "total_mem": 48, "service_hrs": 155, "phil": 8742, "alc": 1, "reporting": 100, "attendance": 66, "conduct": "Level 3"}, {"name": "Shoemaker", "semester_gpa": 3.23, "cum_gpa": 3.27, "rank": 22, "nm_gpa": 3.32, "new_mem": 15, "total_mem": 42, "service_hrs": 142, "phil": 735, "alc": 7, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Devonshire", "semester_gpa": 3.19, "cum_gpa": 3.28, "rank": 23, "nm_gpa": 3.21, "new_mem": 8, "total_mem": 17, "service_hrs": 322, "phil": 1600, "alc": 2, "reporting": 80, "attendance": 90, "conduct": "Compliant"}, {"name": "Zeta Tau Alpha", "semester_gpa": 3.18, "cum_gpa": 3.24, "rank": 24, "nm_gpa": 3.05, "new_mem": 43, "total_mem": 140, "service_hrs": 286, "phil": 15000, "alc": 1, "reporting": 100, "attendance": 80, "conduct": "Level 2"}, {"name": "Beta Sigma Psi", "semester_gpa": 3.18, "cum_gpa": 3.19, "rank": 24, "nm_gpa": 3.35, "new_mem": 7, "total_mem": 45, "service_hrs": 421, "phil": 740, "alc": 5, "reporting": 100, "attendance": 50, "conduct": "Compliant"}, {"name": "Pi Kappa Phi", "semester_gpa": 3.18, "cum_gpa": 3.24, "rank": 24, "nm_gpa": 3.09, "new_mem": 32, "total_mem": 152, "service_hrs": 6943, "phil": 84828, "alc": 16, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Circle Pines", "semester_gpa": 3.17, "cum_gpa": 3.19, "rank": 27, "nm_gpa": 3.2, "new_mem": 13, "total_mem": 56, "service_hrs": 169, "phil": "NR", "alc": 13, "reporting": 100, "attendance": 90, "conduct": "Level 3"}, {"name": "Phi Beta Chi", "semester_gpa": 3.16, "cum_gpa": 3.26, "rank": 28, "nm_gpa": 3.23, "new_mem": 3, "total_mem": 17, "service_hrs": 81, "phil": 94, "alc": 0, "reporting": 75, "attendance": 80, "conduct": "Compliant"}, {"name": "Alpha Phi", "semester_gpa": 3.15, "cum_gpa": 3.16, "rank": 29, "nm_gpa": 2.93, "new_mem": 52, "total_mem": 140, "service_hrs": 611, "phil": 10741, "alc": 0, "reporting": 100, "attendance": 80, "conduct": "Level 2"}, {"name": "Delta Zeta", "semester_gpa": 3.14, "cum_gpa": 3.2, "rank": 30, "nm_gpa": 3.11, "new_mem": 44, "total_mem": 139, "service_hrs": 1051, "phil": 6695, "alc": 19, "reporting": 100, "attendance": 50, "conduct": "Level 2"}, {"name": "Delta Phi Lambda", "semester_gpa": 3.14, "cum_gpa": 3.28, "rank": 30, "nm_gpa": 3.29, "new_mem": 4, "total_mem": 26, "service_hrs": 82, "phil": "NR", "alc": 0, "reporting": 75, "attendance": 100, "conduct": "Compliant"}, {"name": "Delta Delta Delta", "semester_gpa": 3.13, "cum_gpa": 3.2, "rank": 32, "nm_gpa": 3.13, "new_mem": 48, "total_mem": 130, "service_hrs": 1064, "phil": 33890, "alc": 20, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Phi Sigma Rho", "semester_gpa": 3.12, "cum_gpa": 3.19, "rank": 33, "nm_gpa": 3.04, "new_mem": 33, "total_mem": 142, "service_hrs": 1667, "phil": 17750, "alc": 10, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Phi Kappa Theta", "semester_gpa": 3.12, "cum_gpa": 3.33, "rank": 33, "nm_gpa": 3.01, "new_mem": 5, "total_mem": 30, "service_hrs": 280, "phil": "NR", "alc": 1, "reporting": 75, "attendance": 50, "conduct": "Compliant"}, {"name": "Delta Phi Mu", "semester_gpa": 3.12, "cum_gpa": 3.2, "rank": 33, "nm_gpa": "NA", "new_mem": 0, "total_mem": 6, "service_hrs": 155, "phil": "NR", "alc": 0, "reporting": 75, "attendance": 100, "conduct": "Compliant"}, {"name": "Phi Gamma Delta", "semester_gpa": 3.11, "cum_gpa": 3.2, "rank": 37, "nm_gpa": 2.97, "new_mem": 35, "total_mem": 114, "service_hrs": 712, "phil": 4077, "alc": 6, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Theta Chi", "semester_gpa": 3.11, "cum_gpa": 3.2, "rank": 37, "nm_gpa": 3.26, "new_mem": 44, "total_mem": 114, "service_hrs": 1260, "phil": 10862, "alc": 15, "reporting": 100, "attendance": 44, "conduct": "Compliant"}, {"name": "Zeta Beta Tau", "semester_gpa": 3.11, "cum_gpa": 3.19, "rank": 37, "nm_gpa": 2.71, "new_mem": 28, "total_mem": 134, "service_hrs": 1631, "phil": 3635, "alc": 14, "reporting": 80, "attendance": 50, "conduct": "Level 2"}, {"name": "Alpha Sigma Phi", "semester_gpa": 3.1, "cum_gpa": 3.08, "rank": 40, "nm_gpa": 3.09, "new_mem": 26, "total_mem": 89, "service_hrs": 102, "phil": 3087, "alc": 15, "reporting": 100, "attendance": 70, "conduct": "Level 1"}, {"name": "FarmHouse", "semester_gpa": 3.1, "cum_gpa": 3.17, "rank": 40, "nm_gpa": 2.73, "new_mem": 25, "total_mem": 105, "service_hrs": 1347, "phil": 9309, "alc": 4, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Pi Beta Phi", "semester_gpa": 3.09, "cum_gpa": 3.14, "rank": 42, "nm_gpa": 3.12, "new_mem": 53, "total_mem": 133, "service_hrs": 375, "phil": 924, "alc": 1, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Beta Theta Pi", "semester_gpa": 3.08, "cum_gpa": 3.17, "rank": 43, "nm_gpa": 3.05, "new_mem": 37, "total_mem": 114, "service_hrs": 1008, "phil": 1948, "alc": 6, "reporting": 100, "attendance": 60, "conduct": "Compliant"}, {"name": "Phi Sigma Kappa", "semester_gpa": 3.07, "cum_gpa": 3.14, "rank": 44, "nm_gpa": 3.21, "new_mem": 20, "total_mem": 79, "service_hrs": 580, "phil": 1771, "alc": 8, "reporting": 100, "attendance": 20, "conduct": "Compliant"}, {"name": "Sigma Pi", "semester_gpa": 3.07, "cum_gpa": 3, "rank": 44, "nm_gpa": 3.07, "new_mem": 7, "total_mem": 7, "service_hrs": 13, "phil": 0, "alc": 0, "reporting": 75, "attendance": 11, "conduct": "Compliant"}, {"name": "Omega Psi Phi", "semester_gpa": 3.06, "cum_gpa": 2.93, "rank": 46, "nm_gpa": "NA", "new_mem": 0, "total_mem": 4, "service_hrs": 0, "phil": 70, "alc": 0, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Alpha Tau Omega", "semester_gpa": 3.05, "cum_gpa": 3.15, "rank": 47, "nm_gpa": 3.24, "new_mem": 30, "total_mem": 119, "service_hrs": 849, "phil": 33388, "alc": 3, "reporting": 100, "attendance": 70, "conduct": "Compliant"}, {"name": "Sigma Alpha", "semester_gpa": 3.04, "cum_gpa": 3.15, "rank": 48, "nm_gpa": 2.93, "new_mem": 22, "total_mem": 93, "service_hrs": 575, "phil": 1515, "alc": 1, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Alpha Gamma Rho", "semester_gpa": 3.03, "cum_gpa": 3.1, "rank": 49, "nm_gpa": 2.99, "new_mem": 27, "total_mem": 95, "service_hrs": 240, "phil": 450, "alc": 15, "reporting": 100, "attendance": 60, "conduct": "Level 2"}, {"name": "Pi Lambda Phi", "semester_gpa": 3.03, "cum_gpa": 3.18, "rank": 49, "nm_gpa": 3.01, "new_mem": 9, "total_mem": 45, "service_hrs": 476, "phil": 740, "alc": 2, "reporting": 100, "attendance": 50, "conduct": "Compliant"}, {"name": "Alpha Kappa Alpha", "semester_gpa": 3.02, "cum_gpa": 2.97, "rank": 51, "nm_gpa": "NA", "new_mem": 0, "total_mem": 10, "service_hrs": 339, "phil": "NR", "alc": 0, "reporting": 75, "attendance": 100, "conduct": "Compliant"}, {"name": "Sigma Chi", "semester_gpa": 3.02, "cum_gpa": 3.11, "rank": 51, "nm_gpa": 3.13, "new_mem": 26, "total_mem": 115, "service_hrs": 1587, "phil": 10445, "alc": 9, "reporting": 100, "attendance": 60, "conduct": "Compliant"}, {"name": "Triangle", "semester_gpa": 3.02, "cum_gpa": 3.14, "rank": 51, "nm_gpa": 3.41, "new_mem": 9, "total_mem": 59, "service_hrs": 333, "phil": 259, "alc": 7, "reporting": 100, "attendance": 70, "conduct": "Level 2"}, {"name": "Sigma Delta Tau", "semester_gpa": 3.01, "cum_gpa": 3.16, "rank": 54, "nm_gpa": 2.9, "new_mem": 21, "total_mem": 67, "service_hrs": 296, "phil": 6236, "alc": 5, "reporting": 100, "attendance": 90, "conduct": "Compliant"}, {"name": "Alpha Epsilon Pi", "semester_gpa": 3.01, "cum_gpa": 3.2, "rank": 54, "nm_gpa": 3.1, "new_mem": 20, "total_mem": 69, "service_hrs": 211, "phil": "NR", "alc": 8, "reporting": 60, "attendance": 40, "conduct": "Compliant"}, {"name": "Kappa Alpha Order", "semester_gpa": 3, "cum_gpa": 3.16, "rank": 56, "nm_gpa": "*", "new_mem": 1, "total_mem": 15, "service_hrs": "NR", "phil": "NR", "alc": 0, "reporting": 100, "attendance": 11, "conduct": "Compliant"}, {"name": "alpha Kappa Delta Phi", "semester_gpa": 3, "cum_gpa": 3.21, "rank": 56, "nm_gpa": 2.95, "new_mem": 8, "total_mem": 29, "service_hrs": 172, "phil": 1130, "alc": 0, "reporting": 100, "attendance": 100, "conduct": "Compliant"}, {"name": "Alpha Chi Rho", "semester_gpa": 2.98, "cum_gpa": 3.04, "rank": 58, "nm_gpa": 2.95, "new_mem": 15, "total_mem": 60, "service_hrs": 249, "phil": 120, "alc": 8, "reporting": 100, "attendance": 40, "conduct": "Compliant"}, {"name": "Sigma Lambda Beta", "semester_gpa": 2.98, "cum_gpa": 3.2, "rank": 58, "nm_gpa": "NA", "new_mem": 0, "total_mem": 5, "service_hrs": 33, "phil": "NR", "alc": 0, "reporting": 50, "attendance": 50, "conduct": "Compliant"}, {"name": "Maclure", "semester_gpa": 2.97, "cum_gpa": 3.15, "rank": 60, "nm_gpa": 2.84, "new_mem": 9, "total_mem": 24, "service_hrs": 214, "phil": 1000, "alc": 4, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Theta Xi", "semester_gpa": 2.97, "cum_gpa": 3.23, "rank": 60, "nm_gpa": 2.37, "new_mem": 7, "total_mem": 31, "service_hrs": 186, "phil": 40, "alc": 0, "reporting": 100, "attendance": 50, "conduct": "Compliant"}, {"name": "Psi Upsilon #", "semester_gpa": 2.94, "cum_gpa": 3.05, "rank": 62, "nm_gpa": 2.54, "new_mem": 5, "total_mem": 26, "service_hrs": 91, "phil": 230, "alc": 0, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Phi Kappa Tau", "semester_gpa": 2.92, "cum_gpa": 3.02, "rank": 63, "nm_gpa": 2.83, "new_mem": 9, "total_mem": 40, "service_hrs": 1486, "phil": 840, "alc": 3, "reporting": 100, "attendance": 80, "conduct": "Compliant"}, {"name": "Gemini", "semester_gpa": 2.91, "cum_gpa": 3.13, "rank": 64, "nm_gpa": 2.52, "new_mem": 8, "total_mem": 44, "service_hrs": 145, "phil": "NR", "alc": 12, "reporting": 80, "attendance": 70, "conduct": "Compliant"}, {"name": "Kappa Sigma", "semester_gpa": 2.91, "cum_gpa": 3.02, "rank": 64, "nm_gpa": 2.57, "new_mem": 23, "total_mem": 105, "service_hrs": 1129, "phil": 4550, "alc": 0, "reporting": 100, "attendance": 80, "conduct": "Level 2"}, {"name": "Zeta Psi", "semester_gpa": 2.91, "cum_gpa": 2.87, "rank": 64, "nm_gpa": 3.1, "new_mem": 2, "total_mem": 12, "service_hrs": 24, "phil": 188, "alc": 0, "reporting": 100, "attendance": 80, "conduct": "Level 2"}];

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: purple,
		error: red,
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

function App() {
  return (
  	<div className="App">
  		<MuiThemeProvider theme={theme}>
  			<AppBar color='primary' position="static">
  				<Toolbar>
	  				<Typography variant="h6" color="inherit" >
	  					pu greek rank
					</Typography>
 				</Toolbar>
			</AppBar>
			<div style={{ padding: 50 }}>
				<Grid
					container
					spacing={24}
					alignItems="flex-start"
					justify="center"
				>
					<Grid item lg={10} md={4} s={6} xs={12} my={4} >
						<Typography variant="h4">
							pu fscl 2019 fall report
						</Typography>
						<Typography variant="p">
							below you will find data reported by the 2019 purdue fscl community to purdue frat, sorority and cooperative life. we have also added our own ranking (on the way). enjoy the data as you will
						</Typography>
					</Grid>
					<Grid item lg={10} md={4} s={6} xs={12} my={4} >
								<ReactTable
									data={data}
									columns={columns}
									defaultPageSize={10}
									className="-striped -highlight"
									/>
					</Grid>
				</Grid>
			</div>
		</MuiThemeProvider>
	</div>
	);
}

export default App;
