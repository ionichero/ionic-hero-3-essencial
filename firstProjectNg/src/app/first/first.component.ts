import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name = 'First Component';

  data = {
     'name': 'Nanderson',
     'email': 'nandokstro@gmail.com'
  };
  currency = 19.90;


  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  showAnything(name) {
      this.storage.add('test', name);
  }

}
