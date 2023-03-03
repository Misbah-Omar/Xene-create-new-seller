import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent {

  @Output() newClickEvent = new EventEmitter<boolean>();

  showFirst: boolean = true;

  toggle(){
    this.showFirst = !this.showFirst;
    this.newClickEvent.emit(this.showFirst);
  }
}
