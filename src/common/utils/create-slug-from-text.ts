import { generateRandomSufix } from './generate-random-sufix';
import { slugify } from './slugfy';

export function createSlugFromText(text: string): string {
  const slug = slugify(text);

  return `${slug}-${generateRandomSufix()}`;
}
