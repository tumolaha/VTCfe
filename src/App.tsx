import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyled from "./styles/GlobalStyles";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import { MyProfile, PasswordChanges } from "./features/userManagement";
import { DetailProduct } from "./pages/DetailProduct";
import RequireAuth from "./features/auth/RequireAuth";
import AdminPage from "./pages/admins/AdminPage";
import VendorPage from "./pages/vendors/VendorPage";
import Unauthorized from "./pages/Unauthorized";
// import { DetailProduct } from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="product" element={<DetailProduct />} />

        {/* private routes */}
        <Route element={<RequireAuth allowedRoles={["CUSTOMER", "VENDOR"]} />
          }
        >
          {/* user/account */}
          <Route path="user/account" element={<MyAccount />}>
            <Route path="profile" element={<MyProfile />} />
            <Route path="pw_changes" element={<PasswordChanges />} />
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["VENDOR"]} />}>
          <Route path="/vendor" element={<VendorPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
