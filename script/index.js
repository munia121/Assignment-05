const scrollBtn = document.getElementById('scroll-Btn').addEventListener('click', function(){
    const greenLineScroll = document.getElementById('greenLine-scroll');
    greenLineScroll.scrollIntoView({ behavior: 'smooth' });
})



// click button and change background color
let count = 0;
const selectedBtn = document.querySelectorAll('.seat-btn')
for(let btn of selectedBtn){
    btn.addEventListener('click', function(e){
        e.target.style.backgroundColor = '#1DD100';
        e.target.style.color = 'white'
        btn.disabled = true;
        btn.textContent = btn.innerText;


        count++;
        // seats 0 
        const setCount = document.getElementById('set-count');
        setCount.innerText = count;
        
        // seat left 40 
        const seatsLeft = document.getElementById('seats-left').innerText;
        const convertSeatsLeft = parseInt(seatsLeft) -1 ;
        document.getElementById('seats-left').innerText = convertSeatsLeft;

        

        // economoy-part
        const economoyPart = document.getElementById('economoy-part');
        const setBtn = btn.innerText
        const p = document.createElement('p');
        p.innerText = setBtn+ ' ' + 'Economoy'+' ' + 550;
        p.style.display = 'flex'
        p.style.gap = '24px';
        economoyPart.appendChild(p);




        
       
    })
}