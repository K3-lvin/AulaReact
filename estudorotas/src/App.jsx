import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";

export default function App()
{
    return (
       <BrowserRouter>
       <Routes>
<Route path="/" element={ <Home />} />
<Route path="/ac" element={<Acre />} />
<Route path="/al" element={<Alagoas />} />
<Route path="/ap" element={<Amapa />} />
<Route path="/am" element={<Amazonas />} />
<Route path="/ba" element={<Bahia />} />
<Route path="/ce" element={<Ceara />} />
<Route path="/df" element={<DistritoFederal />} />
<Route path="/es" element={<EspiritoSanto />} />
<Route path="/go" element={<Goias />} />
<Route path="/ma" element={<Maranhao />} />
<Route path="/mt" element={<MatoGrosso />} />
<Route path="/ms" element={<MatoGrossoDoSul />} />
<Route path="/mg" element={<MinasGerais />} />
<Route path="/pa" element={<Para />} />
<Route path="/pb" element={<Paraiba />} />
<Route path="/pr" element={<Parana />} />
<Route path="/pe" element={<Pernambuco />} />
<Route path="/pi" element={<Piaui />} />
<Route path="/rj" element={<RioDeJaneiro />} />
<Route path="/rn" element={<RioGrandeDoNorte />} />
<Route path="/rs" element={<RioGrandeDoSul />} />
<Route path="/ro" element={<Rondonia />} />
<Route path="/rr" element={<Roraima />} />
<Route path="/sc" element={<SantaCatarina />} />
<Route path="/sp" element={<SaoPaulo />} />
<Route path="/se" element={<Sergipe />} />
<Route path="/to" element={<Tocantins />} />

       </Routes>
       </BrowserRouter>
    );
}