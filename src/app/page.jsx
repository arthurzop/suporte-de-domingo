"use client";
import styles from "./page.module.css";
import Loader from "../components/loader/loader";
import HomePage from "../pages/home/home";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return <>{isLoading ? <Loader /> : <HomePage />}</>;
}
