"use client";

import HomePage from "@/components/HomePage";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}

export default Home;