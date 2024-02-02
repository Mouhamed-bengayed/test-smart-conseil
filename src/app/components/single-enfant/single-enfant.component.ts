import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChildService } from 'src/app/service/enfant.service';

@Component({
  selector: 'app-single-enfant',
  templateUrl: './single-enfant.component.html',
  styleUrls: ['./single-enfant.component.css']
})
export class SingleEnfantComponent {
  Form!:FormGroup;

  @Input() enfant:any;
  enfantSelectionne: any;
  constructor(private enfantservice:ChildService){}

 onClick(enfant: any) {
    this.enfantSelectionne = enfant;

  }
onSubmit() {
  this.enfantservice.updateChild(this.enfant).subscribe((data) => { console.log('Here profil : ',data); },
  (err) => { console.log('edit profil error : ',err); });
}
}
