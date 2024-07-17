import { describe, test } from "vitest";
import createDeepMemo from "./src/createDeepMemo";
import createDeepSignal from "./src/createDeepSignal";
import { createRenderEffect, createRoot } from "solid-js";

// for some reason, Solid reactivity doesn't work in tests
describe("create-deep", () => {
    test("createDeepSignal()", () => {
        createTestRoot(() => {
            const [, setValue] = createDeepSignal([1, 2, 3]);

            let calls = 0
            createRenderEffect(() => {
                calls += 1
            })

            setValue([1, 2, 3, 4])

            // expect(calls).toBe(0)
        })
    });

    test("createDeepMemo()", () => {
        createDeepMemo(() => [1, 2, 3]);
    });
});

function createTestRoot(fn: () => void): void {
    createRoot((dispose) => {
        fn();
        dispose()
    });
}
