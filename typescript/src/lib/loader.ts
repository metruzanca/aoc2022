import { readFileSync } from 'fs';
import { resolve } from 'path';


/** If executing aoc solution in the browser, load can be replaced by `document.querySelector('pre').textContent` */
export default function load(day: number) {
  const dayNumber = day.toString().padStart(2, '0');
  const path = resolve(process.cwd(), `../inputs/day${dayNumber}.txt`)
  
  const input = readFileSync(path, { encoding: 'utf8' })
  
  return input
}
