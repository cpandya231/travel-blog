
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-sights',
  templateUrl: './sights.component.html',
  styleUrls: ['./sights.component.css']
})
export class SightsComponent implements AfterViewInit {
  
  constructor( private _sanitizer: DomSanitizer){
    
 }

  ngAfterViewInit() {
    $(function(){
      $(window).on("load resize",function(){
        $(".fill-screen").css("height",window.innerHeight);
        
      })

      // $('body').scrollspy({ target: '.navbar' })
      
    })
}

setVideoURL(videoURL){
  return this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+videoURL);
}
}
