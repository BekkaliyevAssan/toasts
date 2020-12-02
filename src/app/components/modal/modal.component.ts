import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger("right" , [
      transition("void => *", [
        style({ transform: "translateX(200%)" }),
        animate(300)
      ]),
      transition("* => void", [
        animate(300, style({ transform: "translateX(200%)" }))
      ])
    ]),
    trigger("left", [
      transition("void => *", [
        style({ transform: "translateX(-200%)" }),
        animate(300)
      ]),
      transition("* => void", [
        animate(300, style({ transform: "translateX(-200%)" }))
      ])
    ]),
  ]
})
export class ModalComponent implements OnInit {

  @Input() closable = true;
  @Input() direction: string
  @Input() visibleRight: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.visibleRight = false;
    this.visibleChange.emit(this.visibleRight);
  }

}
