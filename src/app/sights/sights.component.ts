
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import prettyEmbed from 'jquery.waitforimages';
@Component({
  selector: 'app-sights',
  templateUrl: './sights.component.html',
  styleUrls: ['./sights.component.css']
})
export class SightsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $(function(){
      $(window).on("load resize",function(){
        $(".fill-screen").css("height",window.innerHeight);
        $('#my-video-display').prettyEmbed({
          videoID: 'aBcDeFg12345',
          previewSize: 'hd',				// use either this option...
          customPreviewImage: '',			// ...or this option
        
          // Embed controls
          showInfo: false,
          showControls: true,
          loop: false,
        
          colorScheme: 'dark',
          showRelated: false,
        
          useFitVids: true
        });
      })

      
    })
}
}
