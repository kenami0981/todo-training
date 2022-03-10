import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-characters-details-page', templateUrl: './characters-details.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CharactersDetailsPage {
    params$ = this._activatedRoute.params;
    constructor(private _activatedRoute: ActivatedRoute) {}
}
