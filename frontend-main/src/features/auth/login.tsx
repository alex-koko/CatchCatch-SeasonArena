// /src/feature/auth/ogin.tsx
import config from "@/config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "@/app/apis/authApi";
import { setToken, setUser } from "@/app/redux/slice/authSlice";
import { ServiceTitle, Copyright } from "@ui/index";
import {
  InputField,
  IconTextButton,
  DefaultLoginButton,
  KakaoLoginButton,
  GoogleLoginButton,
  Leave,
} from "@atoms/index";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const goSignUp = () => {
    navigate("/signup");
  };

  const handleOAuthLogin = (provider: "kakao" | "google") => {
    window.localStorage.setItem("provider", provider);
    window.location.href = `${config.API_BASE_URL}/api/auth/oauth2/authorization/${provider}`;
  };

  const handleLogin = async () => {
    if (!email || !password) {
      console.log("로그인 정보를 입력하세요.");
      return;
    }

    try {
      const { data, accessToken } = await loginUser({ email, password });

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        dispatch(setToken(accessToken));
        dispatch(setUser(data));
        navigate("/main");
      }
    } catch (error) {
      setErrorMessage("로그인 실패");
      console.error("로그인 에러:", error);
    }
  };

  return (
    <div className="flex flex-col justify-around h-screen bg-catch-sub-100">
      {/* 상단 로고 및 서비스 타이틀 */}
      <ServiceTitle />

      {/* 이메일 및 비밀번호 입력 필드 */}
      <div className="flex flex-col w-full max-w-xs mx-auto space-y-4">
        <InputField
          label="Email"
          placeholder="youremail@adress.com"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <InputField
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <div className="flex justify-end w-full">
          <IconTextButton
            label="회원가입"
            Icon={<Leave width="1rem" />}
            onClick={goSignUp}
          />
        </div>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </div>
      {/* 로그인 버튼들 */}
      <div className="flex flex-col items-center w-full max-w-xs mx-auto space-y-4">
        <DefaultLoginButton onClick={handleLogin} />
        <KakaoLoginButton onClick={() => handleOAuthLogin("kakao")} />
        <GoogleLoginButton onClick={() => handleOAuthLogin("google")} />
      </div>
      <Copyright />
    </div>
  );
};
