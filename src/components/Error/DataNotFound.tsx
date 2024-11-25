import { Card,CardContent } from "@mui/material"



const DataNotFound = ({resetErrorBoundary}:{resetErrorBoundary: () => void}) => {
  return (
    <Card>
    <CardContent>

    <div className="flex flex-col items-center justify-center p-6 bg-red-100 border border-red-400 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-red-700">Card Not Found</h1>
      <p className="mt-2 text-red-600">Data Not Found</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-red-700 text-white font-semibold rounded hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
        Try Again
      </button>
    </div>
          </CardContent>
        </Card>
  )
}

export default DataNotFound
