let restuarant  = {
    name : 'bassem', 
    guestCapacity : 75 ,
    guestCount : 70 , 
    CheckAvaliable : function (partySize){
           
        if (partySize <= (this.guestCapacity - this.guestCount)){
            console.log('yes there is a place for guest .')
        }
    } , 
    removeParty : function(){
        
    }

}


restuarant.CheckAvaliable(3)
restuarant.CheckAvaliable(4)
restuarant.CheckAvaliable(5)
restuarant.CheckAvaliable(6)    // this doesn't print the message because the number is greater than the difference

                                //  of guestCapacity and guestCount

