import { Component, OnInit } from "@angular/core";
import { Book } from "../book";
import { AppService } from "../app.service"

@Component({
    selector: "reading",
    templateUrl: "./reading.component.html"
})

export class ReadingComponent implements OnInit {
    readBooks: Book[];
    constructor(private appService: AppService) {}
    ngOnInit() {
        this.readBooks = this.appService.getReadingBooks();
    }
}