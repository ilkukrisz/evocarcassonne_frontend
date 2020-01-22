// tslint:disable: quotemark
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularDraggableModule } from "angular2-draggable";
import { MouseWheelDirective } from "./mousewheel.directive";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PlayerComponent } from "./player.component";
import { BoardComponent } from "./board/board.component";
import { CreateComponent } from "./create-game/create.component";
import { SubscribeComponent } from "./subscribe-game/subscribe.component";
import { InfoPanelComponent } from "../infopanel/infopanel.component";

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MouseWheelDirective,
    BoardComponent,
    CreateComponent,
    SubscribeComponent,
    InfoPanelComponent
  ],
  imports: [BrowserModule, HttpClientModule, AngularDraggableModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
