const text=document.getElementById('text-container');
const colorbutton=document.getElementById('colorchange').addEventListener('click',()=>{
    text.style.color=document.getElementById('colorbox').value;
    console.log(text.style.color);
})

const size=document.getElementById('fontsize').addEventListener('input',()=>{
    text.style.fontSize=`${document.getElementById('fontsize').value}px`;
    console.log(text.style.fontSize)

});

const style=document.querySelectorAll('.stylebt').forEach(element => {
    element.addEventListener('click',()=>{   
        const id=element.id;
        if (id === 'italic') {
            text.style.fontStyle = text.style.fontStyle === 'italic' ? 'normal' : 'italic'; // Toggle italic
        } else if (id === 'underline') {
            text.style.textDecoration = text.style.textDecoration === 'underline' ? 'none' : 'underline'; // Toggle underline
        } else if (id === 'bold') {
            text.style.fontWeight = text.style.fontWeight === 'bold' ? 'normal' : 'bold'; // Toggle bold
        }
    });
});



const family=document.getElementById('list').addEventListener('change',()=>{
    text.style.fontFamily=document.getElementById('list').value;
})

document.getElementById('getstyle').addEventListener('click', () => {
    const computedStyles = window.getComputedStyle(text);
    const allStyles = `
        Color: ${computedStyles.color};
        Font Size: ${computedStyles.fontSize};
        Font Style: ${computedStyles.fontStyle};
        Font Weight: ${computedStyles.fontWeight};
        Text Decoration: ${computedStyles.textDecoration};
        Font Family: ${computedStyles.fontFamily};
    `;
    console.log(allStyles);
    document.getElementById('css-props').textContent = allStyles;
});