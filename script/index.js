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


        count++;

        const setCount = document.getElementById('set-count');
        setCount.innerText = count;
        

        const seatsLeft = document.getElementById('seats-left').innerText;
        const convertSeatsLeft = parseInt(seatsLeft) -1 ;
        document.getElementById('seats-left').innerText = convertSeatsLeft;


        
        
       
    })
}