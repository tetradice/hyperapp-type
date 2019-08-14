# hyperapp-v2-typing

`hyperapp-v2-typing` is utility for using hyperapp V2 with TypeScript. This allows you to type your code more strictly.

It library 

## Install

```sh
# for npm
% npm install --save hyperapp-v2-typing

# for Yarn
% yarn add hyperapp-v2-typing
```

## Usage

This library exports the `t` function. `t` has a double meaning taken from the initials of "typed" and "tuple".

Use the `t` function instead of a tuple when you want to pass arguments to the Action.

```tsx
<button onclick={t(Increment, 1)}>+1</button>;   // [Increment, 1] => t(Increment, 1)
<button onclick={t(Increment)}>+1</button>;      // Can be used without arguments
```

As a result, strict type checking is performed, and the following code that cannot be made into a build error with Hyperapp V2 alone can be made into a build error.

```tsx
const Increment: Action<State, number> = (state, payload) => state - payload;

// When written in tuple format, build errors do not occur even though the payload type is different.
<button onclick={[Increment, 'invalid']}>+1</button>; 

// Using the `t` function will generate a build error correctly.
<button onclick={t(Increment, 'invalid')}>+1</button>; 
```

## Why does it work correctly when turned into a function call?

This is because type inference by TypeScript works by using function calls.

For example:

```tsx
type State = { count: number };

const Increment = (state: State, payload: {value: number}) => ({
    ...state,
    value: state.count + payload.value
});

<input onchange={[Increment, { value: 'invalid' }]}></input>;
```

The `<input>` above should cause a build error. Because Increment expects a number as payload, but it passes a string. However, as far as I know, the current TypeScript JSX support cannot make this code an error. The reason is that TypeScript can infer types by Generics only when calling a function, and JSX attributes cannot infer what the `Increment` requires.

By using function calls, type inference is enabled and the above example can also be a build error. Also, when using Visual Studio Code, input completion of payload is also enabled.

Note: If there were a way to be as strict without a function call, this function would be completely unnecessary.

## Contact
@tetradice ([GitHub Issues]() or [Twitter](https://twitter.com/tetradice))


## License
Unlicensed