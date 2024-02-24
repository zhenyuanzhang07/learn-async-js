#! /opt/homebrew/bin/node
const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;

const incidents = [
    {
        id: "MABOS001",
        date: "20170617",
        time: "1437",
        road_id: "A90",
        place: "Stonehaven",
        direction: "north",
        description: "Broken-down T on north and park station."

    },
    {
        id: "MABOS002",
        date: "20221217",
        time: "0937",
        road_id: "A90",
        place: "Stonehaven",
        direction: "north",
        description: "Car in West Village broken down."

    }
]

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname.startsWith('/incidents/')) {
        const [, , road, location, direction, id] = pathname.split('/');

        if (!road || !location || !direction || !id) {
            // Return a 400 Bad Request if any parameter is missing
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request: Missing parameters');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(incidents.filter((incident) => {
                return incident.id === `MABOS00${id}`
            })));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})