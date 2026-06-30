export const BASE_PATH = "/portfolio-site";

export function staticAsset(path: string): string {
  return `${BASE_PATH}${path}`;
}
