document.getElementById('output').style.visibility = 'hidden';
document.getElementById('poundsInput').addEventListener('input', function(e){
    //set cards to visible when function is ran
    document.getElementById('output').style.visibility = 'visible';
   let lbs = e.target.value;
    
    //convert pounds to grams
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    //convert pounds to kilos
    document.getElementById('kiloOutput').innerHTML = lbs/2.2046;
    //convert pounds to ounce
    document.getElementById('ounceOutput').innerHTML = lbs*16;
    
});