import { add } from 'mathjs';
import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const lines = fs
    .readFileSync('./day02/file.in', 'utf8')
    .split(',')
    .filter(Boolean)
    .map((range) => {
      const [start, end] = range.split('-').map(Number);
      return { start, end };
    });

  let invalidSum = 0;

  lines.forEach(({ start, end }) => {
    for (let i = start; i <= end; i++) {
      const numAsString = i.toString();

      const partOne = numAsString.slice(0, numAsString.length / 2);
      const partTwo = numAsString.slice(
        numAsString.length / 2,
        numAsString.length,
      );

      if (partOne === partTwo) {
        invalidSum += i;
      }
    }
  });

  log('part 1', invalidSum);
}

function part2() {
  const lines = fs
    .readFileSync('./day02/test.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  const nums = lines.map((line) => {
    const matches = [];

    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i]) && line[i] !== ' ') {
        matches.push(line[i]);
      }

      [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
      ].forEach((val, d) => {
        if (line.slice(i).startsWith(val)) {
          matches.push((d + 1).toString());
        }
      });
    }

    return Number(matches[0] + matches.at(-1));
  });

  log('part 2', add(...nums));
}

part1();
// part2();
