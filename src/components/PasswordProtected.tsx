"use client";

import { useState } from "react";
import styles from "@/styles/PasswordProtection.module.css";
import WorkContent from "@/components/WorkContent";
import { ProtectedProject } from "@/types/project";

type Props = {
  project: ProtectedProject;
};

export default function PasswordProtected({ project }: Props) {
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === project.password) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (isAuthenticated) {
    return <WorkContent work={project} />;
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
