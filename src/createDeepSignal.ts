import { dequal } from "dequal";
import { createSignal, Signal, SignalOptions } from "solid-js";

export default function createDeepSignal<T>(): Signal<T | undefined>;
export default function createDeepSignal<T>(
    value: T,
    options?: SignalOptions<T>,
): Signal<T>;
export default function createDeepSignal<T>(
    value?: T,
    options?: SignalOptions<T | undefined>,
): Signal<T | undefined> {
    return createSignal(value, {
        equals: dequal,
        ...options,
    });
}
