function onLoad() {
    var guests = prompt("How Many Guests Do You Have?");
    console.log(guests);
    var tables = prompt("How Many Tables Do You Want?");
    console.log(tables);
    alert("Your " + guests + " guests will be seated as follows: " + (tables-1) +" tables of " + Math.ceil(guests/tables) + ", and 1 table of " + (guests - Math.ceil(guests/tables)*(tables-1)));
}


//"Your " + guests + "guests will be seated as follows: " + tables-1 +