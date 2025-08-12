function Time() {

  // Create a new Date object
  let now = new Date();

  // Get date parts
  let day = String(now.getDate()).padStart(2, '0');      // dd
  let month = String(now.getMonth() + 1).padStart(2, '0'); // mm (months are 0-indexed)
  let year = now.getFullYear();                          // yyyy

  // Get time parts
  let hours = String(now.getHours()).padStart(2, '0');   // hh
  let minutes = String(now.getMinutes()).padStart(2, '0'); // mm
  let seconds = String(now.getSeconds()).padStart(2, '0'); // ss

  // Format date and time
  let currDate = `${day}/${month}/${year}`;
  let currTime = `${hours}:${minutes}:${seconds}`;

  return (
    <p>This the current date and time: {currDate} - {currTime}</p>
  );
}

export default Time;