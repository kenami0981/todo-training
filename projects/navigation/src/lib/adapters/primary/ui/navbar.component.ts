import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({ selector: 'lib-navbar', templateUrl: './navbar.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class NavbarComponent {
    elements$ =  of([
        {
            el: "HOME",
            path: "/home",
            class: "active",
        },
        {
            el: "CHARACTERS",
            path: "/postacie",
            class: "none",
        },
        {
            el: "ABOUT US",
            path: "/about-us",
            class: "none",
        },
        {
            el: "CONTACT",
            path: "/kontakt",
            class: "none",
        }

    ]);
}
