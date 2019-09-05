import {Component} from '@angular/core';
import {Sort} from '@angular/material/sort';

export interface Dessert {
  phoneno: number;
  empid: number;
  email: number;
  name: string;
  address: number;
}

@Component({
    selector: 'app-nestedform',
    styleUrls: ['./nestedform.component.css'],
    templateUrl: './nestedform.component.html',
  })
export class NestedformComponent {
  desserts: Dessert[] = [
    {name: 'Raju kudle', phoneno: 9661, email: 6, empid: 24, address: 4},
    {name: 'Bhaskar', phoneno: 9659, email: 9, empid: 37, address: 4},
    {name: 'Giri', phoneno: 9660, email: 16, empid: 24, address: 6},
    {name: 'Yashwanth', phoneno: 9663, email: 4, empid: 67, address: 4},
    {name: 'Shiva', phoneno: 9662, email: 16, empid: 49, address: 4},
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'phoneno': return compare(a.phoneno, b.phoneno, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'empid': return compare(a.empid, b.empid, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}