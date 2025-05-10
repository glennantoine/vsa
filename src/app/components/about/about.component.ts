import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [MatIconModule, RouterLink]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}