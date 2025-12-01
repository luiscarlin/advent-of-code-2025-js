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

// ...existing code...

function part2() {
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
      const startPos = currentDial;

      // Count full rotations (each crosses 0)
      const fullRotations = Math.floor(amount / 100);
      zeroCount += fullRotations;

      // For partial rotation, check if we cross 0 (but not end at 0)
      const remainingAmount = amount % 100;
      if (remainingAmount > 0 && startPos < remainingAmount && startPos !== 0) {
        zeroCount += 1;
      }

      currentDial = (((currentDial - amount) % 100) + 100) % 100;
    }

    if (rotation === 'R') {
      const startPos = currentDial;

      // Count full rotations (each crosses 0)
      const fullRotations = Math.floor(amount / 100);
      zeroCount += fullRotations;

      // For partial rotation, check if we cross 0 (but not end at 0)
      const remainingAmount = amount % 100;
      if (remainingAmount > 0 && startPos + remainingAmount >= 100) {
        const endPos = (startPos + amount) % 100;
        if (endPos !== 0) {
          zeroCount += 1;
        }
      }

      currentDial = (currentDial + amount) % 100;
    }

    // Count if we end exactly at 0
    if (currentDial === 0) {
      zeroCount += 1;
    }
  }

  console.log('part 2', zeroCount);
}

// part1();
part2();
