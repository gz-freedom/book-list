import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ReadService } from './read.service';

@Component({
    selector: "read",
    templateUrl: "./read.component.html",
    providers: [ReadService]
})

export class ReadComponent implements OnInit {
    books: Book[];
    constructor(private readService: ReadService) {}
    ngOnInit(): void {
        this.books = this.readService.getReadBooks();
    }
}