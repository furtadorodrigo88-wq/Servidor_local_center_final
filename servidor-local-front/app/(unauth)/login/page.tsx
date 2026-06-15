import { AuthLeftSection } from "@/components/auth/left-section";
import { RightSection } from "@/components/login/right-section";

export default function LoginPage() {
  console.log("teste")
  return (
    <div className="bg-gray-200 h-screen flex justify-between">
      <AuthLeftSection />
      <RightSection />
    </div>
  );
}
