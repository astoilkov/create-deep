# `create-deep`

> Mimics SolidJS's `createSignal()` and `createMemo()` but with deep equality checks.

[![Gzipped Size](https://img.shields.io/bundlephobia/minzip/create-deep)](https://bundlephobia.com/result?p=create-deep)
[![Build Status](https://img.shields.io/github/actions/workflow/status/astoilkov/create-deep/main.yml?branch=main)](https://github.com/astoilkov/create-deep/actions/workflows/main.yml)

## Install

```bash
npm install create-deep
```

## API

[`dequal`](https://github.com/lukeed/dequal) is used for the deep equality checks.

#### `createDeepSignal<T>(value?: T)`

```ts
function Component() {
    const [value, setValue] = createDeepSignal([1, 2, 3])
}
```

#### `createDeepMemo<T>(() => T)`

```ts
function Component() {
    const value = createDeepMemo(() => {
        return items().filter(item => item.size > 0)
    })
}
```


