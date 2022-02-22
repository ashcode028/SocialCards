import './App.css';
import Home from './Home';
import PCard from './PCard';
import {useEffect,Suspense } from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  const Loading=()=>{
        return(
            <div >
            </div>
        )
    }
  return (
        <>
            <Suspense fallback={Loading()}>
                <Router>
                    <Routes>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route exact path={"/Info"} element={<PCard/>}/>
                    </Routes>
                </Router>
            </Suspense>
        </>
    );
}

export default App;
