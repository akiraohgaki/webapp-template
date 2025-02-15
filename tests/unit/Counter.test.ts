import { assert, assertEquals } from '@std/assert';

import { Counter } from '../../src/Counter.ts';

Deno.test('Counter', async (t) => {
  let counter: Counter;

  await t.step('constructor()', () => {
    counter = new Counter();

    assert(counter);
  });

  await t.step('value', () => {
    assertEquals(counter.value, 0);
  });

  await t.step('increment()', () => {
    counter.increment();

    assertEquals(counter.value, 1);
  });

  await t.step('decrement()', () => {
    counter.decrement();

    assertEquals(counter.value, -1);
  });
});
