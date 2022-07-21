window.addEventListener('keydown',event) =>
{
    const {style}=block;
    switch(event.key)
    {
        case 'Arrowup':style.top=`$parseInt(style.top)-modifier}px`;break;
        case 'ArrowDown':style.top=`$parseInt(style.top)-modifier}px`;break;
        case 'ArrowLeft':style.top=`$parseInt(style.top)-modifier}px`;break;
        case 'ArrowRight':style.top=`$parseInt(style.top)-modifier}px`;break;
    }
}