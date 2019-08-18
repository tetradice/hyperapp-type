// TypeScript Version: 3.1

import { Action, ActionWithEffects, PayloadCreator, Dispatchable, EffectFunc, Effect } from "hyperapp";

/** Specify the action to dispatch.
 *
 * @param action The action function.
 */
export function t<S>(action: Action<S, void>): typeof action;

/** Specify the action to dispatch.
 *
 * @param action The action function.
 */
export function t<S, AcceptDPayload>(action: Action<S, AcceptDPayload>): typeof action;

/** Specify the action to dispatch.
 *
 * @param action The action function.
 */
export function t<S, AcceptDPayload>(action: ActionWithEffects<S, void, AcceptDPayload>): typeof action;

/** Specify the action and payload creator to dispatch.
 *
 * @param action The action function.
 * @param payloadCreator The function to generate a parameter passed to action function.
 */
export function t<S, CPayload, AcceptDPayload>(action: Action<S, CPayload>, payloadCreator: PayloadCreator<AcceptDPayload, CPayload>): [typeof action, typeof payloadCreator];

/** Specify the action and custom payload to dispatch.
 *
 * @param action The action function.
 * @param payload The parameter passed to action function.
 */
export function t<S, CPayload>(action: Action<S, CPayload>, payload: (CPayload extends Function ? never : CPayload)): [typeof action, typeof payload];

/** Specify the action and payload creator to dispatch.
 *
 * @param action The action function.
 * @param payloadCreator The function to generate a parameter passed to action function.
 */
export function t<S, CPayload, AcceptDPayload>(action: ActionWithEffects<S, CPayload, AcceptDPayload>, payloadCreator: PayloadCreator<AcceptDPayload, CPayload>): [typeof action, typeof payloadCreator];

/** Specify the action and custom payload to dispatch.
 *
 * @param action The action function.
 * @param payload The parameter passed to action function.
 */
export function t<S, CPayload, AcceptDPayload>(action: ActionWithEffects<S, CPayload, AcceptDPayload>, payload: (CPayload extends Function ? never : CPayload)): [typeof action, typeof payload];

/** Specify the effect.
 */
export function t<S, Props, AcceptDPayload, NextPayload>(runner: EffectFunc<S, Props, AcceptDPayload, NextPayload>, props: Props): [typeof runner, typeof props];

/** Specify the effect.
 */
export function et<S, Props, AcceptDPayload, NextPayload>(runner: EffectFunc<S, Props, AcceptDPayload, NextPayload>, props: Props): [typeof runner, typeof props];

/** Specify the action result with effects.
 */
export function t<S, AcceptDPayload>(newState: (S extends Function ? never : S), ...effects: Effect<S, AcceptDPayload>[]): [typeof newState, ...(typeof effects)];

/** Specify the action result with effects.
 */
export function rt<S, AcceptDPayload>(newState: (S extends Function ? never : S), ...effects: Effect<S, AcceptDPayload>[]): [typeof newState, ...(typeof effects)];