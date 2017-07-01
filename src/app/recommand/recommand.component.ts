import { Component, OnInit } from "@angular/core";
import { Book } from "../book";
import { AppService } from "../app.service";

@Component({
    selector: "read-command",
    templateUrl: "./recommand.component.html",
    providers: [AppService]
})

export class ReadRecommandComponent implements OnInit {
    recommandBooks: Book[];
    constructor(private appService: AppService) {}
    ngOnInit() {
        this.recommandBooks = this.appService.getRecommandBooks();
    }
}