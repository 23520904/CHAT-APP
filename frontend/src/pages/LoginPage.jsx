import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-base-200 to-base-300">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary shadow-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 ease-out">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Welcome Back
                </h1>
                <p className="text-base-content/70 text-lg">
                  Sign in to your account
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-base-100 rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-base-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-base-content/80">
                  Email
                </label>
                <div className="input input-primary flex items-center gap-3 h-12 w-full">
                  <Mail className="h-5 w-5 opacity-50 flex-shrink-0" />
                  <input
                    type="email"
                    className="flex-1 bg-transparent border-none outline-none min-w-0"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-base-content/80">
                  Password
                </label>
                <div className="input input-primary flex items-center gap-3 h-12 w-full">
                  <Lock className="h-5 w-5 opacity-50 flex-shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="flex-1 bg-transparent border-none outline-none min-w-0"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="p-1 hover:text-primary transition-colors flex-shrink-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 opacity-50" />
                    ) : (
                      <Eye className="h-5 w-5 opacity-50" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full h-12 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-base-content/70">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title="Welcome back!"
        subtitle="Sign in to continue your conversations and catch up with your messages."
      />
    </div>
  );
};

export default LoginPage;
