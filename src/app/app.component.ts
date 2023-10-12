import { Component } from '@angular/core';
import { Product } from './Models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImage = true;


  onLoaded(img: string){
    console.log('log padre', img)
  }

  toggleImg(){
    this.showImage = !this.showImage;
  }
}
