
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-sights',
  templateUrl: './sights.component.html',
  styleUrls: ['./sights.component.css']
})
export class SightsComponent implements AfterViewInit, OnInit {

  constructor(private _sanitizer: DomSanitizer) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    $(function () {
      $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);

      })


    })
  }
 
  setVideoURL(videoURL) {
    return this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoURL);
  }
}
