const scrollBtn = document.getElementById('scroll-Btn').addEventListener('click', function(){
    const greenLineScroll = document.getElementById('greenLine-scroll');
    greenLineScroll.scrollIntoView({ behavior: 'smooth' });
})