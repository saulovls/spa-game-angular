import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {} from '../app.component';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  constructor(private _snackBar: MatSnackBar) {}

  durationInSeconds = 5;
  exibir: boolean = false;
  currentPosition: string = '';
  pointsX: number = 0;
  pointsO: number = 0;
  pseudoTrue: boolean = false;
  winner: string = 'Nenhum';
  lastWinner: string = 'Nenhum';
  currentPlayer: string = 'X';
  playerX: string = 'X';
  playerO: string = 'O';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  addMove(line: number, col: number) {
    switch (this.currentPlayer) {
      case this.playerX:
        if (this.board[line][col] == '' && this.winner == 'Nenhum') {
          this.board[line][col] = this.playerX;

          // verificar se é o movimento vencedor
          if (this.verifyWinner(this.currentPlayer) == true) {
            this.winner = this.currentPlayer;
            this.pointsX++;
            this.getNotified(`O jogador ${this.winner} venceu!`, 'fechar');
            break;
          }
          this.currentPlayer = this.playerO;
        }
        break;
      case this.playerO:
        if (this.board[line][col] == '' && this.winner == 'Nenhum') {
          this.board[line][col] = this.playerO;

          // verificar se é o movimento vencedor
          if (this.verifyWinner(this.currentPlayer) == true) {
            this.winner = this.currentPlayer;
            this.pointsO++;
            this.getNotified(`O jogador ${this.winner} venceu!`, 'Fechar');
            break;
          }
          this.currentPlayer = this.playerX;
        }
        break;
      default:
        break;
    }
  }

  verifyWinner(player: string): boolean {
    // verificando se a linha é completa
    for (let index = 0; index < this.board.length; index++) {
      if (
        this.board[index][0] == player &&
        this.board[index][1] == player &&
        this.board[index][2] == player
      ) {
        return true;
      }
    }

    // verificando se a coluna é completa
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player
      ) {
        return true;
      }
    }

    // verificando se a diagonal é completa
    if (
      (this.board[0][0] == player &&
        this.board[1][1] == player &&
        this.board[2][2] == player) ||
      (this.board[0][2] == player &&
        this.board[1][1] == player &&
        this.board[2][0] == player)
    ) {
      return true;
    }
  }

  getNotified(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  resetBoard() {
    this.currentPlayer = 'X';
    this.lastWinner = this.winner;
    this.winner = 'Nenhum';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  resetCounts() {
    this.lastWinner = 'Nenhum';
    this.pointsX = 0;
    this.pointsO = 0;
  }
}
