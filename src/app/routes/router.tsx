import Home from "@/pages/home"
import ListRegions from "@/pages/list-regions"
import { Route, Routes } from "react-router-dom"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-regions" element={<ListRegions />} />
    </Routes>
  )
}