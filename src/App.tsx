import React, { useState } from "react";
import MyPage from "./components/MyPage";
import Login from "./components/Login";
import useInput from "./hooks/useInput";

const App: React.FC = () => {
  const [login, setLogin] = useState(false);

  const [id, changeId, setId] = useInput("");
  const [password, changePassword, setPassword] = useInput("");

  const onSubmit = () => {
    if (!id) {
      alert("아이디를 입력해주세요!");
      return;
    } else if (!password) {
      alert("비밀번호를 입력해주세요!");
      return;
    }

    if (password === "1234") {
      alert("로그인!");
      setLogin(true);
      return;
    }

    alert("패스워드가 틀렸습니다.");
  };

  const onReset = () => {
    setId("");
    setPassword("");
  };

  const onLogOut = () => {
    setLogin(false);
    onReset();
  };

  return (
    <div>
      {login ? (
        <MyPage id={id} onLogOut={onLogOut} />
      ) : (
        <Login
          id={id}
          password={password}
          changeId={changeId}
          changePassword={changePassword}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default App;
