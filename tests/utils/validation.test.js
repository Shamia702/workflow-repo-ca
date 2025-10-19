import { describe, it, expect } from "vitest";
import {
  validateEmail,
  validatePassword,
  validateLoginForm,
} from "../../js/utils/validation.js";

describe("validateEmail", () => {
  it("accepts valid noroff.no emails", () => {
    expect(validateEmail("test@noroff.no")).toBe(true);
    expect(validateEmail("student@stud.noroff.no")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(validateEmail("test@gmail.com")).toBe(false);
    expect(validateEmail("student@other.no")).toBe(false);
    expect(validateEmail("wrong@noroff.com")).toBe(false);
  });
});

describe("validatePassword", () => {
  it("accepts passwords with 8 or more characters", () => {
    expect(validatePassword("12345678")).toBe(true);
    expect(validatePassword("password123")).toBe(true);
  });

  it("rejects passwords shorter than 8 characters", () => {
    expect(validatePassword("12345")).toBe(false);
    expect(validatePassword("pass")).toBe(false);
  });
});

describe("validateLoginForm", () => {
  it("returns valid for correct email and password", () => {
    const result = validateLoginForm("test@noroff.no", "12345678");
    expect(result.isValid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  it("returns errors for invalid email and password", () => {
    const result = validateLoginForm("wrong@gmail.com", "123");
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(2);
    expect(result.errors).toContain(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
    expect(result.errors).toContain(
      "Password must be at least 8 characters long.",
    );
  });

  it("returns error for invalid email only", () => {
    const result = validateLoginForm("wrong@gmail.com", "12345678");
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(1);
    expect(result.errors[0]).toBe(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
  });

  it("returns error for invalid password only", () => {
    const result = validateLoginForm("test@noroff.no", "123");
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(1);
    expect(result.errors[0]).toBe(
      "Password must be at least 8 characters long.",
    );
  });
});
