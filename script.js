process.stdin.setEncoding('utf-8'); // Enkodowanie przyjmowanych danych


//Nasluchiwanie zdarzen odczytu
process.stdin.on('readable', function() {
    var input = process.stdin.read();
  	if(input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit':
       	 		process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
            case '/version':
        		process.stdout.write('Installed Node.js version:\n');
        		process.stdout.write(process.version);
        		break;
        	default:
            process.stderr.write('Wrong instruction!\n');
        }
    }
});