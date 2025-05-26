import Navbar from "@/components/ui/Navbar";
import DiscountCalculator from "../components/DiscountCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <DiscountCalculator />
        </div>
      </div>
    </div>
  );
};

export default Index;
