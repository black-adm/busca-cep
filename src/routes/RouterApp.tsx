import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Favorites } from "../pages/Favorites"

export function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/favoritos" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    )
}