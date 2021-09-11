import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent implements OnInit {
  constructor() { }
  public items!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Post New Ad',
        icon: 'pi pi-fw pi-image',
        items: [
          {
            label: 'Live Ad',
            icon: 'pi pi-fw pi-video',
            items: [
              {
                label: 'Post New Ad',
                icon: 'pi pi-plus',
              },
              {
                label: 'Delete Ad',
                icon: 'pi pi-minus',
              },
            ],
          },
          {
            label: 'Wall Ad',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Post New Add',
                icon: 'pi pi pi-plus',
              },
              {
                label: 'Delete Ad',
                icon: 'pi pi-minus',
              },
            ],
          },
        ],
      }, 
      
      {
        label: 'Go Live',
        icon: 'pi pi-fw pi-video',
      },
    ];
  }

}
