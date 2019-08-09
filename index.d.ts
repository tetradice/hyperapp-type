// TypeScript Version: 3.1

import { Action, ActionWithEffects, PayloadCreator, Dispatchable } from "hyperapp";

/** Action wrapper for strict typing.
 *
 * @param action The action function.
 * @param payload The parameter passed to action function.
 * @memberOf [App]
 */
export function t<S>(action: Action<S, void>): Dispatchable<S, any>;
export function t<S, AcceptDPayload>(action: Action<S, AcceptDPayload>): Dispatchable<S, AcceptDPayload>;
export function t<S, AcceptDPayload>(action: ActionWithEffects<S, void, AcceptDPayload>): Dispatchable<S, AcceptDPayload>;
export function t<S, CPayload, AcceptDPayload>(action: Action<S, CPayload>, payload: PayloadCreator<AcceptDPayload, CPayload>): Dispatchable<S, AcceptDPayload, CPayload>;
export function t<S, CPayload>(action: Action<S, CPayload>, payload: (CPayload extends Function ? never : CPayload)): Dispatchable<S, any, CPayload>;
export function t<S, CPayload, AcceptDPayload>(action: ActionWithEffects<S, CPayload, AcceptDPayload>, payload: PayloadCreator<AcceptDPayload, CPayload>): Dispatchable<S, AcceptDPayload, CPayload>;
export function t<S, CPayload, AcceptDPayload>(action: ActionWithEffects<S, CPayload, AcceptDPayload>, payload: (CPayload extends Function ? never : CPayload)): Dispatchable<S, AcceptDPayload, CPayload>;