let age = 15
if(age>18){
    console.log("Eligible for vote");
    }
    else{
        console.log("Not eligible for vote");
        
    }

    let mark = 75

    if(mark>90){
        console.log("A Grade");
        
    }else if(mark>60){
        console.log("B Grade");
        
    }else{
        console.log("Fail");
    }

    let day = 'sunday'

    switch(day){
        case "Monday":
            console.log("Start working");
            break
            case "sunday":
                console.log("Take rest");
                break;
                default:
                    console.log("Normal day");
                    }