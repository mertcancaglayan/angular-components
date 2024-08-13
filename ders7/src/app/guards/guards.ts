import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  ResolveFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('can activate guard');

  return true;
};

export const canActivateChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('child');
  return false;
};

export const canDeactivateGuard: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  console.log('candeactive guard');
  return true;
};

export const photosResolver: ResolveFn<any> = (route, state) => {
  const httpClient = inject(HttpClient);
  return httpClient.get('https://jsonplaceholder.typicode.com/photos');
};

export const isAdminGuard: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
  ) => {
    return !!localStorage.getItem('admin');
  };

export const isUserGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return !localStorage.getItem('admin');
};
