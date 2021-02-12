# TypeScript Decorators Workshop

## Table of Contents

- [Class Decorator](#Class-Decorator)

## Class Decorator

```javascript
// @Logger
export function Logger(constructor: Function) {
  console.log(`Logging...`);
  console.log(constructor);
}
```

```javascript
// @SocketIO('demo')
export function SocketIO(event: string) {
  return function (constructor: Function) {
    console.log(event, constructor);
  };
}
```
