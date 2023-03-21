import { assertStrictEquals } from 'std/testing/asserts.ts';

Deno.test('Test', async (t) => {
  await t.step('test', () => {
    assertStrictEquals(1 + 2, 3);
  });
});
