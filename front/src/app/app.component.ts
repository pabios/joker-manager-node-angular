import {Component, Inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterState} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  visible = false;
  size: 'large' | 'default' = 'default';

  // new message
  isVisible = false;
  isOkLoading = false;
  receiverAdminId !: string

  constructor(
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.handleRouteEvents();
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     gtag('config', 'G-KQ36257PE0', { 'page_path': event.urlAfterRedirects });
    //   }
    // })

    this.receiverAdminId = environment.adminId;
  }


  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href
        })
        gtag('config', 'G-KQ36257PE0', { 'page_path': event.urlAfterRedirects }); //
      }
    });
  }
  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }


  //

  get title(): string {
    // return `${this.size} Drawer`;
    return 'Filtre'
  }

  showDefault(): void {
    this.size = 'default';
    this.open();
  }
  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  //

  showModal(  id: string): void {
    this.isVisible = true;
    this.receiverAdminId = id
    // console.log("bonjour show modal is cliquer")
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 100);
    this.router.navigateByUrl('chat')

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  protected readonly Number = Number;
}
