import { Component, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import * as $ from 'jquery';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  title = 'css-bootstrap';

  constructor(private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private wowService: NgwWowService
  ) {
    this.router.events.subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init(); 
    });
  }

  ngAfterViewInit() {
    $(document).ready(function () {

      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {

          $('.navbar').addClass('scrolled');
        } else {
          $('.navbar').removeClass('scrolled');
        }
      });
    });
  }
  onActivate(event) {
    window.scroll(0, 0);

  }
  scrollToElement(id: string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: "#" + id,
    });
  }


}
