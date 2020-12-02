import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

export const INTRO_KEY = 'intro-seen';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
  constructor( private router: Router ) { }

  async canLoad(): Promise<boolean> {
    const verIntro = await Storage.get({key: INTRO_KEY});

    if (verIntro && (verIntro.value === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/login', { replaceUrl: true });
      return true;
    }
  }
}
