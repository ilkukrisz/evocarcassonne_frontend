import { Component, Injectable, Input, OnInit } from "@angular/core";
import { GameService } from "../api/game.service";

@Component({
  selector: "create-game",
  templateUrl: "./create.component.html"
})
@Injectable()
export class CreateComponent implements OnInit {
  playerName: any;
  title: string;
  public gameId: string;

  ngOnInit(): void {
    this.playerName = null;
    this.title = "Create a new game";
  }

  constructor(private gameService: GameService) {}
  createGame(): void {
    console.log(this.playerName);
    if (this.playerName != null && this.playerName != "")
      this.gameService.createNewGame(this.playerName, (result: string) => {
        this.gameId = result;
        this.playerName = null;
      });
  }
}
