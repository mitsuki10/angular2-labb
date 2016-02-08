import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'search-result',
    styles: [`
        figure {
            margin: 10px;
            width: 200px;
        }
    `],
    template: `
        <figure class="figure" *ngFor="#show of searchResultStream | async" (click)="onSubscribe(show)">
            <img [src]="show.image?.medium" [alt]="show.name" class="figure-img img-fluid img-rounded" />
            <figcaption class="figure-caption">{{show.name}} ({{ show.premiered | date:'y' }})</figcaption>
        </figure>
    `
})
class SearchResult {
    @Input('resultStream') searchResultStream = [];
    @Output() subscribe = new EventEmitter();

    onSubscribe(show) {
        this.subscribe.emit(show);
    }
}

export default SearchResult;
export {SearchResult};