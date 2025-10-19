import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername, clearStorage } from "../../js/utils/storage.js";

describe("getUsername", () => {
  // Clear storage before each test
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Alice", email: "alice@example.com" };
    saveUser(user);
    expect(getUsername()).toBe("Alice");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
