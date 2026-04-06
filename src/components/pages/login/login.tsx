import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";

import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    setError("");
    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-4">
      <Card className="w-full max-w-sm bg-[#1a1a1a] border border-gray-800 text-white shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Login to your account
          </CardTitle>
          <CardDescription className="text-gray-400">
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" className="text-[#1DB954]">
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#111] border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-[#1DB954] underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>

                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#111] border-gray-700 text-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button
            variant="outline"
            className="w-full border-gray-700 text-white hover:bg-[#222]"
          >
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;