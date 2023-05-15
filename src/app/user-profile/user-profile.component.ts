import { Component } from '@angular/core';
import { user } from './user'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

user = new user("John", "Doe", 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg' )

hide = function(){
  let userAge:any = document.getElementById("userAge")
  userAge.classList.toggle("hidden");
}

}
