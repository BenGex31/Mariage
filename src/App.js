import "./styles.css";
import AuthForm from "../src/Components/AuthForm";
import UserAddOutlined from "@ant-design/icons/UserAddOutlined";

export default function App() {
  return(
    <>
    <div className="Icon" style={{textAlign: 'center', marginBottom: '20px'}} >
      <UserAddOutlined style={{fontSize: '40px', color: 'blue'}} />
    </div>
    <AuthForm />
    </>
  ) 
}
