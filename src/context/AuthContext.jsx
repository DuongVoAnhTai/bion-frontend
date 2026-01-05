import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. Khởi tạo: Kiểm tra xem trước đó đã "đăng nhập" chưa
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("bion_fake_token") !== null;
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  // 2. Logic Login: Lưu token giả
  const login = () => {
    localStorage.setItem("bion_fake_token", "mock_token_12345");
    setIsAuthenticated(true);
    closeLoginModal();
  };

  // 3. Logic Logout: Xóa token giả
  const logout = () => {
    localStorage.removeItem("bion_fake_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
