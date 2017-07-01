import { Injectable } from "@angular/core";
import { Book } from "../book";
import { BOOKS } from "../mock-books";

@Injectable()

export class ReadService {
    getReadBooks(): Book[] {
        return BOOKS.filter((book) => {
            return book.state === 3;
        });
    }
}