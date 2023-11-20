import { useRouter } from "next/router";
import { getEventById } from "../../dummydata";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";

function EventDetail() {
  const router = useRouter();
  const event = getEventById(router.query.id);
  console.log(event);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>{event.description}</EventContent>
    </>
  );
}

export default EventDetail;
