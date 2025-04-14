/// <reference types="@jest/globals" />

declare module "@jest/globals" {
  // These are already declared in the @jest/globals package
  // But we're explicitly declaring them here to make sure TypeScript recognizes them
  export const describe: jest.Describe;
  export const it: jest.It;
  export const test: jest.It;
  export const expect: jest.Expect;
  export const beforeAll: jest.Lifecycle;
  export const afterAll: jest.Lifecycle;
  export const beforeEach: jest.Lifecycle;
  export const afterEach: jest.Lifecycle;
  export const jest: jest.Jest;
}
