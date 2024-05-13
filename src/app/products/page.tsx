"use client";

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../api/stripe";
import SubscribeButton from "../../components/SubscribeButton";

const Products = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-center text-3xl font-semibold text-gray-800 capitalize">
              Premium
            </h2>
            <h3 className="mt-4 text-center text-2xl font-semibold text-gray-600">
              Features:
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Access to limited 3D models
              </li>
              {/* ... otros li */}
            </ul>
            <div className="mt-8 text-center">
              <SubscribeButton />
            </div>
          </div>
        </div>
        <div className="h-16"></div>
      </div>
    </Elements>
  );
};

export default Products;