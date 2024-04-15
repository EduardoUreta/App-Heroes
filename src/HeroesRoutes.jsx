import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./ui/components/Navbar"
import { MarvelPage } from "./heroes/pages/MarvelPage"
import { DcPage } from "./heroes/pages/DcPage"
import { SearchPage } from "./heroes/pages/SearchPage"
import { HeroPage } from "./heroes/pages/HeroPage"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="marvel" element={<MarvelPage/>}></Route>
        <Route path="dc" element={<DcPage/>}></Route>

        <Route path="search" element={<SearchPage/>}></Route>
        <Route path="hero/:heroId" element={<HeroPage/>}></Route>
        
        {/* Search, Hero By ID */}

        <Route path="/" element={<Navigate to="/marvel" />}></Route>
      </Routes>
    </>
  )
}


