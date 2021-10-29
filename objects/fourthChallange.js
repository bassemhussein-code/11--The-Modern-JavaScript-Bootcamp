let restuarant = {
    name : 'bassem' , 
    guestCapicaty : 75 , 
    guestCount : 70 ,

    addParty : function(seat){
                 this.guestCount = this.guestCount + seat 
    },
    removeParty : function(seat){
        this.guestCount = this.guestCount - seat 
    },
    CheckAvaliable : function (partySize){
           
        if (partySize <= (this.guestCapacity - this.guestCount)){
            console.log('yes there is a place for guest .')
        }else{
            console.log(`no there is no place for ${partySize} guests.  `)
        }
    }
    
}

restuarant.CheckAvaliable(6)
restuarant.addParty(3)
console.log(restuarant.guestCount)

restuarant.removeParty(6)
console.log(restuarant.guestCount)
restuarant.CheckAvaliable(6)
