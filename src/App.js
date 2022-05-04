import { Route, Routes } from 'react-router-dom';
import AddItem from './Pages/AddItem/AddItem';
import Success from './Pages/AddItem/Success';
import Home from './Pages/Home/Home';
import Inventory from './Pages/InventoryDetail/Inventory';
import Login from './Pages/Login/Login';
import MyItems from './Pages/MyItems/MyItems';
import Register from './Pages/Register/Register';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header';
import RequireAuth from './Shared/RequireAuth/RequireAuth';

function App() {
    return (
        <div>
            <Header />

            <div className="flex h-[100vh] flex-col justify-between pt-12">
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
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
                        <Route
                            path="/addItem"
                            element={
                                <RequireAuth>
                                    <AddItem />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/myItems"
                            element={
                                <RequireAuth>
                                    <MyItems />
                                </RequireAuth>
                            }
                        />

                        <Route path="/addItem/success" element={<Success />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
