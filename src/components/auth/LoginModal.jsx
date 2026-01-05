import { X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../assets/icon";

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();

  if (!isLoginModalOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeLoginModal}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[500px] bg-white rounded-3xl p-10 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={closeLoginModal}
          className="absolute right-6 top-6 text-gray hover:text-black-text"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-start mb-10">
          <p className="text-gray-dark text-lg font-poppins mb-2">
            Welcome to BiON
          </p>
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text leading-tight">
            Log In to your Account
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <LoginButton provider="Google" onClick={login} />
          <LoginButton provider="Facebook" onClick={login} />
          <LoginButton provider="Apple" onClick={login} />
        </div>
      </div>
    </div>
  );
}

// Component con cho các nút Login
function LoginButton({ provider, onClick }) {
  const icons = {
    Google: <GoogleIcon />,
    Facebook: <FacebookIcon />,
    Apple: <AppleIcon />,
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-4 w-full py-4 rounded-xl border border-gray-light bg-white-background2 hover:bg-gray-light/10 transition-all font-poppins font-medium text-gray-dark cursor-pointer"
    >
      {icons[provider]}
      <span>Log In with {provider}</span>
    </button>
  );
}
