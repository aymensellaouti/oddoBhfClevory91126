import { Component, input, Input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-fils',
  styleUrl: './fils.css',
  templateUrl: './fils.html',
})
export class Fils {
  messageDePapa = input.required({
    alias: 'message',
    transform: (value) => 'Papa a dit : ' + value,
  });

  sendMessageToPapa = output<string>();

  onSendMessageToPapa() {
    this.sendMessageToPapa.emit("Ok ama nkhali el ba9i 3andi :D")
  }
}


