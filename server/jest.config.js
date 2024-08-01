module.exports = {
    testEnvironment: "jest-environment-node",
    setupFilesAfterEnv: ["./jest_setup/setEnv.js", "./jest_setup/jest.setup.js"],
    moduleNameMapper: {
      "^@src/(.*)$": "<rootDir>/src/$1",
      "^@test/(.*)$": "<rootDir>/test/$1",
      "^@mocks/(.*)$": "<rootDir>/test/mocks/$1",
    },
  };