import React from "react";

interface MyPageProps {
  id: string;
  onLogOut: () => void;
}

const MyPage: React.FC<MyPageProps> = ({ id, onLogOut }) => (
  <div>
    <p>{id}</p>
    <button onClick={onLogOut}>로그아웃</button>
  </div>
);

export default MyPage;
