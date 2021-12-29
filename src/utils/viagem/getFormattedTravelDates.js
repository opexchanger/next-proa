import { format, intervalToDuration } from 'date-fns';

export default function getFormattedTravelDates(travel) {
  travel.duration = intervalToDuration({
    start: new Date(travel.departureDate),
    end: new Date(travel.returnDate),
  }).days;
  travel.departureDate = format(new Date(travel.departureDate), 'dd/MM');
  travel.returnDate = format(new Date(travel.returnDate), 'dd/MM');

  return travel;
}