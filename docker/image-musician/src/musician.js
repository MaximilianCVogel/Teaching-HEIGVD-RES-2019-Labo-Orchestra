const protocol = require('./musician-protocol');
const dgram = require('dgram');
const s = dgram.createSocket('udp4');
const uuid = require('uuid');

const INSTRUMENTS = new Map([
    ['piano', 'ti-ta-ti'],
    ['trumpet', 'pouet'],
    ['flute', 'trulu'],
    ['violin', 'gzi-gzi'],
    ['drum', 'boum-boum'],
]);

function Musician(instrument) {
    this.id = uuid.v4();
    this.sound = INSTRUMENTS.get(instrument);

    Musician.prototype.update = function() {
        const measure = {
            uuid: this.id,
            sound: this.sound,
            activeSince: Date.now(),
        };
		
        const payload = JSON.stringify(measure);

        const message = Buffer.from(payload);
		
        s.send(message, 0, message.length, protocol.PROTOCOL_PORT,
               protocol.PROTOCOL_MULTICAST_ADDRESS, function(err, bytes) {
            console.log("Sending payload : " + payload + " via port : " + s.address().port);
        });
    };

    setInterval(this.update.bind(this), 1000);
}

const instrument = process.argv[2];
new Musician(instrument);