use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct TicTacToe {
    board: [u8; 9],
    current_player: u8,
    player1_score: u32,
    player2_score: u32,
}

#[wasm_bindgen]
impl TicTacToe {
    #[wasm_bindgen(constructor)]
    pub fn new() -> TicTacToe {
        TicTacToe {
            board: [0; 9],
            current_player: 1,
            player1_score: 0,
            player2_score: 0,
        }
    }
    
    pub fn get_board(&self) -> Vec<u8> {
        self.board.to_vec()
    }

    pub fn get_player1_score(&self) -> u32 {
        self.player1_score
    }

    pub fn get_player2_score(&self) -> u32 {
        self.player2_score
    }

    pub fn make_move(&mut self, index: usize) -> bool {
        if self.board[index] == 0 {
            self.board[index] = self.current_player;
            self.current_player = 3 - self.current_player;
            true
        } else {
            false
        }
    }

    pub fn check_winner(&mut self) -> u8 {
        const WINNING_COMBINATIONS: [[usize; 3]; 8] = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6],            // diagonals
        ];

        for combo in WINNING_COMBINATIONS.iter() {
            let [a, b, c] = *combo;
            if self.board[a] != 0 && self.board[a] == self.board[b] && self.board[b] == self.board[c] {
                let winner = self.board[a];
                if winner == 1 {
                    self.player1_score += 1;
                } else {
                    self.player2_score += 1;
                }
                return winner;
            }
        }

        if self.board.iter().all(|&x| x != 0) {
            3
        } else {
            0 
        }
    }

    pub fn reset_board(&mut self) {
        self.board = [0; 9];
        self.current_player = 1;
    }
}