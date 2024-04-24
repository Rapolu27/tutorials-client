import { Component } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { OtherService } from 'src/app/services/other.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.css'],
})
export class OtherServiceComponent {
  country: Country = {
    name: '',
    region: '',
    subregion: true,
    capital: ''
  };
  submitted = false;

  constructor(private otherService: OtherService) {}

  ngOnInit(): void {
    this.retrieveCountry();
  }

  retrieveCountry(): void {
    this.otherService.get().subscribe({
      next: (data) => {
        this.country = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}