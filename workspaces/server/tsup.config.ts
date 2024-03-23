import path from 'node:path';

import findPackageDir from 'pkg-dir';
import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export default defineConfig(async (): Promise<Options[]> => {
  const PACKAGE_DIR = (await findPackageDir(process.cwd()))!;
  const OUTPUT_DIR = path.resolve(PACKAGE_DIR, './dist');

  return [
    {
      clean: true,
      entry: {
        server: path.resolve(PACKAGE_DIR, 'src/server.tsx'),
      },
      env: {
        PI_URL: process.env['RENDER_EXTERNAL_URL'] ?? 'http://localhost:10000',
        NODE_ENV: process.env['NODE_ENV'] || 'production',
      },
      format: 'cjs',
      metafile: true,
      minify: true,
      noExternal: [/@wsh-2024\/.*/],
      outDir: OUTPUT_DIR,
      shims: true,
      sourcemap: true,
      splitting: true,
      target: 'node18',
      treeshake: true,
    },
  ];
});
