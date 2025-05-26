
import React, { useState, useEffect } from 'react';
import { Calculator, IndianRupee } from 'lucide-react';

const DiscountCalculator = () => {
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [calculatedDiscount, setCalculatedDiscount] = useState(0);
  const [errors, setErrors] = useState({ amount: '', discount: '' });

  const validateInputs = () => {
    const newErrors = { amount: '', discount: '' };
    
    if (!amount) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(Number(amount)) || Number(amount) < 0) {
      newErrors.amount = 'Please enter a valid non-negative number';
    }
    
    if (!discount) {
      newErrors.discount = 'Discount percentage is required';
    } else if (isNaN(Number(discount)) || Number(discount) < 0 || Number(discount) > 100) {
      newErrors.discount = 'Please enter a valid percentage (0-100)';
    }
    
    setErrors(newErrors);
    return !newErrors.amount && !newErrors.discount;
  };

  useEffect(() => {
    if (amount && discount && validateInputs()) {
      const discountValue = (Number(amount) * Number(discount)) / 100;
      setCalculatedDiscount(discountValue);
    } else {
      setCalculatedDiscount(0);
    }
  }, [amount, discount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-100 rounded-xl">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Discount Calculator</h1>
            <p className="text-sm text-gray-500">Calculate your savings instantly</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <label htmlFor="amount" className="block text-sm font-semibold text-gray-700">
              Amount (MRP)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IndianRupee className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Enter amount"
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                  errors.amount 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-blue-500'
                } bg-gray-50 focus:bg-white`}
                min="0"
                step="0.01"
              />
            </div>
            {errors.amount && (
              <p className="text-sm text-red-600 mt-1">{errors.amount}</p>
            )}
          </div>

          {/* Discount Input */}
          <div className="space-y-2">
            <label htmlFor="discount" className="block text-sm font-semibold text-gray-700">
              Discount (%)
            </label>
            <div className="relative">
              <input
                id="discount"
                type="number"
                value={discount}
                onChange={handleDiscountChange}
                placeholder="Enter discount percentage"
                className={`w-full pr-12 pl-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                  errors.discount 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-blue-500'
                } bg-gray-50 focus:bg-white`}
                min="0"
                max="100"
                step="0.1"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-400 text-sm font-medium">%</span>
              </div>
            </div>
            {errors.discount && (
              <p className="text-sm text-red-600 mt-1">{errors.discount}</p>
            )}
          </div>

          {/* Result */}
          <div className="pt-4 border-t border-gray-100">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              {calculatedDiscount > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Discount Amount:</span>
                    <span className="text-sm font-medium text-red-600">
                      -₹{calculatedDiscount.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                      <span className="text-xs font-semibold text-green-700">
                        {discount}% OFF
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Final Price</p>
                    <span className="text-4xl font-bold text-gray-900">
                      ₹{(Number(amount) - calculatedDiscount).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
              {calculatedDiscount === 0 && (
                <div className="text-center text-gray-500">
                  <p className="text-sm">Enter amount and discount to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCalculator;
