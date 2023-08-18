function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value ;
    const base = parseFloat(baseValueTextString);
    baseField.value = '';

    

    const heightField = document.getElementById('triangle-height');
    const heightValueTextString = heightField.value ;
    const height = parseFloat(heightValueTextString);
    heightField.value = '';

    if (isNaN(base) || isNaN(height)) {
        alert('please provide a number');
        return;

    }
   

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
    if (isNaN(widthValue) || isNaN(lengthValue)) {
        alert('please provide a number');
        return;

    }

    const area = widthValue * lengthValue ;

    const areaValueSet = document.getElementById('rectangle-area');
    areaValueSet.innerText = area;

}

// recap duplicate code 

function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    console.log(base);
    const height = getInputValue('Parallelogram-height');
     console.log(height);

     if (isNaN(base) || isNaN(height)) {
        alert('please provide a number');
        return;

    }

    const area = base * height;
    setElementInnerText('Parallelogram-area', area)
}

function calculateEllipseArea(){
    const ellipseBase = getInputValue('Ellipse-base');
    const ellipseHeight = getInputValue ('Ellipse-height');

    if (isNaN(ellipseBase) || isNaN(ellipseBase)) {
        alert('please provide a number');
        return;

    }
    const area = 3.14 * ellipseBase * ellipseHeight;
    setElementInnerText('Ellipse-area', area)

}


function getInputValue (FieldId){
    const inputField = document.getElementById(FieldId);
    const inputFieldValueText = inputField.value;
    const inputValue = parseFloat(inputFieldValueText);
    return inputValue;
}

function setElementInnerText (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}

