import { Component } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private profileService: ProfileService) { }

  profile!: Profile;

  ngOnInit() {
    this.profile = new ProfileService().getProfile();
  }
}
