import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  :host ::ng-deep .p-button {
    margin-right: 0.5rem;
  }

  :host ::ng-deep .p-buttonset {
    .p-button {
      margin-right: 0;
    }
  }

  :host ::ng-deep .sizes {
    .button {
      margin-bottom: 0.5rem;
      display: block;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .p-button {
      margin-bottom: 0.5rem;

      &:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
      }
    }

    .p-buttonset {
      .p-button {
        margin-bottom: 0;
      }
    }
  }
  `]
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  loading = [false, false, false, false]

    load(index) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
