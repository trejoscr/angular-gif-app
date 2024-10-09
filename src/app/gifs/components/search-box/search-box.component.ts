import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private GifsService: GifsService ) {}

  //searchTag( newTag: String ) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
