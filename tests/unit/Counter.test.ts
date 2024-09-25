import { assertStrictEquals } from '@std/assert';

import Counter from '../../src/Counter.ts';

Deno.test('Counter', async (t) => {
  await t.step('constructor', () => {
    const counterA = new Counter();
    const counterB = new Counter(123);

    assertStrictEquals(counterA.value, 0);
    assertStrictEquals(counterB.value, 123);
  });

  await t.step('increment', () => {
    const counter = new Counter();
    counter.increment();

    assertStrictEquals(counter.value, 1);
  });

  await t.step('decrement', () => {
    const counter = new Counter();
    counter.decrement();

    assertStrictEquals(counter.value, -1);
  });
});
