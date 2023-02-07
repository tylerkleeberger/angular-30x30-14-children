import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Play } from '../play';
import { PlaysService } from '../plays.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play-detail',
  templateUrl: './play-detail.component.html',
  styleUrls: ['./play-detail.component.scss']
})
export class PlayDetailComponent implements OnInit{
  currentPlay: Play;
  originalTitle = '';

  constructor(
    private playsService: PlaysService,
    private route: ActivatedRoute, private router: Router
  ) { }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set play(value) {
    if(!value) return;
    this.currentPlay = {...value}
    this.originalTitle = this.currentPlay.title;
  }

  ngOnInit(): void {
    
  }

  currentId = null


}