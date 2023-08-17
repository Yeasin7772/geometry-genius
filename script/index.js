function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value ;
    const base = parseFloat(baseValueTextString);
    baseField.value = '';
    

    const heightField = document.getElementById('triangle-height');
    const heightValueTextString = heightField.value ;
    const height = parseFloat(heightValueTextString);
    heightField.value = '';
   

    const area = 0.5 * base * height;

    const areaSpanValueSet = document.getElementById ('triangle-area');
    areaSpanValueSet.innerText = area;
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthFieldValueString = widthField.value;
    const widthValue = parseFloat(widthFieldValueString);
    console.log(widthValue);


    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueString = lengthField.value;
    const lengthValue = parseFloat(lengthFieldValueString);
    console.log(lengthValue);

    const area = widthValue * lengthValue ;

    const areaValueSet = document.getElementById('rectangle-area');
    areaValueSet.innerText = area;

}