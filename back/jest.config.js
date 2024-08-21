/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports =  {
	testMatch: ["**/**/*.test.ts"],
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
	  "^.+.tsx?$": ["ts-jest",{}],
	},
  };