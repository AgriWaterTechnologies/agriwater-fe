import { PageNotFound } from "@/pages/404"
import Home from "@/pages/home"
import ListRegions from "@/pages/list-regions"
import { RegionDetails } from "@/pages/region-details"
import { Route, Routes } from "react-router-dom"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-regions" element={<ListRegions />} />
      <Route path="region/:id" element={<RegionDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}