import { Component, OnInit } from '@angular/core';
import { S1Service } from '../service/s1.service';
import { S2Service } from '../service/s2.service';
import { S3Service } from '../service/s3.service';

@Component({
  providers: [S3Service],
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
})
export class DiComponent implements OnInit {
  constructor(
    private s1: S1Service,
    private s2: S2Service,
    private s3: S3Service
  ) {}

  ngOnInit(): void {
    this.s1.log();
    this.s2.log();
    this.s3.log();
  }
}
