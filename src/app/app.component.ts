import { Component, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import * as $ from 'jquery';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  
  title = 'css-bootstrap';

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }
  
  ngAfterViewInit() {
    $(document).ready(function() {
      
        $(window).scroll(function() {
           if($(this).scrollTop() > 500) { 
             
               $('.navbar').addClass('scrolled');
           } else {
               $('.navbar').removeClass('scrolled');
           }
        });
    });
}
onActivate(event) {
  window.scroll(0,0);
  
}
scrollToElement(id:string){
  this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: "#"+id,
  });
}

  
}
