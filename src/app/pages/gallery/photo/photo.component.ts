import { Component, Input  } from '@angular/core';
import { Photo } from '../../../models/photos';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
 @Input()
photo!:Photo

}
