import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent {

  @Output() newClickEvent = new EventEmitter<boolean>();
  @Input() showStatus:boolean|undefined;

  toggle(){
    this.showStatus = !this.showStatus
    this.newClickEvent.emit(this.showStatus);
    console.log(this.showStatus);
    
    console.log("muna");
    
  }
}
