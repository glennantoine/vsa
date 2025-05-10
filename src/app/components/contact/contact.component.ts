import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}