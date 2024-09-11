import { assertEquals, assertStrictEquals } from '@std/assert';

Deno.test('Test', async (t) => {
  await t.step('test', () => {
    const a = {};
    const b = a;

    assertEquals(a, {});

    assertStrictEquals(a, b);
  });
});
