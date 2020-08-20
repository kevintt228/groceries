import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'my-app-list',
    templateUrl: 'list.component.html',
    styleUrls: [ 'list.component.scss' ]
})

export class ListComponent implements OnInit {
    groceryList: Array<Object>;
    constructor() {
        this.groceryList = new Array();
     }

    ngOnInit() { 
        this.groceryList.push({name: "Apples"});
        this.groceryList.push({name: "Bananas"});
        this.groceryList.push({name: "Oranges"});
    }
}