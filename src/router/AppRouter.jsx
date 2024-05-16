import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<LoginPage/>}></Route> */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }>
        </Route>

        
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        }>
        </Route> 

        {/* <Route path="/*" element={<HeroesRoutes/>}></Route> */}
      
      </Routes>
    </>
  )
}
