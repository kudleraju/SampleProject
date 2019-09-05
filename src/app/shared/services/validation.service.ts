import { Injectable } from '@angular/core';
import { Profile } from '../modals/profile';
import { User } from '../modals/user';


const profiles = [
  new Profile('op1', 'option1'),
  new Profile('op2', 'option2'),
  new Profile('op3', 'option3')
];

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  getProfiles(): Profile[] {
    return profiles;
  }

  createUser(user: User) {
    console.log('User Name: ' + user.userName);
    console.log('Gender: ' + user.gender);
    console.log('Profile: ' + user.profile.prName);
    console.log('T & C accepted?: ' + user.isTCAccepted);
  }

  constructor() { }
}