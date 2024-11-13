import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ServiceStatus } from "./ServiceStatus/ServiceStatus";

export const StatusPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <ServiceStatus />
      <Footer />
    </div>
  );
};
