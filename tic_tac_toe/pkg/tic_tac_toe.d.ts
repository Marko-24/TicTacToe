/* tslint:disable */
/* eslint-disable */
/**
*/
export class TicTacToe {
  free(): void;
/**
*/
  constructor();
/**
* @returns {Uint8Array}
*/
  get_board(): Uint8Array;
/**
* @returns {number}
*/
  get_player1_score(): number;
/**
* @returns {number}
*/
  get_player2_score(): number;
/**
* @param {number} index
* @returns {boolean}
*/
  make_move(index: number): boolean;
/**
* @returns {number}
*/
  check_winner(): number;
/**
*/
  reset_board(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_tictactoe_free: (a: number) => void;
  readonly tictactoe_new: () => number;
  readonly tictactoe_get_board: (a: number, b: number) => void;
  readonly tictactoe_get_player1_score: (a: number) => number;
  readonly tictactoe_get_player2_score: (a: number) => number;
  readonly tictactoe_make_move: (a: number, b: number) => number;
  readonly tictactoe_check_winner: (a: number) => number;
  readonly tictactoe_reset_board: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
