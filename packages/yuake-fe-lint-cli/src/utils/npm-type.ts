import { sync as commandExistSync } from 'command-exists';
const promise: Promise<'npm' | 'pnpm'> = new Promise((reslove) => {
  //配置当前如果没有pnpm 那么返回的是一个npm
  if (!commandExistSync('pnpm ')) return reslove('npm');
  reslove('pnpm');
});
export default promise;
