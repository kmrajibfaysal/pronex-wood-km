import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddItem from './Pages/AddItem/AddItem';
import Success from './Pages/AddItem/Success';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/InventoryDetail/Inventory';
import Login from './Pages/Login/Login';
import MngInventory from './Pages/ManageInventory.js/MngInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header';
import RequireAuth from './Shared/RequireAuth/RequireAuth';

function App() {
    return (
        <div>
            <Header />

            <div className="flex h-[100vh] flex-col justify-between md:pt-12">
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/blogs" element={<Blogs />} />
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
                        <Route
                            path="/inventory"
                            element={
                                <RequireAuth>
                                    <MngInventory />
                                </RequireAuth>
                            }
                        />
                        <Route path="/addItem/success" element={<Success />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </div>
                <ToastContainer />
                <Footer />
            </div>
        </div>
    );
}

export default App;
