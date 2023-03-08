import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-seller-form',
  templateUrl: './new-seller-form.component.html',
  styleUrls: ['./new-seller-form.component.css']
})
export class NewSellerFormComponent {
  @Input() showStatus:boolean|undefined;
  @Output() hideForm=new EventEmitter<boolean>()

  toggle(){
    this.showStatus=!this.showStatus
    this.hideForm.emit(this.showStatus)
    console.log("mmmm");
    console.log(this.showStatus);
    
    
  }
}
