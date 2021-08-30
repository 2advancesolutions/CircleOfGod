import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-route-profile',
  templateUrl: './route-profile.component.html',
  styleUrls: ['./route-profile.component.scss']
})
export class RouteProfileComponent implements OnInit {

  public list: Array<any> = [{first: 'Reginald', last:'Bellas'}]

  public dockItems: MenuItem[] = [];

    ngOnInit() {
        this.dockItems = [
            {
                label: 'Finder',
                icon: "assets/showcase/images/dock/finder.svg"
            },
            {
                label: 'App Store',
                icon: "assets/showcase/images/dock/appstore.svg"
            },
            {
                label: 'Photos',
                icon: "assets/showcase/images/dock/photos.svg"
            },
            {
                label: 'Trash',
                icon: "assets/showcase/images/dock/trash.png"
            }
        ];
    }

}
