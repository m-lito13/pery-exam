export class DateHelper { 
    manualConvertToUTC(date: Date): Date {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    }

    dateDiffSeconds(date1:Date , date2:Date) : number { 
        const diffInTime = date2.getTime() - date1.getTime();
        return Math.round(diffInTime / 1000);
    }
    
}