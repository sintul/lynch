var target = [];

target.All = "https://google.com/"; // Redirects Non-targeted / all other visitors to this URL.
target.ID  = "https://google.co.id/";  // Redirects US Visitors to this URL.
target.GB  = "https://google.co.uk/";  // Redirects UK Visitors to this URL.
target.CA  = "https://google.co.ca/";  // Redirects Canadian Visitors to this URL.

function geoip(g){window.top.location.href=target[g.country]||target.All}
