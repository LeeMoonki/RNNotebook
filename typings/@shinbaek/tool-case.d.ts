interface DateStructure {
  year: number;
  month: number;
  date: number;
  day: number;
  week: number;
}

declare module '@shinbaek/tool-case' {
  export namespace tdate {
    export function isDate(date: Date): boolean;

    export function getLastDayOfMonth(year: number, month: number): Date;

    export function getNumOfWeeksOfMonth(year: number, month: number): number;

    export function getDatesOfMonth(year: number, month: number, onlyThisMonth: boolean): DateStructure[];
  }
}