import eslintCodeGuideline from '@code-guideline/eslint';

export default [
  ...eslintCodeGuideline('react'),
  { ignores: ['src/generated/prisma/**'] },
];
