colisao = function(bound, compare) {

    var vinculadoArray = bound
    var compareArray = compare

    if (compareArray.length) {
        
        for(i = 0; i < vinculadoArray.length; i++) {

            boundOffset = $(vinculadoArray[i]).offset()
            boundOffset.right = boundOffset.left + $(vinculadoArray[i]).width()
            boundOffset.bottom = boundOffset.top + $(vinculadoArray[i]).height()

            for(j = 0; j < compareArray.length; j++) {
                comparePosition = $(compareArray[j]).offset()
                comparePosition.right = comparePosition.left + $(compareArray[i]).width()
                comparePosition.bottom = comparePosition.top + $(compareArray[i]).height()

                if (comparePosition.bottom > boundOffset.top && 
                    comparePosition.top < boundOffset.bottom) {
                    
                        if (comparePosition.right > boundOffset.left &&
                            comparePosition.left < boundOffset.left) {
                            
                            return compareArray[i]
                        }
                }
            }
        }
    }
}