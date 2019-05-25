import React from 'react';

import ReactTable from "react-table";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

const cols19 = [
	{ accessor: 'name', Header: 'Name', resizable:true },
	{ accessor: 'semester_gpa', Header: 'Semester GPA' },
	{ accessor: 'cum_gpa', Header: 'Cumulative GPA' },
	// { accessor: 'rank', Header: 'Rank' },
	{ accessor: 'nm_gpa', Header: 'New Member GPA' },
	{ accessor: 'new_mem', Header: 'New Members' },
	{ accessor: 'total_mem', Header: 'Total Members' },
	{ accessor: 'service_hrs', Header: 'Service Hours' },
	{ accessor: 'phil', Header: 'Philantropy Money',
	sortMethod: (a, b) => {
		if(isNaN(a) || isNaN(b)){
			return isNaN(a) ? -1 : 1;
		}
        return a > b ? 1 : -1;
      }
    },
	{ accessor: 'alc', Header: 'Events w/ Alcohol' },
	{ accessor: 'reporting', Header: 'Reporting' },
	{ accessor: 'attendance', Header: 'Attendance' },
	{ accessor: 'conduct', Header: 'Conduct Level' }
];

const columns = [
	{ accessor: 'name', Header: 'Name', resizable:true },
	{ accessor: 'semester_gpa', Header: 'Semester GPA' },
	{ accessor: 'cum_gpa', Header: 'Cumulative GPA' },
	// { accessor: 'rank', Header: 'Rank' },
	{ accessor: 'nm_gpa', Header: 'New Member GPA' },
	{ accessor: 'new_mem', Header: 'New Members' },
	{ accessor: 'total_mem', Header: 'Total Members' },
	{ accessor: 'service_hrs', Header: 'Service Hours' },
	{ accessor: 'phil', Header: 'Philantropy Money' }
];

class Table extends React.Component{

	handleChange = id => event => {
		this.setState({ [id]: event.target.value });
	};

	state = {
		id: "f19"
	}

	render(){
		if(this.state.id === "f19"){
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
								pu fscl {fall19["name"]} report
							</Typography>
							<Typography variant="p">
								below you will find data reported by the purdue fscl community to purdue frat, sorority and cooperative life. we have also added our own ranking (on the way). enjoy the data as you will
							</Typography>
							<NativeSelect
							value={this.state.id}
							onChange={this.handleChange("id")}
							input={<Input name="age" id="age-native-helper" />}
							>
							<option value={"f19"}>Fall 2018</option>
							<option value={"s18"}>Spring 2018</option>
							</NativeSelect>
						</Grid>
						<Grid item lg={10} md={4} s={6} xs={12} my={4} >
									<ReactTable
										data={fall19["data"]}
										columns={cols19}
										defaultPageSize={10}
										className="-striped -highlight"
										/>
						</Grid>
					</Grid>	
			</div>
			);
		}else{
			let data = require("./spring18.json");
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
								pu fscl {data["name"]} report
							</Typography>
							<Typography variant="p">
								below you will find data reported by the purdue fscl community to purdue frat, sorority and cooperative life. we have also added our own ranking (on the way). enjoy the data as you will
							</Typography>
							
							<NativeSelect
							value={this.state.id}
							onChange={this.handleChange("id")}
							input={<Input name="age" id="age-native-helper" />}
							>
							<option value={"f19"}>Fall 2018</option>
							<option value={"s18"}>Spring 2018</option>
							</NativeSelect>
						</Grid>
						<Grid item lg={10} md={4} s={6} xs={12} my={4} >
									<ReactTable
										data={data["data"]}
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
}

export default Table;