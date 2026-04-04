import { RouterProvider } from "react-router-dom"

import { router } from "./components/pages/routers/routet"



const App=()=>{
  return(
    <div className="bg-[#111111] min-h-screen text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
   
    
  )
}


export default App