import React from 'react';

import ReactTable from "react-table";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

class Table extends React.Component{

	render(){
		let fall19 = require("./fall19.json");
		return (
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
									data={fall19}
									columns={columns}
									defaultPageSize={10}
									className="-striped -highlight"
									/>
					</Grid>
				</Grid>	
		</div>
		);
	}
}

export default Table;