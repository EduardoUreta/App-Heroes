import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from '../ui/components/Navbar'
import { HeroesRoutes } from "../HeroesRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}></Route>

        <Route path="/*" element={<HeroesRoutes/>}></Route>
      
      </Routes>
    </>
  )
}
