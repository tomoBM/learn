'use strict'
{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p')

  const quizSet = [
    {q:"Q1: What is Tomo's favorite color?", c:['Red','Blue','Pink']},
    {q:"Q2: What is Tomo's favorite movie?", c:['The Greatest Showman','Hurry Potter','titanic']},
    {q:"Q3: What is Tomo's favorite song?", c:['Symphony (feat. Zara Larsson)/Clean Bandit','What Do You Mean?/Justin Bieber','DDU-DU DDU-DU /BLACKPINK']},
    {q:"Q4: What is Tomo's mother's name?", c:['Mayo','Mako','Mami']},
    {q:"Q5: What is Tomo's brother's name?", c:['Masaharu','Masahiko','Masanobu']},
    {q:"Q6: Which country does Tomo want to go the most?", c:['Malta','France','Spain']},
    {q:"Q7: Which country has Tomo never been to?", c:['Thailand','Phillipin','China']},
    {q:"Q8: Which city does Tomo like the most in Canada?", c:['Kelowna','Banff','Vancouber']},
    {q:"Q9: Which city does Tomo like the most in Australia?", c:['Perth','Gold Coast','Melbourne']},
    {q:"Q10: What is her favorite food?", c:['Ramen','Pasta','Okonomiyaki']},
    
  ];
  let currentNum = 0;
  let isAnswered
  let score = 0;
  

  function shuffle(arr){
    for (let i =arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i +1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }
   function checkAnswer(li){
     if(isAnswered === true){
      return;
     }
     isAnswered = true;
    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
      score++;
    }else{
      li.classList.add('wrong')
    }
    btn.classList.remove('disabled');
  }


    function setQuiz(){
      isAnswered = false;
      question.textContent = quizSet[currentNum].q;

      while(choices.firstChild){
        choices.removeChild(choices.firstChild);
      }
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click' , () =>{
        checkAnswer(li);
      });
      choices.appendChild(li)
    });

    if(currentNum === quizSet.length -1){
      btn.textContent = 'Show Score';
    }
  }
  setQuiz();
  btn.addEventListener('click', () =>{
    if(btn.classList.contains('disabled')){
      return
    }
    btn.classList.add('disabled')

    if (currentNum === quizSet.length - 1){
      // console.log(`Score:${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score:${score} / ${quizSet.length}`
      result.classList.remove('hidden');
    }else{
      currentNum++;
      setQuiz();

    }

  })
  
  
  
}