import { createSlice } from "@reduxjs/toolkit";
import { SeriesType } from "@progress/kendo-react-charts";

const initialState:{chartType:SeriesType}={
    chartType:"line",
}

const chartSlice=createSlice({

    name:"chart",
    initialState,
    reducers:{
        changeChartType(state,action){   
            state.chartType=action.payload
    },
}
})

export const {changeChartType}=chartSlice.actions

export default chartSlice.reducer