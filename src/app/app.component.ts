import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToastComponent } from './shared/components/toast/toast.component';

import { UtilsService } from './shared/services/utils.service';
import { ApiService } from './shared/services/api.service';
import { ToastService } from './shared/services/toast.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'track_down_front';

  org_id: string = ""

  constructor(
    private route: ActivatedRoute,
    private utilsService: UtilsService,
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.utilsService.getSessionStorage("org_id")) {
      this.org_id = this.utilsService.getSessionStorage("org_id")
    } else {
      this.setOrgValue()
    }

    if(this.org_id) {
      this.callOrgApi()
    } else {
      console.log("Empty Org Id")
    }
  }

  setOrgValue() {
    let currentRoute = this.route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    currentRoute.queryParams.subscribe(params => {
      this.org_id = params['org_id'] || "";

      if (this.org_id) {
        this.utilsService.setSessionStorage("org_id", this.org_id)

        this.utilsService.clearQueryParams(); // Optional: remove query param after use
      }
    });
  }

  callOrgApi() {
    this.apiService.getOrgDetails(this.org_id).subscribe({
      next: (res) => {
        console.log('✅ Details Fetched:', res);

        this.utilsService.setSessionStorage('org_id', this.org_id)

        this.utilsService.clearQueryParams()

        this.toastService.show("Success", "success");
      },
      error: (err) => {
        console.error('❌ Error Fetching Details:', err);
        this.toastService.show("Invalid Org Details", "error");
      }
    });
  }
}
