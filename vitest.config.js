import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // allow describe, test, expect without importing
    environment: "jsdom", // simulate browser environment
  },
});
