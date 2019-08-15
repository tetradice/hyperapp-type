import { Action, h } from "hyperapp";
import { t } from "hyperapp-v2-typing";

interface State { count: number }

const Increment1: Action<State> = (state) => Increment(state, { value: 1 });
const Increment: Action<State, { value: number }> = (state, payload) => ({
    ...state,
    count: state.count + payload.value
});

<input title="abc" oninput={Increment1}></input>;
<input oninput={t(Increment1)}></input>;
<input oninput={t(Increment1, { value: 1 })}></input>; // $ExpectError

<input oninput={t(Increment, { value: 100 })}></input>;
<input oninput={t(Increment, ((e: Event) => ({ value: 100 })))}></input>;
<input oninput={t(Increment, { value: 'invalid' })}></input>; // $ExpectError
<input oninput={t(Increment, {})}></input>; // $ExpectError

// expected error but no error 
<input oninput={t(Increment, ((e: number) => ({ value: 5 })))}></input>; // cannot wrong default payload type
<input oninput={t(Increment1, (e: Event) => ({ value: 1 }))}></input>; // return void function accept return value function
