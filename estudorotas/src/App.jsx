import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Paginas/Home";
import Acre from "./Paginas/Acre";
import Alagoas from "./Paginas/Alagoas";
import Amapa from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Bahia from "./Paginas/Bahia";
import Ceara from "./Paginas/Ceara";
import DistritoFederal from "./Paginas/DistritoFederal";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import Goias from "./Paginas/Goias";
import Maranhao from "./Paginas/Maranhao";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoDoSul from "./Paginas/MatoGrossoDoSul";
import MinasGerais from "./Paginas/MinasGerais";
import Para from "./Paginas/Para";
import Paraiba from "./Paginas/Paraiba";
import Parana from "./Paginas/Parana";
import Pernambuco from "./Paginas/Pernambuco";
import Piaui from "./Paginas/Piaui";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import RioGrandeDoNorte from "./Paginas/RioGrandeDoNorte";
import RioGrandeDoSul from "./Paginas/RioGrandeDoSul";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import SantaCatarina from "./Paginas/SantaCatarina";
import SaoPaulo from "./Paginas/SaoPaulo";
import Sergipe from "./Paginas/Sergipe";
import Tocantins from "./Paginas/Tocantins";


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