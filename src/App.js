import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddItem from './Pages/AddItem/AddItem';
import Success from './Pages/AddItem/Success';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Inventory from './Pages/InventoryDetail/Inventory';
import Login from './Pages/Login/Login';
import MngInventory from './Pages/ManageInventory.js/MngInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ResetSuccess from './Pages/ResetPassword/ResetSuccess';
import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
import About from './Shared/About/About';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import RequireAuth from './Shared/RequireAuth/RequireAuth';

function App() {
    return (
        <div>
            <Header />

            <div className="flex h-[100vh] flex-col justify-between md:pt-12">
                <div>
                    <AnimatePresence exitBeforeEnter>
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
                            <Route
                                path="/checkout"
                                element={
                                    <RequireAuth>
                                        <CheckOut />
                                    </RequireAuth>
                                }
                            />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/reset" element={<ResetPassword />} />
                            <Route path="/resetSuccess" element={<ResetSuccess />} />
                            <Route path="/verify" element={<VerifyEmail />} />
                            <Route path="/addItem/success" element={<Success />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </AnimatePresence>
                </div>
                <ToastContainer />
                <Footer />
            </div>
        </div>
    );
}

export default App;
