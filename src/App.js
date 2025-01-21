import { jwtDecode } from 'jwt-decode';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddProductPage from './Components/Admin/AddProduct';
import AdminDashboard from './Components/AdminPannel/AdminDashboard';
import AdminOrder from './Components/AdminPannel/AdminOrder';
import AllProducts from './Components/AdminPannel/AllProducts';
import ManageAdmin from './Components/AdminPannel/ManageAdmin';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { MyContext } from './Components/MyContext';
import ScrollToTop from './Components/ScrollToTop';
import WishlistPage from './Components/Wishlist/WishlistPage';

// Lazy-loaded Components
const AboutUs = React.lazy(() => import('./Components/AboutPage/AboutUs'));
const LoginPage = React.lazy(() => import('./Components/Admin/LoginPage'));
const Signup = React.lazy(() => import('./Components/Admin/Signup'));
const AdminPanel = React.lazy(() => import('./Components/AdminPannel/AdminPanel'));
const CartList = React.lazy(() => import('./Components/Button/CartList'));
const ContactUs = React.lazy(() => import('./Components/ContactUs/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./Components/Privacy/PrivacyPolicy'));
const ReturnPolicy = React.lazy(() => import('./Components/Privacy/ReturnPolicy'));
const TermsAndConditions = React.lazy(() => import('./Components/Privacy/TermsAndConditions'));
const Product = React.lazy(() => import('./Components/Product/Product'));
const TrendingProducts = React.lazy(() => import('./Components/TrendingProducts/TrendingProducts'));
const CategoriesPage = React.lazy(() => import('./Components/ShopByCategory/CategoriesPage'));
const CategoryDetailPage = React.lazy(() => import('./Components/ShopByCategory/CategoryDetailPage'));
const CheckOutPage = React.lazy(() => import('./Components/CheckOutPage/CheckoutPage'));
const PaymentPage = React.lazy(() => import('./Components/CheckOutPage/PaymentPage'));
const UserAccount = React.lazy(() => import('./Components/User/UserAccount'));
const OrderStatus = React.lazy(() => import('./Components/User/OrderStatus'));
const OrderHistory = React.lazy(() => import('./Components/User/OrderHistory'));
const PrescriptionManagement = React.lazy(() => import('./Components/User/PrescriptionManagement'));
const PaymentMethods = React.lazy(() => import('./Components/User/PaymentMethods'));
const PharmacyServices = React.lazy(() => import('./Components/User/PharmacyServices'));
const SecuritySettings = React.lazy(() => import('./Components/User/SecuritySettings'));

const CustomerSupport = React.lazy(() => import('./Components/User/CustomerSupport'));
const Start = React.lazy(() => import('./Start'));

// Fallback Component for Lazy Loading
const Loading = () => <div className="text-center p-5">Loading...</div>;

const App = () => {
  const [cart, setCart] = useState([]);
  const [role, setRole] = useState(null);

  // Function to add an item to the cart
  const addToCart = (product) => {
    // Set the quantity to a fixed value, for example, 1
    const quantity = 1;  // You can replace this with any dynamic value if needed

    // Create a new product object with the desired quantity
    const productWithUpdatedQuantity = { ...product, quantity };

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If product already exists, increase the quantity by the new value (1)
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If product doesn't exist in the cart, add it with the new quantity
        return [...prevCart, productWithUpdatedQuantity];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Context value including cart state and actions
  const contextValue = {
    basename: 'my-base',
    cart,
    addToCart,
    removeFromCart, // Add removeFromCart to the context
  };
  const [wishlist, setWishlist] = useState([]);



  // Check for User Role using JWT
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <MyContext.Provider value={contextValue}>
      <Router>
        <ScrollToTop />
        <Header role={role} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<TrendingProducts />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<CartList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/all-categories" element={<CategoriesPage />} />
            <Route path="/add" element={<AddProductPage />} />
            <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
            <Route path="/checkout" element={<CheckOutPage />}/>
            <Route path="/payment" element={<PaymentPage />}/>
            <Route path="/profile" element={<UserAccount />}/>
            <Route path="/orderstatus" element={<OrderStatus />}/>
            <Route path="/orderhistory" element={<OrderHistory />}/>
            <Route path="/prescriptions" element={<PrescriptionManagement />}/>
            <Route path="/paymentmMethods" element={<PaymentMethods />}/>
            <Route path="/pharmacyservices" element={<PharmacyServices />}/>
            <Route path="/securitysettings" element={<SecuritySettings />}/>
            <Route path="/customersupport" element={<CustomerSupport />}/>
            <Route path="/adminOrder" element={<AdminOrder />}/>
            <Route path="/dashboard" element={<AdminDashboard />}/>
            <Route path="/allProducts" element={<AllProducts />}/>
            <Route path="/manageAdmin" element={<ManageAdmin />}/>

          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
};

export default App;









// import { jwtDecode } from 'jwt-decode';
// import React, { Suspense, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AddProductPage from './Components/Admin/AddProduct';
// import AdminDashboard from './Components/AdminPannel/AdminDashboard';
// import AdminOrder from './Components/AdminPannel/AdminOrder';
// import AllProducts from './Components/AdminPannel/AllProducts';
// import ManageAdmin from './Components/AdminPannel/ManageAdmin';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
// import ScrollToTop from './Components/ScrollToTop';
// import WishlistPage from './Components/Wishlist/WishlistPage';

// // Lazy-loaded Components
// const AboutUs = React.lazy(() => import('./Components/AboutPage/AboutUs'));
// const PrivacyPolicy = React.lazy(() => import('./Components/Privacy/PrivacyPolicy'));
// const ReturnPolicy = React.lazy(() => import('./Components/Privacy/ReturnPolicy'));
// const TermsAndConditions = React.lazy(() => import('./Components/Privacy/TermsAndConditions'));
// const LoginPage = React.lazy(() => import('./Components/Admin/LoginPage'));
// const Signup = React.lazy(() => import('./Components/Admin/Signup'));
// const CartList = React.lazy(() => import('./Components/Button/CartList'));
// const ContactUs = React.lazy(() => import('./Components/ContactUs/ContactUs'));
// const Product = React.lazy(() => import('./Components/Product/Product'));
// const UserAccount = React.lazy(() => import('./Components/User/UserAccount'));
// const TrendingProducts = React.lazy(() => import('./Components/TrendingProducts/TrendingProducts'));
// const CategoriesPage = React.lazy(() => import('./Components/ShopByCategory/CategoriesPage'));
// const CategoryDetailPage = React.lazy(() => import('./Components/ShopByCategory/CategoryDetailPage'));
// const CheckOutPage = React.lazy(() => import('./Components/CheckOutPage/CheckoutPage'));
// const PaymentPage = React.lazy(() => import('./Components/CheckOutPage/PaymentPage'));
// const OrderStatus = React.lazy(() => import('./Components/User/OrderStatus'));
// const OrderHistory = React.lazy(() => import('./Components/User/OrderHistory'));
// const PrescriptionManagement = React.lazy(() => import('./Components/User/PrescriptionManagement'));
// const PaymentMethods = React.lazy(() => import('./Components/User/PaymentMethods'));
// const CustomerSupport = React.lazy(() => import('./Components/User/CustomerSupport'));
// const PharmacyServices = React.lazy(() => import('./Components/User/PharmacyServices'));
// const SecuritySettings = React.lazy(() => import('./Components/User/SecuritySettings'));
// const Start = React.lazy(() => import('./Start'));

// // Fallback Component for Lazy Loading
// const Loading = () => <div className="text-center p-5">Loading...</div>;

// export const AuthContext = React.createContext();

// const App = () => {
//   const [cart, setCart] = useState([]);
//   const [authState, setAuthState] = useState({
//     isLoggedIn: false,
//     role: null,
//     profilePic: null,
//   });

//   // Add to Cart
//   const addToCart = (product) => {
//     const quantity = 1; // Fixed quantity for now
//     const productWithQuantity = { ...product, quantity };

//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prevCart, productWithQuantity];
//       }
//     });
//   };

//   // Remove from Cart
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   // Authenticate User with JWT
//   const login = (token) => {
//     try {
//       const decoded = jwtDecode(token);
//       localStorage.setItem('token', token);
//       setAuthState({
//         isLoggedIn: true,
//         role: decoded.role,
//         profilePic: decoded.profilePic || null,
//       });
//     } catch (error) {
//       console.error('Invalid token:', error);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setAuthState({
//       isLoggedIn: false,
//       role: null,
//       profilePic: null,
//     });
//   };

//   // Context value
//   const contextValue = {
//     cart,
//     addToCart,
//     removeFromCart,
//     authState,
//     login,
//     logout,
//   };

//   return (
    
//       <AuthContext.Provider value={contextValue}>
//         <ScrollToTop />
//         <Header />
//         <Suspense fallback={<Loading />}>
//           <Routes>
//             <Route path="/" element={<Start />} />
//             <Route path="/wishlist" element={<WishlistPage />} />
//             <Route path="/admin" element={<AdminDashboard />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/products" element={<TrendingProducts />} />
//             <Route path="/product/:productId" element={<Product />} />
//             <Route path="/cart" element={<CartList />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />
//             <Route path="/return" element={<ReturnPolicy />} />
//             <Route path="/terms" element={<TermsAndConditions />} />
//             <Route path="/all-categories" element={<CategoriesPage />} />
//             <Route path="/add" element={<AddProductPage />} />
//             <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
//             <Route path="/checkout" element={<CheckOutPage />} />
//             <Route path="/payment" element={<PaymentPage />} />
//             <Route path="/profile" element={<UserAccount />} />
//             <Route path="/orderstatus" element={<OrderStatus />} />
//             <Route path="/orderhistory" element={<OrderHistory />} />
//             <Route path="/prescriptions" element={<PrescriptionManagement />} />
//             <Route path="/paymentmMethods" element={<PaymentMethods />} />
//             <Route path="/pharmacyservices" element={<PharmacyServices />} />
//             <Route path="/securitysettings" element={<SecuritySettings />} />
//             <Route path="/customersupport" element={<CustomerSupport />} />
//             <Route path="/adminOrder" element={<AdminOrder />} />
//             <Route path="/dashboard" element={<AdminDashboard />} />
//             <Route path="/allProducts" element={<AllProducts />} />
//             <Route path="/manageAdmin" element={<ManageAdmin />} />
//             {/* Add other routes here */}
//           </Routes>
//         </Suspense>
//         <Footer />
//       </AuthContext.Provider>
    
//   );
// };

// export default App;

