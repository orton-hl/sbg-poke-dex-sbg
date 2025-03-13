import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {NavigationEnd, Router} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private router: Router = inject(Router);
  private routerSub$: Subscription;
  pokemonName: string | undefined;

  ngOnInit(): void {
    this.routerSub$ = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('pokemon-details')) {
          const urlSegments = event.url.split("/")
          this.pokemonName = urlSegments[urlSegments.length - 1];
        }
        else this.pokemonName = undefined
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub$?.unsubscribe();
  }
}
