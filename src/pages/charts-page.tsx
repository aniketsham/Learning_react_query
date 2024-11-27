import CardSection from "../components/chart/card"
import { ErrorBoundary } from "react-error-boundary"
import DataNotFound from "../components/Error/DataNotFound"
import ErrorThrowing from "../components/Error/ErrorThrowing"
import { useState } from "react"
import { Button, ButtonGroup } from "@mui/material"
import { useAppDispatch } from "../hooks/redux-hooks"
import { changeChartType } from "../services/Reducers/slice/chart-slice"

const ChartsPage = () => {
  
  const initialData = [[[1, 2, 3], [2, 3, 4], [3, 4, 5]],[[1, 2, 3], [2, 3, 4], [3, 4, 5]],[[1, 2, 3], [2, 3, 4], [3, 4, 5]]];
  const dispatch=useAppDispatch()
  const [data,setData]=useState<number[][][]>(initialData)
  const handleReset=()=>{
    setData(initialData)
    console.log(data)
    console.log("reset")
  }  

  const handleChartChange=(type:string)=>{
    dispatch(changeChartType(type))
  }
  return (
    <>
    <div className="pt-10" >

    <ButtonGroup variant="contained">
      <Button onClick={()=>handleChartChange("column")}>
      Column
      </Button>
      <Button onClick={()=>handleChartChange("area")}>
        Area
      </Button>
      <Button onClick={()=>handleChartChange("line")}>
        Line
      </Button>
      <Button onClick={()=>handleChartChange("bar")}>
       Bar
      </Button>
      </ButtonGroup>
    </div>
    <div className="p-10 grid grid-cols-3 gap-5">
      

    {/* <ErrorBoundary fallback={<DataNotFound resetErrorBoundary={()=>{}}/>}>
        <ErrorThrowing/>
    </ErrorBoundary> */}

      <ErrorBoundary fallbackRender={({ resetErrorBoundary }) => (
        <DataNotFound resetErrorBoundary={resetErrorBoundary} />
      )}
      onReset={handleReset}>
          <CardSection   data={data[0]}/>
      </ErrorBoundary>

      <ErrorBoundary fallbackRender={({ resetErrorBoundary }) => (
        <DataNotFound resetErrorBoundary={resetErrorBoundary} />
      )}
      onReset={handleReset}>
          <CardSection data={[[1,2,3]]}/>
      </ErrorBoundary>

      <ErrorBoundary fallback={<DataNotFound resetErrorBoundary={()=>{handleReset()}}/>}>
          <CardSection data={data[2]}/>
      </ErrorBoundary>

    </div>
    </>
  )
}

export default ChartsPage
