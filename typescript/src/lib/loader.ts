import { readFileSync } from 'fs';
import { resolve } from 'path';

export default function load(day: number) {
  const dayNumber = day.toString().padStart(2, '0');
  const path = resolve(process.cwd(), `../inputs/day${dayNumber}.txt`)
  
  const input = readFileSync(path, { encoding: 'utf8' })
  
  return input
}
