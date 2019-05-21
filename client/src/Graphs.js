import React from 'react';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
  	console.log(payload)
    return (
      <Card className={styles.card}>
      	<CardContent>
	        <Typography variant="h5">{`${payload[0].payload.name}`}</Typography>
	        <Typography>{`GPA: ${payload[1].value}`}</Typography>
	        <Typography>{`# of alc events: ${payload[0].value}`}</Typography>
	    </CardContent>
      </Card>
    );
  }

  return null;
};

const graph_data = [{"x": 11, "y": 3.48, "name": "Twin Pines"}, {"x": 17, "y": 3.47, "name": "Ann Tweedale"}, {"x": 4, "y": 3.41, "name": "Alpha Xi Delta"}, {"x": 8, "y": 3.39, "name": "Phi Mu"}, {"x": 17, "y": 3.35, "name": "Alpha Omicron Pi"}, {"x": 0, "y": 3.35, "name": "Delta Gamma"}, {"x": 0, "y": 3.33, "name": "Stewart"}, {"x": 0, "y": 3.33, "name": "Evans Scholars #"}, {"x": 0, "y": 3.32, "name": "Kappa Alpha Theta"}, {"x": 1, "y": 3.31, "name": "Chi Omega"}, {"x": 10, "y": 3.3, "name": "Glenwood"}, {"x": 6, "y": 3.3, "name": "Kappa Delta"}, {"x": 9, "y": 3.29, "name": "Marwood"}, {"x": 19, "y": 3.29, "name": "Alpha Chi Omega"}, {"x": 18, "y": 3.29, "name": "Alpha Gamma Delta"}, {"x": 21, "y": 3.29, "name": "Sigma Tau Gamma"}, {"x": 0, "y": 3.28, "name": "Beta Upsilon Chi @ Fairway"}, {"x": 7, "y": 3.28, "name": "Sigma Kappa"}, {"x": 19, "y": 3.26, "name": "Gamma Phi Beta"}, {"x": 0, "y": 3.24, "name": "Kappa Kappa Gamma"}, {"x": 1, "y": 3.24, "name": "Theta Tau"}, {"x": 7, "y": 3.23, "name": "Shoemaker"}, {"x": 2, "y": 3.19, "name": "Devonshire"}, {"x": 1, "y": 3.18, "name": "Zeta Tau Alpha"}, {"x": 5, "y": 3.18, "name": "Beta Sigma Psi"}, {"x": 16, "y": 3.18, "name": "Pi Kappa Phi"}, {"x": 13, "y": 3.17, "name": "Circle Pines"}, {"x": 0, "y": 3.16, "name": "Phi Beta Chi"}, {"x": 0, "y": 3.15, "name": "Alpha Phi"}, {"x": 19, "y": 3.14, "name": "Delta Zeta"}, {"x": 0, "y": 3.14, "name": "Delta Phi Lambda"}, {"x": 20, "y": 3.13, "name": "Delta Delta Delta"}, {"x": 10, "y": 3.12, "name": "Phi Sigma Rho"}, {"x": 1, "y": 3.12, "name": "Phi Kappa Theta"}, {"x": 0, "y": 3.12, "name": "Delta Phi Mu"}, {"x": 6, "y": 3.11, "name": "Phi Gamma Delta"}, {"x": 15, "y": 3.11, "name": "Theta Chi"}, {"x": 14, "y": 3.11, "name": "Zeta Beta Tau"}, {"x": 15, "y": 3.1, "name": "Alpha Sigma Phi"}, {"x": 4, "y": 3.1, "name": "FarmHouse"}, {"x": 1, "y": 3.09, "name": "Pi Beta Phi"}, {"x": 6, "y": 3.08, "name": "Beta Theta Pi"}, {"x": 8, "y": 3.07, "name": "Phi Sigma Kappa"}, {"x": 0, "y": 3.07, "name": "Sigma Pi"}, {"x": 0, "y": 3.06, "name": "Omega Psi Phi"}, {"x": 3, "y": 3.05, "name": "Alpha Tau Omega"}, {"x": 1, "y": 3.04, "name": "Sigma Alpha"}, {"x": 15, "y": 3.03, "name": "Alpha Gamma Rho"}, {"x": 2, "y": 3.03, "name": "Pi Lambda Phi"}, {"x": 0, "y": 3.02, "name": "Alpha Kappa Alpha"}, {"x": 9, "y": 3.02, "name": "Sigma Chi"}, {"x": 7, "y": 3.02, "name": "Triangle"}, {"x": 5, "y": 3.01, "name": "Sigma Delta Tau"}, {"x": 8, "y": 3.01, "name": "Alpha Epsilon Pi"}, {"x": 0, "y": 3, "name": "Kappa Alpha Order"}, {"x": 0, "y": 3, "name": "alpha Kappa Delta Phi"}, {"x": 8, "y": 2.98, "name": "Alpha Chi Rho"}, {"x": 0, "y": 2.98, "name": "Sigma Lambda Beta"}, {"x": 4, "y": 2.97, "name": "Maclure"}, {"x": 0, "y": 2.97, "name": "Theta Xi"}, {"x": 0, "y": 2.94, "name": "Psi Upsilon #"}, {"x": 3, "y": 2.92, "name": "Phi Kappa Tau"}, {"x": 12, "y": 2.91, "name": "Gemini"}, {"x": 0, "y": 2.91, "name": "Kappa Sigma"}, {"x": 0, "y": 2.91, "name": "Zeta Psi"}];

const styles = {
	card: {
	    minWidth: 275,
	}
}

class Graph extends React.Component {

	render(){
		return (
			<div style={{ padding: 50 }}>
					<Grid
						container
						spacing={24}
						alignItems="center"
						justify="space-evenly"
					>
						<Grid item lg={10} md={4} s={6} xs={12} my={4} >
							<Typography variant="h4">
								pu fscl 2019 fall report
							</Typography>
							<Typography variant="p">
								here's a graph of semster GPA vs # of alcoholic events
							</Typography>
						</Grid>
						<Grid item lg={10} md={4} s={6} xs={12} my={4} 
						alignItems="center"
						justify="space-evenly">
							<ScatterChart
						        width={800}
						        height={500}
						        margin={{
						          top: 20, right: 20, bottom: 20, left: 20,
						        }}
						      >
						        <CartesianGrid />
						        <XAxis type="number" dataKey="x" name="number of events with alcohol" unit=" events" />
						        <YAxis type="number" dataKey="y" name="semster gpa"  />
						        <Tooltip content={<CustomTooltip />} />
						        <Scatter name="A school" data={graph_data} fill="#8884d8" />
						      </ScatterChart>
						</Grid>
					</Grid>	
			</div>
			);
	}

}

export default Graph;