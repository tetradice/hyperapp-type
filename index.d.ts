// TypeScript Version: 3.1

import { Action, ActionWithEffects, PayloadCreator, Dispatchable } from "hyperapp";

/** Specify the action to dispatch.
 *
 * @param action The action function.
 */
export function t<S>(action: Action<S, void>): Dispatchable<S, any>;

/** Specify the action to dispatch.
 *
 * @param action The action function.
 */
export function t<S, AcceptDPayload>(action: Action<S, AcceptDPayload>): Dispatchable<S, AcceptDPayload>;

/** Specify the action to dispatch.
 *
 * @param action The action function.
 */
export function t<S, AcceptDPayload>(action: ActionWithEffects<S, void, AcceptDPayload>): Dispatchable<S, AcceptDPayload>;

/** Specify the action and payload creator to dispatch.
 *
 * @param action The action function.
 * @param payloadCreator The function to generate a parameter passed to action function.
 */
export function t<S, CPayload, AcceptDPayload>(action: Action<S, CPayload>, payloadCreator: PayloadCreator<AcceptDPayload, CPayload>): Dispatchable<S, AcceptDPayload, CPayload>;

/** Specify the action and custom payload to dispatch.
 *
 * @param action The action function.
 * @param payload The parameter passed to action function.
 */
export function t<S, CPayload>(action: Action<S, CPayload>, payload: (CPayload extends Function ? never : CPayload)): Dispatchable<S, any, CPayload>;

/** Specify the action and payload creator to dispatch.
 *
 * @param action The action function.
 * @param payloadCreator The function to generate a parameter passed to action function.
 */
export function t<S, CPayload, AcceptDPayload>(action: ActionWithEffects<S, CPayload, AcceptDPayload>, payloadCreator: PayloadCreator<AcceptDPayload, CPayload>): Dispatchable<S, AcceptDPayload, CPayload>;

/** Specify the action and custom payload to dispatch.
 *
 * @param action The action function.
 * @param payload The parameter passed to action function.
 */
export function t<S, CPayload, AcceptDPayload>(action: ActionWithEffects<S, CPayload, AcceptDPayload>, payload: (CPayload extends Function ? never : CPayload)): Dispatchable<S, AcceptDPayload, CPayload>;