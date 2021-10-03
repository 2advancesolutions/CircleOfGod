import { Component, ElementRef, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {


  constructor( private el: ElementRef) { 
   
  }

  ngOnInit(): void {}

  public showMenu() {
    this.el.nativeElement.getElementById("btnMenu").getElementsByTagName("span")[0].classList.toggle("i_open");
    this.el.nativeElement.getElementById("btnMenu").getElementsByTagName("span")[1].classList.toggle("i_close");
    this.el.nativeElement.getElementById("PopUp").classList.toggle("show");
  }

}
