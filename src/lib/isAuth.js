export default function() {
  return localStorage.getItem('token') ? true : false;
}
