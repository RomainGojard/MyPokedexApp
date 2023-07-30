import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'AddUpCaseToFirstLetterPipe' })

export class AddUpCaseToFirstLetterPipe implements PipeTransform {
    transform(word: string | number) {
        if (typeof word === 'number') {
            word = word.toString();
        }
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }