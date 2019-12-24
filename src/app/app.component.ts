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
  
}
