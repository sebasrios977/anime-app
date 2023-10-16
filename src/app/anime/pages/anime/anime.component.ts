import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  private id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
  }


}
