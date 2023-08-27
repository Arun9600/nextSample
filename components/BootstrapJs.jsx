"use client";
import { useEffect } from "react";
let BootstrapJs = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
};

export default BootstrapJs;
