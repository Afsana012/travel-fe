import React from "react";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="bg-[#f8f9fa] px-4 sm:px-6 md:px-10 lg:px-16 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-xl bg-slate-800 px-6 py-12 sm:px-10 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Ready to Start Your Journey?
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
          Join thousands of travelers who are already planning their dream trips.
          Create your free account and start exploring today.
        </p>
        <button className="mt-8 inline-flex items-center gap-2 bg-white text-slate-800 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
          Create Free Account
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;
