let isGuestOneVegan = false
let isGuestTwoVegan = false


if(isGuestOneVegan && isGuestTwoVegan){

    console.log('only offer up vegan dishes'); 
}else if (isGuestOneVegan || isGuestTwoVegan ){

    console.log('make sure to offer up some vegan dishes.')
}else{
    console.log('offer up anything in the menu.')
}

