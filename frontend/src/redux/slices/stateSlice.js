import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
	name: "state",
	initialState: {
		dashboardSection: "board",
		loading: false,
		addPeopleM: false,
		addedPeopleM: false,
		logoutM: false,
		taskDeleteM: false,
		taskCardM: false,
		taskFilterP: false,
	},
	reducers: {
		updateDashboardSection: (state, action) => {
			state.dashboardSection = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setAddPeopleM: (state, action) => {
			state.addPeopleM = action.payload;
		},
		setAddedPeopleM: (state, action) => {
			state.addedPeopleM = action.payload;
		},
		setLogoutM: (state, action) => {
			state.logoutM = action.payload;
		},
		setTaskDeleteM: (state, action) => {
			state.taskDeleteM = action.payload;
		},
		setTaskCardM: (state, action) => {
			state.taskCardM = action.payload;
		},
		setTaskFilterP: (state, action) => {
			state.taskFilterP = action.payload;
		},
	},
});
export const {
	updateDashboardSection,
	setLoading,
	setAddPeopleM,
	setAddedPeopleM,
	setLogoutM,
	setTaskDeleteM,
	setTaskCardM,
	setTaskFilterP,
} = stateSlice.actions;
export default stateSlice.reducer;
