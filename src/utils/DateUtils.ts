import moment from"moment";

export default function DateToDateTimeFormated(date: string) {
    return (moment(date)).format('DD/MM/YYYY - HH:mm')
}

export function DateToDateFormated(date: string) {
    return (moment(date)).format('DD/MM/YYYY')
}

export function DateToTimeFormated(date: string) {
    return (moment(date)).format('HH:mm')
}