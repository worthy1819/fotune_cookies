const fortunes = [
    "You will have a great day!",
    "A thrilling time is in your future.",
    "Good news will come to you by mail.",
    "Someone will surprise you soon!",
    "An exciting opportunity lies ahead.",
    "You will meet someone important tomorrow.",
    "Happiness begins with you.",
    "The best is yet to come!",
    "Happiness is not a destination; it is a way of life.",
    "You will accomplish great things if you believe in yourself.",
    "A fresh start will bring new opportunities.",
    "The journey is the reward.",
    "Every day is a chance to change your life.",
    "Dream big. The future is yours to create.",
    "Patience is the key to achieving greatness.",
    "Kindness is the seed from which love grows.",
    "Success is a journey, not a race.",
    "Opportunities don't happen; you create them.",
    "An alien of some sort will be appearing to you shortly.",
    "Fortune not found. Try again later.",
    "You will find something you weren't looking for… in the last place you look.",
    "Do not mistake temptation for opportunity.",
    "Help! I'm trapped in a fortune cookie factory.",
    "You will soon gain weight. Be prepared.",
    "Your secrets are safe with me. I never even read them.",
    "Never argue with a fortune cookie.",
    "About time I got out of that cookie!",
    "Don't panic. It's only a cookie.",
    "Your heart will soon be full of love and joy.",
    "True love is on its way to you.",
    "Someone special is thinking of you right now.",
    "Love conquers all.",
    "A romantic evening awaits you.",
    "Your smile will light up someone's world today.",
    "You are loved more than you know.",
    "A happy relationship is in your future.",
    "Love is the greatest treasure you'll ever find.",
    "Your soulmate is closer than you think.",
    "The greatest risk is not taking one.",
    "What you do today will define your tomorrow.",
    "You are never too old to set a new goal or dream a new dream.",
    "The simplest answer is often the right one.",
    "Change your thoughts, and you change the world.",
    "What you seek is seeking you.",
    "The only limits in life are the ones you create.",
    "Mistakes are proof that you are trying.",
    "Your intuition will guide you to the truth.",
    "The best way to predict the future is to create it."
  ];
  
  const fortuneElement = document.getElementById("fortune");
  const button = document.getElementById("generate-btn");
  const sound = new Audio("crack.mp3");
  const colors = ["#f4b400", "#34a853", "#4285f4", "#db4437", "#fef3c7"];
  
  button.addEventListener("click", () => {
    sound.play();
    fortuneElement.classList.add("hidden");
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const newFortune = fortunes[randomIndex];
      fortuneElement.textContent = newFortune;
      fortuneElement.classList.remove("hidden");
      fortuneElement.classList.add("visible");
  
      // Change background color
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
  
    }, 500);
  });
  
  