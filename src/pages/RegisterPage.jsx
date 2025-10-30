import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    let payload = { userName, email, password };
    try {
      let response = await AxiosInstance.post("/user/register", payload);
      console.log(response);
      if (response.data.success) {
        navigate("/");
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 py-6 px-2">
      <article className="w-full max-w-4xl bg-white/90 border border-gray-200 flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side (Form) */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 sm:p-8 bg-white">
          <form className="w-full max-w-xs sm:max-w-sm" onSubmit={handleRegister}>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
              Create Your Account
            </h1>
            <div className="flex flex-col gap-5">
              <TextField
                id="userName"
                label="Username"
                variant="outlined"
                size="medium"
                fullWidth
                onChange={(e) => setUserName(e.target.value)}
                InputProps={{ className: "bg-white" }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="medium"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{ className: "bg-white" }}
              />
              <TextField
                id="password"
                helperText="Password should be at least 9 characters"
                label="Password"
                type="password"
                variant="outlined"
                size="medium"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{ className: "bg-white" }}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  background:
                    "linear-gradient(90deg, #6366f1 0%, #a21caf 100%)",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: 3,
                  ":hover": {
                    background:
                      "linear-gradient(90deg, #a21caf 0%, #6366f1 100%)",
                  },
                }}
              >
                Register
              </Button>
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-purple-400 text-white p-10 w-full md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Welcome Page
          </h1>
          <p className="text-lg lg:text-xl font-semibold opacity-90">
            Already registered? <Link to={"/"} className="underline hover:text-white">Sign in</Link>
          </p>
        </div>
      </article>
    </section>
  );
};

export default RegisterPage;
