"use client";

import { useState, FormEvent, ReactNode } from "react";
import styles from "@/styles/PasswordProtection.module.css";

type PasswordProtectionProps = {
  children: ReactNode;
  correctPassword: string;
};

export default function PasswordProtection({
  children,
  correctPassword,
}: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
