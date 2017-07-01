import { Injectable } from "@angular/core";
import { Book } from "./book"
import { BOOKS } from "./mock-books"

@Injectable()

export class AppService {
    getReadingBooks(): Book[] {
        return BOOKS.filter((book) => {
            return book.state === 2;
        });
    }
    getToReadBooks(): Book[] {
        return BOOKS.filter((book) => {
            return book.state === 1;
        });
    }
    getRecommandBooks(): Book[] {
        return BOOKS.filter((book) => {
            return book.state === 0;
        });
    }
}