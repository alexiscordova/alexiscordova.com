/// <reference types="jest" />

// This informs TypeScript that we're in a Jest environment
declare global {
  namespace NodeJS {
    interface Global {
      expect: typeof expect;
      describe: typeof describe;
      it: typeof it;
      test: typeof test;
      beforeAll: typeof beforeAll;
      afterAll: typeof afterAll;
      beforeEach: typeof beforeEach;
      afterEach: typeof afterEach;
      jest: typeof jest;
    }
  }
}
