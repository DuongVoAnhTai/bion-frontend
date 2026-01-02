import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import loginBg from "../assets/images/banner.png";
import { GoogleIcon } from "../assets/icon";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleFakeLogin = () => {
    login(); // Gọi hàm giả lập đăng nhập
    navigate("/"); // Quay về trang chủ
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* --- BÊN TRÁI: STATIC IMAGE --- */}
      <div className="relative hidden lg:block lg:w-2/3 h-full">
        <img
          src={loginBg}
          alt="Misty Forest"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* --- BÊN PHẢI: LOGIN FORM AREA --- */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[400px] flex flex-col items-center text-center">
          {/* 1. Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 mb-20 group">
            <img
              src={logo}
              alt="BiON Logo"
              className="h-10 w-auto transition-transform group-hover:scale-110"
            />
            <span className="font-space-grotesk text-3xl font-bold text-black-text">
              BiON
            </span>
          </Link>

          {/* 2. Welcome Header */}
          <h1 className="font-space-grotesk text-4xl font-bold text-black-text mb-4">
            Welcome to BiON
          </h1>
          <p className="font-poppins text-lg text-gray-dark mb-12 leading-relaxed">
            Join the largest biodiversity <br /> community in Vietnam
          </p>

          {/* 3. GOOGLE LOGIN BUTTON */}
          <button
            onClick={handleFakeLogin}
            className="flex items-center justify-center gap-4 w-full py-4 px-6 rounded-xl border border-gray-light bg-white shadow-sm transition-all hover:shadow-md hover:border-gray active:scale-[0.98] cursor-pointer"
          >
            {/* Google Icon SVG */}
            <GoogleIcon />

            <span className="font-poppins text-lg font-semibold text-black-text">
              Continue with Google
            </span>
          </button>

          {/* 4. Legal Footer */}
          {/* <div className="mt-24 md:mt-40">
            <p className="font-poppins text-[13px] text-gray-dark leading-relaxed">
              By continuing, you agree to our <br />
              <Link
                to="/terms"
                className="font-bold text-black-text hover:underline"
              >
                Terms
              </Link>{" "}
              &{" "}
              <Link
                to="/privacy"
                className="font-bold text-black-text hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
