'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://yuake.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://yuake.com';",
      output: "var test = 'http://yuake.com';",
      errors: [
        {
          message: 'Recommended "http://yuake.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://yuake.com' />",
      output: "<img src='http://yuake.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://yuake.com" switch to HTTPS',
        },
      ],
    },
  ],
});
