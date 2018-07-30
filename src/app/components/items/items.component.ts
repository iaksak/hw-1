import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  rewiewsShown: boolean = false;

  map = new Map<any, boolean>();

  items: any[] = [{
      name: "Salmon - Canned",
      price: "$91.56",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Denis",
          text: "Some review text"
        }
      ]
    },
    {
      name: "Soup - Beef, Base Mix",
      price: "$126.14",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      review: [
        {
          name: "Ivan",
          text: "Some review text"
        },
        {
          name: "Maks",
          text: "Some review text"
        }
      ]
    },
    {
      name: "Jumbo maryland crabs",
      price: "$130.14",
      info: "Maryland jumbo blue crabs from the Chesapeake Bay are the best crabs in the world.",
      review: [
        {
          name: "Dmitry",
          text: "Not bad"
        },
        {
          name: "Lucy",
          text: "I afraid this shit"
        }
      ]
    }

    ]

  constructor() {
  }

  ngOnInit() {
  }


  public  isShowReviews(obj: any): boolean {
    if (this.map.get(obj) === true)
      return true;

    return false;
  }

  public  toggleShowReviews(obj: any) {
    if (this.map.get(obj) === true)
      this.map.set(obj, false);
    else
      this.map.set(obj, true);
  }

  public deleteItem(obj: any) {
    let index = this.items.indexOf(obj, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

}
