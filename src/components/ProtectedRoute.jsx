import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng về /login
    // Lưu lại vị trí đang định vào (state: { from: location }) để sau khi login xong quay lại đúng chỗ đó
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
