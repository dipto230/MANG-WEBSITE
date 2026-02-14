import { SignIn } from "@clerk/clerk-react";

const AdminLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn routing="path" path="/admin-login" />
    </div>
  );
};

export default AdminLogin;
