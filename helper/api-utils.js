export async function getAllEvents(){
   const response = await fetch("https://react-auth-56197-default-rtdb.firebaseio.com/events.json");
   const data = await response.json();


      const fetchedEvents = [];
      for (const key in data){
        const event = {
          id:key,
          ...data[key]
        }
        fetchedEvents.push(event);
      }

      return fetchedEvents;
}


export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}


export async function getEventById(id) {
  // console.log(id);
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}