import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';
import { Observable, of } from 'rxjs';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    characters$: Observable<CharactersDTO[]> = of([
        {
            id:"1",
            name:'Okabe Rintaro',
            imageUrl:'https://static.wikia.nocookie.net/steins-gate/images/7/75/Rintaro_Profile-1.png',
            bio:'Okabe is a self-proclaimed mad scientist who often goes by the pseudonym Hououin Kyouma. He is the founder of what he calls the "Future Gadget Laboratory" in Akihabara, where he spends most of his time and has dubbed himself Lab Member No. 001 (as he is the first person to join).',
            department: [
                {
                    depname: "Future Gadget Lab",
                    characterCount: 1
                }
            ]
        },
        {
            id:"2",
            name:'Mayuri Shiina',
            imageUrl:'https://static.wikia.nocookie.net/steins-gate/images/0/0e/Mayuri_Shiina.png',
            bio:'Mayuri is very perceptive, often being surprisingly quick to catch things no one else notices, and being good at understanding how others feel.',
            department: [
                {
                    depname: "Future Gadget Lab",
                    characterCount: 2
                }
            ]
        },
        {
            id:"3",
            name:'Makise Kurisu',
            imageUrl:'https://static.wikia.nocookie.net/steins-gate/images/8/83/Kurisu_profile.png',
            bio:'Kurisu is generally a sensible, serious mature young woman, usually calm and collected even when someone is acting tense in front of her. However, she can also show a much more timid side at times.',
            department: [
                {
                    depname: "Future Gadget Lab",
                    characterCount: 3
                }
            ]
        },
    ])
}

