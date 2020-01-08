import { Component, Injectable, OnInit } from "@angular/core";
import { PlayerService } from "../api/player.service";
import { GameService } from "../api/game.service";

@Component({
  selector: "subscribe",
  templateUrl: "./subscribe.component.html"
})
@Injectable()
export class SubscribeComponent implements OnInit {
  ngOnInit(): void {
    this.playerName = "";
  }
  playerName: string;

  constructor(
    private PlayerService: PlayerService,
    private GameService: GameService
  ) {}

  subscribeGame() {
    this.PlayerService.subscribeGame(
      this.GameService.getCurrentGame(),
      this.playerName,
      result => console.log(result)
    );
  }
}
