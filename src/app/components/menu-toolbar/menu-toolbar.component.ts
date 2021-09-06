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
        label: 'My Account',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Edit Profile',
            icon: 'pi pi-fw pi-user',
          },
          {
            label: 'Privacy',
            icon: 'pi pi-fw pi-eye',
          },
          {
            separator: true,
          },
          {
            label: 'Payments',
            icon: 'pi pi-fw pi-credit-card',
          },
          {
            label: 'Subscriptons',
            icon: 'pi pi-fw pi-link',
          },
          {
            label: 'Logout',
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Post',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Add New Event',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete Event',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
     /*  {
        label: 'Reports',
        icon: 'pi pi-fw pi-chart-bar',
      }, */
      {
        label: 'Promote Ad',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Options',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Post New Live Ad',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Post New Wall Ad',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Post',
                icon: 'pi pi-fw pi-calendar-minus',
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
