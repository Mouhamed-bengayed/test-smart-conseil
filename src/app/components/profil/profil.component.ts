import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfilService } from 'src/app/service/userprofile.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent {
  profil: any = {};
  pfForm!:FormGroup;

  constructor(private profilService:ProfilService) { 
}
ngOnInit(){
  this.profilService.getUser().subscribe((data)=>{this.profil= data;});

}

  

onSubmit() {
  this.profilService.updateUser(this.profil).subscribe((data) => { console.log('Here profil : ',data); },
      (err) => { console.log('edit profil error : ',err); });
}

}
