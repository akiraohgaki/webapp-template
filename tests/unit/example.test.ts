import { assertStrictEquals } from '@std/assert';

Deno.test('Test', async (t) => {
  await t.step('test', () => {
    assertStrictEquals(1 + 2, 3);
  });
});
