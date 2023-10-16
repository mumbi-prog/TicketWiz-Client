import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes/Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <FontAwesomeIcon icon={faSpinner} spin size="3x" />
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <AllRoutes />
      </Suspense>
    </Router>
  );
}
