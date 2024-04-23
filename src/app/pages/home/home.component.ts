import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers: [GlobalService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  dateYear = formatDate(new Date(), 'yyyy', 'en');

  constructor(public globalService: GlobalService) {}

  ngOnInit() {}
}
