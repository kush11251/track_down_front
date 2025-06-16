import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { ToastService } from '../../shared/services/toast.service';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-account-activated',
  templateUrl: './account-activated.component.html',
  styleUrl: './account-activated.component.css'
})
export class AccountActivatedComponent implements OnInit{
  userId: string = ""
  showActivated: boolean = false

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastService: ToastService,
    private utlsService: UtilsService
  ) {
    this.userId = this.route.snapshot.queryParamMap.get('usrId') || ""

    this.utlsService.clearQueryParams()
  }

  ngOnInit(): void {
    this.apiService.confirmUser(this.userId).subscribe({
      next: (loginRes) => {
        console.log('✅ Activated Successful:', loginRes);

        this.showActivated = true

        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 5000);
      },
      error: (err) => {
        console.error('❌ Activation Failed:', err);

        this.showActivated = false

        this.toastService.show("Activation Failed", "error")
      }
    });
  }
}
