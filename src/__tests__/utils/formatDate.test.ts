import { describe, it, expect } from "@jest/globals";
import { formatDate } from "../../utils/formatDate";

describe("formatDate utility", () => {
  it("formats date correctly", () => {
    const date = new Date("2023-05-15T12:00:00Z");
    expect(formatDate(date)).toBe("May 15, 2023");
  });

  it("handles different locales", () => {
    const date = new Date("2023-05-15T12:00:00Z");
    expect(formatDate(date, "en-US")).toBe("May 15, 2023");
    expect(formatDate(date, "es-ES")).toBe("15 de mayo de 2023");
  });
});
