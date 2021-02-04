declare module 'power-assert' {
    import { AssertPredicate } from 'assert';

    function assert(value: any, message?: string | Error): asserts value;
    namespace assert {
        function ok(value: any, message?: string | Error): asserts value;

        function strictEqual<T>(actual: any, expected: T, message?: string | Error): asserts actual is T;
        function notStrictEqual(actual: any, expected: any, message?: string | Error): void;
        function deepStrictEqual<T>(actual: any, expected: T, message?: string | Error): asserts actual is T;
        function notDeepStrictEqual(actual: any, expected: any, message?: string | Error): void;

        function fail(actual: any, expected: any, message?: string | Error, operator?: string): never;
        function throws(block: () => any, error: AssertPredicate, message?: string | Error): void;
        function doesNotThrow(block: () => any, message?: string | Error): void;
        function ifError(value: any): asserts value is null | undefined;
    }
    export = assert;
}
