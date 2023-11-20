import { useRouter } from "next/router";
import { getEventById } from "../../dummydata";

function EventDetail() {
  const router = useRouter();
  const event = getEventById(router.query.id);
  console.log(event);
  if (!event) {
    return <p>No event found!</p>;
  }
  return <div>Event</div>;
}

export default EventDetail;
