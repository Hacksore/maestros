import { execSync } from 'node:child_process';
import { Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src/index.ts'],
  clean: true,
  onSuccess: async () => {
    execSync('tsc --emitDeclarationOnly');
  },
  splitting: true,
  treeshake: true,
  ...options,
}));
