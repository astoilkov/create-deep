import { dequal } from "dequal";
import {
    Accessor,
    createMemo,
    EffectFunction,
    MemoOptions,
    NoInfer,
} from "solid-js";

export default function createDeepMemo<Next extends Prev, Prev = Next>(
    fn: EffectFunction<undefined | NoInfer<Prev>, Next>,
): Accessor<Next>;
export default function createDeepMemo<
    Next extends Prev,
    Init = Next,
    Prev = Next,
>(
    fn: EffectFunction<Init | Prev, Next>,
    value: Init,
    options?: MemoOptions<Next>,
): Accessor<Next>;
export default function createDeepMemo<
    Next extends Prev,
    Init = Next,
    Prev = Next,
>(
    fn: EffectFunction<undefined | NoInfer<Prev> | Init | Prev, Next>,
    value?: Init,
    options?: MemoOptions<Next>,
): Accessor<Next> {
    return createMemo(fn, value, {
        equals: dequal,
        ...options,
    });
}
