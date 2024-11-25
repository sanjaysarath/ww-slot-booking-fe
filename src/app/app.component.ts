import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule,IonicModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ww-slot-booking-fe';
}
