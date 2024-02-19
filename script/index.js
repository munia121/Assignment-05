const scrollBtn = document.getElementById('scroll-Btn').addEventListener('click', function(){
    const greenLineScroll = document.getElementById('greenLine-scroll');
    greenLineScroll.scrollIntoView({ behavior: 'smooth' });
})



// click button and change background color
let count = 0;
let clickBtn = 0;
let newPrice = 550;
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
        economoyPart.appendChild(p);



        // total price 
        const totalPrice = document.getElementById('total-price');
        const convertTotalPrice = parseInt(totalPrice.innerText);
        totalPrice.innerText = convertTotalPrice + newPrice;


        
        //grand Total
        const grandTotal = document.getElementById('grand-total');
        const convertTotalGrand = parseInt(grandTotal.innerText);
        grandTotal.innerText = convertTotalGrand + newPrice;

        
        // input and next button karsaji
        const inputNumber = document.getElementById('input-number');
        const nextBtn = document.getElementById('next-btn');

        inputNumber.addEventListener('input', function(){
            if (inputNumber.value.trim() !== 'number') {
                
                nextBtn.removeAttribute('disabled');
            } else {
                
                nextBtn.setAttribute('disabled', 'true');
            }
        })



        
        

    })
}

const couponButton = document.getElementById('coupon-btn');

        couponButton.addEventListener('click',function(){
            const inputCoupon = document.getElementById('coupon-input').value;

            if(inputCoupon ==="NEW15"|| inputCoupon === "Couple 20"){
                document.getElementById('coupon-input').classList.add('hidden')
                couponButton.classList.add('hidden')
                if(inputCoupon === "NEW15"){
                    const grandTotalS = document.getElementById('grand-total').innerText;
                    const converted = parseInt(grandTotalS);
                    // console.log(converted)
                    const discount = converted * 15 / 100;
                    const a =(converted) - discount;
                    document.getElementById('grand-total').innerText = a;
                    console.log(a)
                    
                }
                else if(inputCoupon === "Couple 20"){
                    const grandTotalS = document.getElementById('grand-total').innerText;
                    const converted = parseInt(grandTotalS);
                    // console.log(converted)
                    const discount = converted * 20 / 100;
                    const a =(converted) - discount;
                    document.getElementById('grand-total').innerText = a;
                    console.log(a)

                }
            }
            else{
                alert('Invalid coupon')
            }
        })











function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
    
}
 