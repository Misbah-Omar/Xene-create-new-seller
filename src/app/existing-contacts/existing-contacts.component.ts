import { Component } from '@angular/core';

@Component({
  selector: 'app-existing-contacts',
  templateUrl: './existing-contacts.component.html',
  styleUrls: ['./existing-contacts.component.css']
})
export class ExistingContactsComponent {
  contacts = [
    { id: 1, name: 'Kelly Williamson', position: 'General Manager', email: 'kelly.williamson@company.com', phone: '+47 589 55 458', Image: '../../assets/girl1.jpg'},
    { id: 2, name: 'Brandon Hoffman', position: 'General Manager', email: 'brandon.hoffman@company.com', phone: '+47 589 55 458', Image: '../../assets/boy1.jpg'},
    { id: 3, name: 'Eliza Miller', position: 'General Manager', email: 'eliza.miller@company.com', phone: '+47 589 55 458', Image: '../../assets/girl2.jpg'}
  ];
}
