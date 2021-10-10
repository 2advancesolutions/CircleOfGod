import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
const random = require('random-number');


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class MainLayoutComponent implements OnInit {
  constructor( private supabaseService: SupabaseService) {}

  public displayModal: boolean = false;
  public displayBasic: boolean = false;
  public displayBasic2: boolean = false;
  public displayMaximizable: boolean = false;
  public displayPosition: boolean = false;
  public position!: string;
  public disableAdd: boolean = true;
  public title = "Welcome To Circle Of God Network";
  public timeLineScreen: boolean = false;
  public header: string = '';
  public websiteUrl: string = '';
  public phone: string = '';
  public userProfile: any;

  ngOnInit(): void {
  this.userProfile = this.supabaseService.user;
  // TODO move logic to ad banner component
  // Add breath first search to cal next banner base users likes toggle between paid subscriptons 
    this.showPositionDialog('right');
    const options = { min: 1, max: 2, integer: true };
    const number = random(options);
   
    switch(number) {
      case 1:
        this.title = "Welcome To Circle Of God Network";
        this.timeLineScreen = true;
        break;
      case 2:
        this.title = "Paid Ad";
        this.header = 'Chicago Prime Time Marketing'
        this.timeLineScreen = false;
        this.websiteUrl = 'www.cprimetime.com';
        this.phone = '445-443-4432'
        break;
      default:
        this.title = "Welcome To Circle Of God Network";
        this.timeLineScreen = true;
    }
    //////////

  }

  public showModalDialog() {
    this.displayModal = true;
  }

  public showBasicDialog() {
    this.displayBasic = true;
  }

  public showBasicDialog2() {
    this.displayBasic2 = true;
  }

  public showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  public showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
}
