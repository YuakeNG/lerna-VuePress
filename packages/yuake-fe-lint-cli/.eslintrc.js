/**
 * 
 *
 * 1、extends：一个数组，用于指定继承的 ESLint 配置。在这个例子中，使用了两个配置文件进行继承：yuanke-fe-eslint-config/typescript/node 和 prettier。通过继承这些配置，你可以在当前的 ESLint 配置中使用这些已经定义好的规则和配置。
   2、配置文件rules：一个对象，用于指定自定义的 ESLint 规则。在这个例子中，指定了两个规则：

@typescript-eslint/no-require-imports：该规则禁止使用 require 导入模块的方式。通过设置为 0，即禁用该规则，表示允许使用 require 导入模块的方式。

no-console：该规则禁止在代码中使用 console。通过设置为 0，即禁用该规则，表示允许使用 console。

这个配置文件的作用是定义了一些自定义的 ESLint 规则，并继承了其他配置文件的规则和配置，从而形成一个完整的 ESLint 配置。
module.exports = {
 */
module.exports = {
  extends: ['yuake-fe-eslint-config/typescript/node', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    'no-console': 0,
  },
};
