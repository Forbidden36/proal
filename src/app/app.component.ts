import { Component } from '@angular/core';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    // private modalService: NgbModal
    ) { }
  title = 'Okov';
  // username: String = ''
  // password: String = ''

  // open(content: any){ MODAL
  //   this.modalService.open(content)
  // }
//   userForm = new UntypedFormGroup({
//     username: new UntypedFormControl(''),
//     password: new UntypedFormControl('') 
// })

// onSubmit() {
//   this.username = this.userForm.value.username;
//   this.password = this.userForm.value.password;
//   console.log(this.username);
//   console.log(this.password)
//   this.userForm.reset()
//   this.modalService.dismissAll()
// }

}
