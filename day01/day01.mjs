import { add } from 'mathjs';
import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const lines = fs
    .readFileSync('./day01/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  let currentDial = 50;
  let zeroCount = 0;

  for (const line of lines) {
    const rotation = line[0];
    const amount = Number(line.slice(1));

    if (rotation === 'L') {
      currentDial = (((currentDial - amount) % 100) + 100) % 100;
    }

    if (rotation === 'R') {
      currentDial = (currentDial + amount) % 100;
    }

    if (currentDial === 0) {
      zeroCount += 1;
    }
  }

  console.log('part 1', zeroCount);
}

function part2() {
  const lines = fs
    .readFileSync('./day01/test.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  let currentDial = 50;
  let zeroCount = 0;

  for (const line of lines) {
    const rotation = line[0];
    const amount = Number(line.slice(1));

    if (rotation === 'L') {
      currentDial = (((currentDial - amount) % 100) + 100) % 100;
    }

    if (rotation === 'R') {
      currentDial = (currentDial + amount) % 100;
    }

    if (currentDial === 0) {
      zeroCount += 1;
    }
  }

  console.log('part 2', zeroCount);
}

// part1();
part2();
