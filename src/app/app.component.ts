import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';
import { HeaderBlueComponent } from '../app/header-blue/header-blue.component';
import { FooterBlueComponent } from '../app/footer-blue/footer-blue.component';
import { HeaderGreenComponent } from '../app/header-green/header-green.component';
import { FooterGreenComponent } from '../app/footer-green/footer-green.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,HeaderBlueComponent, FooterBlueComponent,HeaderGreenComponent, FooterGreenComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MBA-RJB';
  colorChoice:string = '';

  load(load: string){
    
    if(load == 'red'){
      this.colorChoice = 'red';
    }
    else if(load == 'blue'){
      this.colorChoice = 'blue';
    }
    else if(load == 'green'){
      this.colorChoice = 'green';
    }

  }

}
