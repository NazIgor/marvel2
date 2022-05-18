import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.scss';

import { PageComics, PageMain } from "../pages";
import Header from '../header/header';

const App =()=>{ 
    return(
        <Router>
            <div className="container">  
                <main>
                <Header/>
                    <Routes>
                        <Route exact path="/comics" element={<PageComics/>}/>
                        <Route exact path="/" element={<PageMain/>}/>
                    </Routes>
                </main>
            </div>                
        </Router>
    )

}

export default App;
