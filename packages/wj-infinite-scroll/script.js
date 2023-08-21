// Predpokladáme, že máte nejaký zoznam dát na serveri
var data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  // ... ďalšie dáta
];

// Funkcia na načítanie dát s pagináciou
function fetchDataWithPagination(page, size) {
  var startIndex = (page - 1) * size;
  var endIndex = startIndex + size;

  var pageData = data.slice(startIndex, endIndex);
  return pageData;
}

// Serverová časť, ktorá očakáva parametre "page" a "size" a vráti dáta
function handleRequest(request) {
  var url = new URL(request.url);
  var page = parseInt(url.searchParams.get('page'));
  var size = parseInt(url.searchParams.get('size'));

  var pageData = fetchDataWithPagination(page, size);

  var response = {
    status: 'success',
    data: pageData
  };

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}

// Spracovanie HTTP požiadavkov
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
