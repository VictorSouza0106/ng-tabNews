import { Pipe, PipeTransform } from '@angular/core';

const SECONDS = 1000;
const MINUTES = 60;
const HOURS = 60;
const DAYS = 24;
const MONTH = 30;

@Pipe({
  name: 'timeDiff',
})
export class TimeDiffPipe implements PipeTransform {
  public diff: number;
  public timeSequence = [1, MONTH, DAYS, HOURS, MINUTES];
  public labesSequence = [
    ['mês', 'meses'],
    ['dia', 'dias'],
    ['hora', 'horas'],
    ['minuto', 'minutos'],
  ];
  public count: number = 0;

  transform(value: string | Date, ...args: unknown[]): unknown {
    let currentDate = new Date();
    let publishDate = new Date(value);

    let timeFormat: [time: number, label: string];
    let diffMilliseconds = currentDate.getTime() - publishDate.getTime();
    this.diff = diffMilliseconds / SECONDS / MINUTES / HOURS / DAYS / MONTH;

    this.count = 0;

    timeFormat = this.getTimeFormat(this.diff);

    return `${timeFormat[0]}  ${timeFormat[1]}  atrás`;
  }

  private getTimeFormat(diff: number): [time: number, label: string] {
    let label = null;

    diff *= this.timeSequence[this.count];

    if (Math.floor(diff) === 1) label = this.labesSequence[this.count][0];
    if (Math.floor(diff) > 1) label = this.labesSequence[this.count][1];

    if (label) {
      return [Math.round(diff), label];
    }

    this.count++;
    return this.getTimeFormat(diff);
  }
}
