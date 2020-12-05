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

  addMove(line: number, col: number): void {
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
            this.getNotified(`O jogador ${this.winner} venceu!`, 'fechar');
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
    for (let index = 0; index < this.board.length; index++) {
      if (
        this.board[0][index] == player &&
        this.board[1][index] == player &&
        this.board[2][index] == player
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

  getNotified(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });

    setTimeout(() => {
      this.resetBoard();
    }, 3150);
  }

  resetBoard(): void {
    this.currentPlayer = 'X';
    this.lastWinner = this.winner;
    this.winner = 'Nenhum';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  resetCounts(): void {
    this.lastWinner = 'Nenhum';
    this.pointsX = 0;
    this.pointsO = 0;
  }
}
