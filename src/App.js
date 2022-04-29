import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Shared/Header';
import RequireAuth from './Shared/RequireAuth/RequireAuth';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/inventory/:productId"
                    element={
                        <RequireAuth>
                            <Inventory />
                        </RequireAuth>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
