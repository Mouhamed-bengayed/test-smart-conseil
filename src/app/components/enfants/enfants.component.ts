import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/service/enfant.service';

@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})

export class EnfantsComponent implements OnInit{
  Data: any;
  constructor(
    private childService:ChildService
    ){}
  ngOnInit(){
    this.getChildData();
      }

      getlistechild(): void {
        this.childService.getChild().subscribe(
          (data: any) => {
            this.Data = data; 
          }
        );
      }


 

      getChildData(): void {
        this.Data = [
          {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
            first_name: 'ahmed',
            last_name: 'Doe',
            birthday: '2005-01-01',
            gender: 'M'
          },
          {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
            first_name: 'montasar',
            last_name: 'Doe',
            birthday: '2008-06-15',
            gender: 'F'
          },
        ];
      }

  reseauxSociaux: any[] = [
    {
      name: "Facebook",
      identifier: "facebook",
      icon: "https://img.freepik.com/vecteurs-premium/logo-medias-sociaux-bleu_197792-1759.jpg",
      iconn:"https://www.icone-png.com/png/22/21565.png",
      adr:"@jerrysmith20"

    },
    {
      name: "Twitter",
      identifier: "twitter",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
      iconn:"https://www.icone-png.com/png/22/21565.png",
      adr:"@jerrysmith20"

    },
    {
      name: "Instagram",
      identifier: "instagram",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      iconn:"https://www.icone-png.com/png/22/21565.png",
      adr:"@jerrysmith20"
    }
  ];
  
}

