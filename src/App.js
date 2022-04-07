import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Trash from "./components/Trash/Trash";
import Archive from "./components/Archive/Archive";
import Labels from "./components/Labels/Labels";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Landing from "./Pages/Landing/Landing";
import Notes from "./Pages/Notes/Notes";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/notes" element={<Notes />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="archive" element={<Archive />} />
                    <Route path="labels" element={<Labels />} />
                    <Route path="trash" element={<Trash />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
