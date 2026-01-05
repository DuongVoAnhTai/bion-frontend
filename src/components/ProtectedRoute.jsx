import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, openLoginModal } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      openLoginModal(); // Tự động bật modal khi truy cập route bị chặn
    }
  }, [isAuthenticated, openLoginModal]);

  if (!isAuthenticated) {
    return null; // Không render nội dung được bảo vệ; modal xử lý đăng nhập
  }

  return children;
}
