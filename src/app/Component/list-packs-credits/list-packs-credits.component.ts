import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-list-packs-credits',
  templateUrl: './list-packs-credits.component.html',
  styleUrls: ['./list-packs-credits.component.css']
})
export class ListPacksCreditsComponent implements OnInit {
  credits:any[]=[];

  constructor(private cs:CreditService) { }

  ngOnInit(): void {
    this.cs.AfficherCreditPack().subscribe(data=>{
      this.credits=data;
      console.log(data)
    })
  }

}
