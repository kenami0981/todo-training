import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-characters-details', templateUrl: './characters-details.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CharactersDetailsComponent {
    params$ = this._activatedRoute.params;
    constructor(private _activatedRoute: ActivatedRoute) {}
}
