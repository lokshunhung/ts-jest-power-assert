Archiving because power-assert is being revamped under [twada/power-assert-monorepo](https://github.com/twada/power-assert-monorepo),
and this setup is no longer relevant.

# ts-jest-power-assert

Example jest config to setup [ts-jest](https://github.com/kulshekhar/ts-jest) to work with [power-assert](https://github.com/power-assert-js/power-assert)

## Run test

`$ yarn test`

The tests should fail and shows a descriptive error message:

```
Message:
    # src/add.spec.ts:11

  assert(add_1.add(a, b) === c)
         |     |   |  |  |   |
         |     |   |  |  |   4
         |     5   2  3  false
         Object{add:#function#}

  [number] c
  => 4
  [number] add_1.add(a, b)
  => 5
```
