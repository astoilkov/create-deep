import { describe, test } from "vitest";
import createDeepMemo from "./src/createDeepMemo";
import createDeepSignal from "./src/createDeepSignal";

// for some reason, Solid reactivity doesn't work in tests
describe("create-deep", () => {
    test("createDeepSignal()", () => {
        createDeepSignal(() => [1, 2, 3]);
    });

    test("createDeepMemo()", () => {
        createDeepMemo(() => [1, 2, 3]);
    });
});
