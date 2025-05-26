
import DiscountCalculator from '../components/DiscountCalculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discount Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your discount amount and final price instantly with our easy-to-use calculator
          </p>
        </div>
        
        <div className="flex justify-center">
          <DiscountCalculator />
        </div>
      </div>
    </div>
  );
};

export default Index;
