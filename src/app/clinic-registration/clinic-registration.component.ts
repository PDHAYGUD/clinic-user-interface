import { Component } from '@angular/core';
import { Clinic } from '../Clinic';
import {ClinicService} from '../ClinicService'

@Component({
  selector: 'app-clinic-registration',
  templateUrl: './clinic-registration.component.html',
  styleUrl: './clinic-registration.component.css'
})
export class ClinicRegistrationComponent {
clinic: Clinic = {
    clinic_name: '',
    location: '',
    contact_number: '',
    id:0,
    password: ''

  };

successMessage: string = '';

constructor(private ClinicService: ClinicService) {}

  submitForm(): void {
    console.log(this.clinic)
      this.ClinicService.registerClinic(this.clinic)
        .subscribe(
           (response: any) => {
            console.log('Clinic registration successful', response);
              this.successMessage = 'Clinic registered successfully';

           },
         (error: any) => {
            console.error('Error registering clinic', error);
            // Handle error as needed
          }
        );
    }
}
