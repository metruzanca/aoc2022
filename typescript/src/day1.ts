import load from './lib/loader'

const input = load(1)

const elves = input
  .split('\n\n') // Splitting the big list into elves
  .map(e => e.split('\n')) // Split the elves's lists up
  .map(e => e.reduce((cur, acc) => cur + +acc, 0)) // Get total calories per elf (+acc converts string to number)
  .sort((a, b) => b - a); // Sort

const answer1 = elves[0]

console.log(`Answer 1: ${answer1}`)

const answer2 = elves
  .slice(0, 3)
  .reduce((cur, acc) => cur + acc, 0)

console.log(`Answer 2: ${answer2}`)

