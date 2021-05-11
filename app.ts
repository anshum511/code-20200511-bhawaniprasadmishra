var input = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82}]

function bmiCalc(data){
    var categories=["Underweight", "Normal weight", "Overweight",
                     "Moderately obese", "Severely obese", "Very severely obese"]

    var risk=["Malnutrition risk", "Low risk", "Enhanced risk",
                     "Medium risk", "High risk", "Very high risk"]
    
    var noOfOverweight=0
    var previousOverweight = data.NoOfOverweight;

    for(var i=0; i<data.length;i++){
        var bmi = data[i].WeightKg/((data[i].HeightCm/100) ** 2)
        data[i].Bmi = bmi

        if(bmi <= 18.4){
            data[i].BmiCategory = categories[0]
            data[i].HealthRisk = risk[0]
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            data[i].BmiCategory = categories[1]
            data[i].HealthRisk = risk[1]
        }
        else if(bmi >= 25 && bmi <= 29.9){
            data[i].BmiCategory = categories[2]
            data[i].HealthRisk = risk[2]
            noOfOverweight = noOfOverweight + 1
        }
        else if(bmi >= 30 && bmi <= 34.9){
            data[i].BmiCategory = categories[3]
            data[i].HealthRisk = risk[3]
        } 
        else if(bmi >= 35 && bmi <= 39.9){
            data[i].BmiCategory = categories[4]
            data[i].HealthRisk = risk[4]
        }
        else if(bmi >= 40){
            data[i].BmiCategory = categories[5]
            data[i].HealthRisk = risk[5]
        }
    }
    data.NoOfOverweight = noOfOverweight
    if(previousOverweight == noOfOverweight){
        data.IsOverWeightValueConsistent = "yes"
    }
    else {
        data.IsOverWeightValueConsistent = "no"
    }
    return console.log(data);
}

bmiCalc(input)