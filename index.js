let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='' ;

for (item of buttons)
{
    item.addEventListener('click' , (e) =>
    {
        buttonText = e.target.innerText;
        console.log('button text' , buttonText);
        if (buttonText=='x')
        {
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'AC')
        {
            screenValue = '';
            screen.value = screenValue;
        }

        else if (buttonText == '=')
        {
            try {
                screen.value = eval(screen.value);
            }
               
            catch ( SyntaxError)
            {
                screen.value='Error!';
            }
            
               
          
        }

        else if (buttonText=='DEL')
        {
            screenValue = screenValue.substring(0 , screenValue.length-1);
            screen.value = screenValue ;

        }

        else{
            screenValue += buttonText;
            screen.value = screenValue ;
        }
    })
}