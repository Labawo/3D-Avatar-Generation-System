import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home';
import MainWrapper from './layouts/MainWrapper';
import Login from './views/login';
import PrivateRoute from './layouts/PrivateRoute';
import Logout from './views/logout';
import Images from './views/images';
import Register from './views/register';
import Project from './views/project';
import Projects from './views/projects';

function App() {
    return (
        <BrowserRouter>
            <MainWrapper>
                <Routes>
                    <Route
                        path="/images"
                        element={
                            <PrivateRoute>
                                <Images />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/project"
                        element={
                            <PrivateRoute>
                                <Project />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <PrivateRoute>
                                <Projects />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
