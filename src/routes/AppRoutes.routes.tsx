import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../layout/DefaultLayout";
import { RegisterFriend } from "../pages/RegisterFriend";
import { Login } from "../pages/Login";
import { NewFriend } from "../pages/NewFriend";
import { Home } from "../pages/Home";
import { PagePets } from "../pages/PagePets";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route element={<DefaultLayout name="menu" />}>
        <Route path="/registerfriend" element={<RegisterFriend />} />
        <Route path="/newfriend" element={<NewFriend />} />
      </Route>
      <Route element={<DefaultLayout name="info" />}>
        <Route path="/pagepets" element={<PagePets />} />
      </Route>
    </Routes>
  );
}
