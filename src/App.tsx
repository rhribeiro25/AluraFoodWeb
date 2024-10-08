import { Routes, Route, Await } from 'react-router-dom';
import HomePageAdmin from './pages/admistration/HomePageAdmin';
import ProductAdministration from './pages/admistration/products/ProductAdministration';
import ProductForm from './pages/admistration/products/ProductForm';
import OrderAdministration from './pages/admistration/orders/OrderAdministration';
import OrderForm from './pages/admistration/orders/OrderForm';
import Home from './pages/home';
import OrderDetails from './pages/orderDetails';
import ShowcaseOrders from './pages/orderShowCase';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={< ShowcaseOrders />} /> 
      <Route path="/products/:id" element={<OrderDetails />} /> 

      <Route path='/admin' element={<HomePageAdmin />}>

        <Route path="orders" element={<OrderAdministration />} />
        <Route path="orders/novo" element={<OrderForm />} />
        <Route path="orders/:id" element={<OrderForm />} />

        <Route path="products" element={<ProductAdministration />} />
        <Route path="products/novo" element={<ProductForm />} />
      </Route>

    </Routes>
  );
}

export default App;
