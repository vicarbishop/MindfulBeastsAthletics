import { Component, ViewEncapsulation } from '@angular/core';
import { Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faFootball } from '@fortawesome/free-solid-svg-icons';

export interface Tutorial { 
    title?: string; 
    image?: string; 
}

@Component({
  selector: 'app-landingpage-green',
  standalone: true,
  imports: [CarouselModule, ImageModule, FontAwesomeModule],
  templateUrl: './landingpage-green.component.html',
  styleUrl: './landingpage-green.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LandingpageGreenComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  responsiveOptions: any[] | undefined;
  tutorials: Tutorial[] = [];
  faBasketball = faBasketball;
  faFootball = faFootball;

  constructor(@Inject(PLATFORM_ID) private platformId: object,) {

  }

  ngOnInit() {

    this.tutorials = [ 
        { 
            title: 'Web MH ', 
            image: '../../assets/bballWinter2024Champs300H.png'
        }, 
        { 
            title: 'Interview Experience ', 
            image: "../../assets/bballKendallErvin300.jpg", 
        }, 
        { 
            title: 'GeeksforGeeks Logo ', 
            image: "../../assets/ErvinKendall300.jpg" , 
        }, 
        { 
            title: 'GeeksforGeeks Carnival ', 
            image: "../../assets/bballErvinJumpball300.jpg", 
        }, 
        { 
            title: 'Python Course ', 
            image: "../../assets/fballErvinCoaching300.jpg", 
        }, 
        { 
            title: 'GeeksforGeeks Logo ', 
            image: "../../assets/FootballErvinRon300.jpg" , 
        }, 
        { 
            title: 'GeeksforGeeks Carnival ', 
            image: "../../assets/footballErvin300.jpg", 
        }, 
        { 
            title: 'Python Course ', 
            image: "../../assets/DicksonTeam300.jpg", 
        }
    ]; 
    
    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}

}


