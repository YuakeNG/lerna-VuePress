const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path');

describe('test rules-validate.test.js', () => {
  it('Validate default', async () => {
    const filePaths = [path.join(__dirname, './fixtures/index.css')];

    // 使用 stylelint.lint() 方法对文件进行样式验证
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    console.log("result", result);
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      // 断言验证结果不为空
      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate sass', async () => {
    const filePaths = [path.join(__dirname, './fixtures/test-sacss.scss')];

    // 使用 stylelint.lint() 方法对 Sass 文件进行样式验证
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: true,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      // 断言验证结果不为空
      assert.ok(filesResult.length !== 0);
    }
  });

  // it('Validate less', async () => {
  //   const filePaths = [path.join(__dirname, './fixtures/less-test.less')];

  //   // 使用 stylelint.lint() 方法对 Less 文件进行样式验证
  //   const result = await stylelint.lint({
  //     configFile: path.join(__dirname, '../index.js'),
  //     files: filePaths,
  //     fix: false,
  //   });

  //   if (result && result.errored) {
  //     const filesResult = JSON.parse(result.output || '[]') || [];
  //     filesResult.forEach((fileResult) => {
  //       console.log(`========= ${filePaths} ==========`);
  //       console.log(fileResult.warnings);
  //     });

  //     // 断言验证结果不为空
  //     assert.ok(filesResult.length !== 0);
  //   }
  // });

  // it('Validate css-module', async () => {
  //   const filePaths = [path.join(__dirname, './fixtures/css-module.scss')];

  //   // 使用 stylelint.lint() 方法对 CSS 模块文件进行样式验证
  //   const result = await stylelint.lint({
  //     configFile: path.join(__dirname, '../index.js'),
  //     files: filePaths,
  //     fix: false,
  //   });

  //   if (result && result.errored) {
  //     const filesResult = JSON.parse(result.output || '[]') || [];
  //     filesResult.forEach((fileResult) => {
  //       console.log(`========= ${filePaths} ==========`);
  //       console.log(fileResult.warnings);
  //     });

  //     // 断言验证结果为空
  //     assert.ok(filesResult.length === 0);
  //   }
  // });
});
