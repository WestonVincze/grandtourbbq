<script lang="ts">
  import { EventData } from "$data";
  import { Pagination } from "$components";

  type Event = {
    title: string,
    desc: string,
    location: string, 
    weekdayRange: string,
    monthDayRange: string,
    timeRange: string,
  }

  // do we need to bother with ordinal?
  const ordinal = (number: number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const weekdayFormat = new Intl.DateTimeFormat("en", {
    weekday: "short",
  })

  const timeFormat = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
  })

  const monthDayFormat = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  })


  const events: Event[] = EventData.events.map(event => {
    const start = new Date(event.start);
    const end = new Date(event.end);

    return ({
      title: event.title,
      desc: event.desc,
      location: event.location,
      weekdayRange: weekdayFormat.formatRange(start, end),
      monthDayRange: monthDayFormat.formatRange(start, end),
      timeRange: event.allDay ? "All Day" : timeFormat.formatRange(start, end),
    })
  })

  let displayedEvents: Event[];
</script>

{#if displayedEvents}
{#each displayedEvents as event}
  <div class="event">
    <div>
      <span class="weekday-range">{event.weekdayRange}</span>
      <span class="red-emphasis">{event.monthDayRange}</span>
    </div>
    <div>
      <span class="title">{event.title}</span>
      <span class="location">{event.location}</span>
    </div>
    <div>
      <span class="time-range">{event.timeRange}</span>
    </div>
  </div>
{/each}
{/if}

<Pagination rows={events} perPage={6} bind:trimmedRows={displayedEvents} />

<style>
  .event {
    font-family: "Cantarell", Arial, sans-serif;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eee;
    padding: 15px 0;
    align-items: center;
  }

  .event > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .event > div:last-child {
    text-align: right;
  }

  .red-emphasis {
    color: var(--accent);
    font-size: 1.8rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .location {
    font-style: italic;
  }

</style>
