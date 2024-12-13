function expandCard() {
    const card = document.getElementById("popupCard");
    const openButton = document.getElementById("openButton");
    const letterContent = document.getElementById("letterContent");

    card.classList.add("expanded");

    openButton.style.display = "none";

    let speed = 20;
    letterContent.style.visibility = "visible"; 
    letterContent.style.opacity = "1";  
   
    const letterText = ` 
         To be honest I don't know how or where to start my message, but I will begin by expressing my sincere gratitude. Thank you for your endless commitment for guiding us, despite several scenarios when we may not have been totally engaged or present. Your patience has been remarkable, especially considering how many times we required repetition and clarification. You always made time to mentor us with consideration and empathy, despite the fact that we might have been distracted or discovering it difficult to understand the lessons. Thank you for your dedication, as it is through your teaching that I have truly understood web systems. I encountered difficulties with this subject in my first year, but with your assistance, I was able to comprehend it better, I have come to understand that the subject becomes easier when the teaching method is clear and effective. Even though I struggled in my first year, you made it much easier for me this second year. I appreciate your patient, step-by-step teaching, because what mattered the most for you was that we learned. I sincerely appreciate the sincere dedication you have given for your students' development and achievement. It is evident that your impact goes well beyond the classroom since you encourage students to think critically, keep going, and aim for perfection. I consider myself extremely fortunate to had the chance to learn from you, and I will go forward in my academic and professional endeavors with the knowledge and understanding I have acquired in your class. 

         I truly hope I get the chance to be in your class again in the coming years, as learning under your guidance has been an enriching experience. You’ve inspired me to strive for more, and your influence will continue to motivate me throughout my academic journey. Once again, thank you for everything, Ma'am. Your influence has been invaluable, and I will forever hold you in the highest regard.
        
         Advance Merry Christmas and Happy New Year, Ma'am Roan.
         
         - Margie
    `;

    let index = 0;
    let letterInterval = setInterval(function() {
        letterContent.innerHTML += letterText[index];
        index++;

        letterContent.scrollTop = letterContent.scrollHeight;

        if (index === letterText.length) {
            clearInterval(letterInterval);
        }
    }, speed); 
}
