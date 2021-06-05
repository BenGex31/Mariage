import "./styles.css";
import AuthForm from "../src/Components/AuthForm";
import UserAddOutlined from "@ant-design/icons/UserAddOutlined";

export default function App() {
  return(
    <>
    <div className="Icon" >
      <UserAddOutlined />
    </div>
    <AuthForm />
    </>
  ) 
}
