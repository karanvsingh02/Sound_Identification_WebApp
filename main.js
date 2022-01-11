function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h3jCC4F2j/model.json', modelReady)
    }
    
    function modelReady(){
    
        classifier.classify(gotResults);
    }

    dog = 0;
    cat = 0;
    lion = 0;
    cow = 0;

    function gotResults(error, results){
        if(error){
            console.error(error);
        }else{
            console.log(results);
            random_number_r = Math.floor(Math.random () * 255) + 1;
            random_number_g = Math.floor(Math.random () * 255) + 1;
            random_number_b = Math.floor(Math.random () * 255) + 1;

            document.getElementById("result_confidence").innerHTML = 'Detected Dog - ' +  dog  
            + '      Detected Cat - ' + cat + '      Detected Lion - ' + lion +
            '     Detected Cow - ' + cow;
            
            document.getElementById("result_label").innerHTML = 'I can hear - ' +  results[0].label;

            img = document.getElementById("Animal_img");

            if (results[0].label == "Barking"){
                img.src = "Dog.jpg";
                dog = (dog + 1);
            }else if (results[0].label == "Meowing"){
                img.src = "Cat.jpg";
                cat =  (cat + 1);
            }else if (results[0].label == "Roaring"){
                img.src = "Lion.jpg";
                lion =  (lion + 1);
            }else if (results[0].label == "Mooing"){
                img.src = "Cow.jpg";
                cow =  (cow + 1);
             }else{
                 img.src = "Listen.jpg";
             } 
    }
}