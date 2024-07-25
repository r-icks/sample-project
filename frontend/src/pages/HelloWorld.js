import React from "react";
import Sample from "../components/Sample.js";
import { useAppContext } from "../context/appContext";

const HelloWorld = () => {
  const { loading, helloWorld, getHelloWorld } = useAppContext();
  if (!helloWorld) {
    if (!loading) {
      getHelloWorld();
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Sample text={loading ? "Loading..." : helloWorld} />
    </div>
  );
};

export default HelloWorld;
