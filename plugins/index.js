import moment from "moment";

function formatDate(dateStr){
  return moment(dateStr).format("dddd, MMMM Do YYYY, h:mm:ss a");
}

export default (_context, inject) => {
  inject("formatDate", formatDate);
}
