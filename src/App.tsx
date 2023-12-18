import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyled from "./styles/GlobalStyles";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import { MyProfile, PasswordChanges } from "./features/common/userManagement";
import { DetailProduct } from "./pages/DetailProduct";
import RequireAuth from "./features/common/auth/RequireAuth";
import AdminPage from "./pages/admins/AdminPage";
import VendorPage from "./pages/vendors/VendorPage";
import Unauthorized from "./pages/Unauthorized";
import { ProductsByCategory } from "./pages/ProductsByCategory";
import { AddProduct } from "./pages/vendors/AddProduct";
import Cart from "./pages/Cart";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { FavoriteProducts } from "./features/common/userManagement/components/FavoriteProducts";
import FavoriteProductList from "./features/common/userManagement/components/FavoriteProducts/FavoriteProductList";
import { FollowShopList } from "./features/common/userManagement/components/FollowShopList";
import VoucherList from "./features/common/userManagement/components/VoucherList";
import PayMent from "./pages/PayMent";
import { Home } from "./pages/Home";
import Address from "./features/common/userManagement/components/Address";
import ProfileAdmin from "./features/admin/profile";
import CatagoryAdmin from "./features/admin/catagory";
import ProductAdmin from "./features/admin/products";
import StoreAdmin from "./features/admin/store";
import VoucherAdmin from "./features/admin/voucher";
import UserAdmin from "./features/admin/user";
import Statistical from "./pages/vendors/Statistical";
import ManagerCustomer from "./pages/admins/ManagerCustomer";
// import { DetailProduct } from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="home" element={<Home />} />
        <Route path="address" element={<Address />} />
        <Route path="/" element={<Home />} />

        {/* LẤY LẠI MẬT KHẨU - DONE
            
            
            QUẢN LÝ MÃ GIẢM GIÁ PRROFILE - DONE
            CART - tạm DONE
            THANH TOÁN - DONE với 1 voucher
            ĐƠN HÀNG - chờ api của bé vượng
            HOME PAGE
            XEM CỬA HÀNG :>>>
            
            YÊU THÍCH sản phẩm - UI - lỗi api
            THEO DÕI CỬA HÀNG - UI
            ĐƠN MUA
            
            ĐỊA CHỈ 
            ĐÁNH GIÁ VÀ COMMENT


            shop
        */}

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="product/:productId" element={<DetailProduct />} />
        <Route path="products" element={<ProductsByCategory />} />

        {/* private routes */}
        <Route element={<RequireAuth allowedRoles={["CUSTOMER", "VENDOR"]} />}>
          {/* user/account */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<PayMent />} />
          <Route path="user/account" element={<MyAccount />}>
            <Route path="profile" element={<MyProfile />} />
            <Route path="pw_changes" element={<PasswordChanges />} />
            <Route path="favorite-products" element={<FavoriteProducts />} />
            <Route path="follow-shop" element={<FollowShopList />} />
            <Route path="voucher-wallet" element={<VoucherList />} />
            <Route path="address" element={<Address />} />
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/profile" element={<ProfileAdmin />} />
          <Route path="admin/category" element={<CatagoryAdmin />} />
          <Route path="admin/product" element={<ProductAdmin />} />
          <Route path="admin/store" element={<StoreAdmin />} />
          <Route path="admin/voucher" element={<VoucherAdmin />} />
          <Route path="admin/user" element={<UserAdmin />} />
          <Route path="admin/manager/customers" element={<ManagerCustomer />} />
          
        </Route>

        <Route element={<RequireAuth allowedRoles={["VENDOR"]} />}>
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="product/new" element={<AddProduct />} />
          <Route path="shop/statistical" element={<Statistical/>}/>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
