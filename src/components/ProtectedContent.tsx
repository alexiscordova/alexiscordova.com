"use client";

import { useState, FormEvent } from "react";
import styles from "@/styles/PasswordProtection.module.css";
import WorkContent from "@/components/WorkContent";

type ProtectedContentProps = {
  password: string;
  workData: any; // Type this properly in a real implementation
};

export default function ProtectedContent({
  password,
  workData,
}: ProtectedContentProps) {
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (isAuthenticated) {
    return <WorkContent work={workData} />;
  }

  return (
    <div className={styles.passwordContainer}>
      <div className={styles.passwordForm}>
        <h2>Protected Content</h2>
        <p>
          This content is password protected. Please enter the password to view.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
