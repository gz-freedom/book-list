import { Component, OnInit } from "@angular/core";
import { Book } from "../book";
import { AppService } from "../app.service"

@Component({
    selector: "to-read",
    templateUrl: "./toread.component.html",
    providers: [AppService]
})

export class ToReadComponent implements OnInit {
    toReadBooks: Book[];
    constructor(private appService: AppService) {}
    ngOnInit() { 
        this.toReadBooks = this.appService.getToReadBooks();
    };
}