import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </div>
    );
};

export default App;
