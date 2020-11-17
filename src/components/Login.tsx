import React from "react";

interface LoginProps {
  id: string;
  password: string;
  changeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword: (password: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const Login: React.FC<LoginProps> = ({
  id,
  password,
  changeId,
  changePassword,
  onSubmit
}) => (
  <div>
    <input name="id" placeholder="아이디" value={id} onChange={changeId} />
    <input
      name="password"
      placeholder="패스워드"
      type="password"
      value={password}
      onChange={changePassword}
    />
    <button onClick={onSubmit}>로그인</button>
  </div>
);

export default Login;
