import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  
  title = 'css-bootstrap';
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
  
  if (event.constructor.name==="HomeComponent"){ // for example
    $('.navbar').addClass('active');
}
  
}
  
}
