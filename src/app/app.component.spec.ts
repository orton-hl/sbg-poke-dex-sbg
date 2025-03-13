import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {Observable, of, Subscription} from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
      declarations: [],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should set pokemonName when navigating to a pokemon-details route', () => {
  //   const testPokemonName = 'pikachu';
  //   const navigationEndEvent = new NavigationEnd(1, `/pokemon-details/${testPokemonName}`, `/pokemon-details/${testPokemonName}`);
  //
  //
  //   // @ts-ignore
  //   spyOn(router, 'events').and.returnValue(new Observable((observer) => {
  //     observer.next(navigationEndEvent);
  //     observer.complete();
  //   }));
  //
  //   component.ngOnInit();
  //
  //   expect(component.pokemonName).toBe(testPokemonName);
  // });

  // it('should reset pokemonName when navigating away from pokemon-details route', () => {
  //   const testPokemonName = 'pikachu';
  //   component.pokemonName = testPokemonName;
  //   const navigationEndEvent = new NavigationEnd(1, `/some-other-route`, `/some-other-route`);
  //
  //   // @ts-ignore
  //   spyOn(router, 'events').and.returnValue(of(navigationEndEvent));
  //
  //   component.ngOnInit();
  //   expect(component.pokemonName).toBeUndefined();
  // });

  it('should unsubscribe from router events on ngOnDestroy', () => {
    spyOn(component['routerSub$'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['routerSub$'].unsubscribe).toHaveBeenCalled();
  });
});

