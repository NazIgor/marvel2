import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.scss';

import { PageComics, PageMain, Page404,SingleComic } from "../pages";
import Header from '../header/header';

const App =()=>{ 
    return(
        <Router>
            <div className="container">  
                <main>
                <Header/>
                    <Routes>
                        <Route path="/comic/:comicId" element={<SingleComic/>}/>
                        <Route path="/comics" element={<PageComics/>}/>
                        <Route exact path="/" element={<PageMain/>}/>
                        <Route exact path="*" element={<Page404/>}/>
                    </Routes>
                </main>
            </div>                
        </Router>
    )

}

export default App;
