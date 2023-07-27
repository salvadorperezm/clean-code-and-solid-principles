(() => {

    const temperaturesInCelsius = [33.6, 12.34];

    const serverIpAddress = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const listOfUsersEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;

    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const finalTime = new Date().getTime() - initialTime;


    function returnBooks() {
        throw new Error('Function not implemented.');
    }

    function returnBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function calculateSquareArea( sideLength: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();