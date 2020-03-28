import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-restore',
  templateUrl: './password-restore.component.html',
  styleUrls: ['./password-restore.component.css']
})
export class PasswordRestoreComponent implements OnInit {

  email: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('123')
  }
}
