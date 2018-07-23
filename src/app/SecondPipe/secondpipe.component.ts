import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'str'
})

export class StringReverse implements PipeTransform{
    transform()
}