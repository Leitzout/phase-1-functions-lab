function distanceFromHqInBlocks(pickup) {
    if (pickup < 42) {
        return (42 - pickup)
    }
    else {
        return (pickup - 42)
    }
}

function distanceFromHqInFeet(pickup) {
    if (pickup < 42){
        return ((42 - pickup) *264)
    } else {
        return ((pickup - 42) *264)
    }
}

function distanceTravelledInFeet (a, b){
    if (a < b){
        return ((b-a) *264)
    } else {
        return ((a-b) *264)
    }
}

function calculatesFarePrice (a, b){
    if (a < b) {
        if (((b-a) *264) < 400){
        return 0
          } else if (((b-a) * 264) < 2000 ){
        return (((b-a) * 264 - 400) * 0.02)
         }else if (((a-b)* 264)< 2500) {
        return 25
          }else if (((a-b)* 264) >= 2500){
        return "cannot travel that far"
        } 
    }  else if (a >b ){
        if (((a - b) * 264) < 400){
        return 0
          } else if (((a-b) * 264) < 2000 ){
        return (((a-b) * 264 - 400) * 0.02)
          } else if (((a-b)* 264) < 2500) {
        return 25
          } else if (((a-b)* 264) >= 2500){
        return 'cannot travel that far'
         }
      }
   }
