import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./pages/Login";
import { Registrar } from "./pages/Registrar";
import { AlterarSenha } from "./pages/AlterarSenha";
import { RecuperarSenha } from "./pages/RecuperarSenha";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { checkLogged } from "./services/jwtServices";

const RouteWithLogged = ({ Page }: { Page: React.FC<{}> }) => {
  const isLogged = checkLogged();

  return isLogged ? <Page /> : <Navigate to="/login" />;
};

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/alterar-senha" element={<AlterarSenha />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/home" element={<RouteWithLogged Page={Home} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
