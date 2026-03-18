export const DEFAULT_APP_NAME = 'KOALASTORE.DIGI';

export const normalizeAppName = (value: unknown) => {
  if (typeof value !== 'string') return '';
  return value.trim();
};
