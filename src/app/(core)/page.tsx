"use client";

import Home from "@/components/home-components/Home";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default HomePage;