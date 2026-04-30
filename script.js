const questions = [
    {
      question: "A new urgent project lands on your desk. What do you do first?",
      answers: [
        { text: "Set a direction and get people moving quickly.", style: "North" },
        { text: "Check how the team feels and who needs support.", style: "South" },
        { text: "Think about what this could become in the long term.", style: "East" },
        { text: "Understand the facts, risks and timeline before acting.", style: "West" }
      ]
    },
    {
      question: "Your team is stuck in a long meeting. What are you most likely to say?",
      answers: [
        { text: "Can we make a decision and move forward?", style: "North" },
        { text: "Can we make sure everyone has had a chance to speak?", style: "South" },
        { text: "What other options have we not considered yet?", style: "East" },
        { text: "What evidence do we have for each option?", style: "West" }
      ]
    },
    {
      question: "A colleague disagrees with your idea. How do you usually respond?",
      answers: [
        { text: "I defend the idea if I think it is the right move.", style: "North" },
        { text: "I try to understand how they feel and keep the relationship strong.", style: "South" },
        { text: "I use the disagreement to explore a new possibility.", style: "East" },
        { text: "I ask them to explain their reasoning and evidence.", style: "West" }
      ]
    },
    {
      question: "You are leading a group task with a tight deadline. What role do you naturally take?",
      answers: [
        { text: "I push the group to act and make progress.", style: "North" },
        { text: "I keep people motivated and included.", style: "South" },
        { text: "I bring ideas and help people see the bigger picture.", style: "East" },
        { text: "I organise the work and check the details.", style: "West" }
      ]
    },
    {
      question: "A plan is not working. What do you do?",
      answers: [
        { text: "Change direction quickly and keep going.", style: "North" },
        { text: "Talk to the people affected and understand their concerns.", style: "South" },
        { text: "Step back and rethink the whole approach.", style: "East" },
        { text: "Review the data and identify exactly what went wrong.", style: "West" }
      ]
    },
    {
      question: "What kind of feedback is most useful to you?",
      answers: [
        { text: "Clear, direct feedback that helps me improve quickly.", style: "North" },
        { text: "Supportive feedback that recognises effort and impact on people.", style: "South" },
        { text: "Feedback that helps me develop my ideas further.", style: "East" },
        { text: "Detailed feedback with examples and evidence.", style: "West" }
      ]
    },
    {
      question: "Your team has too many ideas and no clear decision. What do you do?",
      answers: [
        { text: "Choose the strongest option and move forward.", style: "North" },
        { text: "Check which option feels fairest for the group.", style: "South" },
        { text: "Look for a more creative option that combines the ideas.", style: "East" },
        { text: "Create criteria and compare the options carefully.", style: "West" }
      ]
    },
    {
      question: "Someone in your team is quiet during a discussion. What do you do?",
      answers: [
        { text: "Ask them directly for their view so the group can move on.", style: "North" },
        { text: "Make space for them and check they feel comfortable.", style: "South" },
        { text: "Invite them to share any different ideas or possibilities.", style: "East" },
        { text: "Ask if they have any concerns or evidence we have missed.", style: "West" }
      ]
    },
    {
      question: "You are asked to present an idea to senior leaders. What do you focus on?",
      answers: [
        { text: "The decision needed and the result it will deliver.", style: "North" },
        { text: "The people affected and why the idea is fair.", style: "South" },
        { text: "The vision and future opportunity.", style: "East" },
        { text: "The evidence, risks and practical plan.", style: "West" }
      ]
    },
    {
      question: "What is most likely to annoy you in a project?",
      answers: [
        { text: "Slow progress.", style: "North" },
        { text: "Poor communication.", style: "South" },
        { text: "Lack of imagination.", style: "East" },
        { text: "Weak planning.", style: "West" }
      ]
    },
    {
      question: "A team member is upset after a difficult meeting. What do you do?",
      answers: [
        { text: "Help them refocus on what needs to happen next.", style: "North" },
        { text: "Listen properly and make sure they feel supported.", style: "South" },
        { text: "Help them see a different way forward.", style: "East" },
        { text: "Talk through what happened and what can be learned.", style: "West" }
      ]
    },
    {
      question: "You are given a vague problem with no clear answer. What is your instinct?",
      answers: [
        { text: "Take control and create a clear direction.", style: "North" },
        { text: "Bring people together to understand the issue.", style: "South" },
        { text: "Explore different ways the problem could be understood.", style: "East" },
        { text: "Break the problem down into facts and causes.", style: "West" }
      ]
    },
    {
      question: "Your team needs to choose between speed and detail. What do you prefer?",
      answers: [
        { text: "Speed, because action creates momentum.", style: "North" },
        { text: "The choice that protects people and relationships.", style: "South" },
        { text: "The choice that leaves room for creativity.", style: "East" },
        { text: "Detail, because mistakes can cost more later.", style: "West" }
      ]
    },
    {
      question: "When you join a new team, what do you notice first?",
      answers: [
        { text: "Who is making decisions and whether things are moving.", style: "North" },
        { text: "How people treat each other.", style: "South" },
        { text: "Whether the team has a clear purpose and vision.", style: "East" },
        { text: "Whether the team has good systems and processes.", style: "West" }
      ]
    },
    {
      question: "What do you bring to a team at your best?",
      answers: [
        { text: "Drive and confidence.", style: "North" },
        { text: "Trust and care.", style: "South" },
        { text: "Ideas and inspiration.", style: "East" },
        { text: "Clarity and careful thinking.", style: "West" }
      ]
    },
    {
      question: "What do you need to practise most?",
      answers: [
        { text: "Slowing down and listening more.", style: "North" },
        { text: "Saying no and being more direct.", style: "South" },
        { text: "Finishing things and staying focused.", style: "East" },
        { text: "Acting before everything is perfect.", style: "West" }
      ]
    }
  ];
  
  const results = {
    North: {
      title: "North: Action-led leader",
      summary: "Your strongest leadership style is North. This means you naturally lead through action, pace and clear direction.",
      profile:
        "You are the kind of person who helps a group move from talking to doing. When things feel unclear, you are likely to create direction and push for progress. People may experience you as confident, practical and energising. Your leadership style is especially useful in moments of uncertainty, pressure or slow progress.",
      strengths:
        "Your main strength is your ability to create momentum. You are comfortable making decisions, taking responsibility and facing difficult situations. You are not easily discouraged by resistance, and you often help others feel braver because you are willing to act first.",
      weaknesses:
        "The risk with this style is that your speed can sometimes feel like pressure to others. You may become impatient with long discussions, emotional concerns or detailed process. If overused, this can make people feel unheard, even when your intention is simply to help the team succeed.",
      advice:
        "To perform well as a North leader, keep your drive but build in pauses. Ask people what they think before you decide. Be clear about the goal, but leave space for others to shape the route. Your best leadership happens when your courage is matched with listening.",
      theory:
        "In leadership theory, this style connects with task-oriented leadership and elements of transformational leadership. You create urgency and direction, which can help teams move towards a shared goal. The development edge is emotional intelligence, because strong action works best when people feel included rather than pushed.",
      famous:
        "A useful comparison is Winston Churchill. He is often remembered as a decisive leader who used courage, urgency and direct communication in a time of crisis. This does not mean you have the same personality, but it gives a simple picture of the North style in action."
    },
    South: {
      title: "South: People-led leader",
      summary: "Your strongest leadership style is South. This means you naturally lead through trust, fairness and relationships.",
      profile:
        "You are the kind of person who notices how people are feeling and whether everyone has been included. You understand that work gets done through relationships, not just plans. People may experience you as supportive, thoughtful and emotionally aware. Your leadership style is especially useful when a team needs trust, care or repair.",
      strengths:
        "Your main strength is your ability to build connection. You listen well, create psychological safety and help people feel valued. You are likely to notice quieter voices in the room and make decisions with fairness in mind.",
      weaknesses:
        "The risk with this style is that you may avoid conflict or delay difficult decisions because you do not want to upset people. You may also take on too much emotional responsibility for the group. If overused, your care for harmony can make it harder to challenge poor behaviour or move quickly.",
      advice:
        "To perform well as a South leader, keep your warmth but practise being direct. Saying no, giving clear feedback and naming problems can also be acts of care. Your best leadership happens when kindness is combined with boundaries.",
      theory:
        "In leadership theory, this style connects closely with servant leadership and inclusive leadership. You lead by supporting others and creating conditions where people can contribute. The development edge is assertiveness, because supportive leaders also need to make clear decisions.",
      famous:
        "A useful comparison is Jacinda Ardern. She is often associated with empathetic and values-led leadership. This does not mean you have the same personality, but it gives a simple picture of the South style in action."
    },
    East: {
      title: "East: Vision-led leader",
      summary: "Your strongest leadership style is East. This means you naturally lead through ideas, imagination and possibility.",
      profile:
        "You are the kind of person who helps a group see beyond the immediate task. You enjoy asking what could be different, better or more meaningful. People may experience you as creative, future-focused and inspiring. Your leadership style is especially useful when a team needs innovation, purpose or a fresh way of thinking.",
      strengths:
        "Your main strength is your ability to open up possibility. You can connect ideas, see patterns and help people think beyond the obvious answer. You are often good at energising a team at the beginning of a project because you make the work feel meaningful.",
      weaknesses:
        "The risk with this style is that you may enjoy the idea stage more than the delivery stage. You may lose focus, underestimate detail or become overwhelmed by too many possibilities. If overused, people may see you as inspiring but hard to pin down.",
      advice:
        "To perform well as an East leader, protect your creativity but build structure around it. Turn ideas into clear next steps. Use deadlines, check-ins and practical partners who can help you finish what you start.",
      theory:
        "In leadership theory, this style connects strongly with transformational leadership because it focuses on vision, meaning and change. It also connects with adaptive leadership, because you are comfortable exploring new possibilities. The development edge is execution, because vision needs structure to become real.",
      famous:
        "A useful comparison is Steve Jobs. He is often remembered as a vision-led leader who focused on possibility, design and future change. This does not mean you have the same personality, but it gives a simple picture of the East style in action."
    },
    West: {
      title: "West: Evidence-led leader",
      summary: "Your strongest leadership style is West. This means you naturally lead through logic, detail and careful judgement.",
      profile:
        "You are the kind of person who wants to understand the facts before making a decision. You notice risks, gaps and practical issues that others may miss. People may experience you as dependable, thoughtful and thorough. Your leadership style is especially useful when a team needs quality, evidence or careful planning.",
      strengths:
        "Your main strength is your ability to bring clarity and discipline. You are good at testing ideas, asking useful questions and making sure decisions are based on more than enthusiasm. You help teams avoid mistakes and think through consequences.",
      weaknesses:
        "The risk with this style is that you may wait too long before acting. You may ask for more information than the situation really needs, or come across as critical when you are trying to be careful. If overused, your caution can slow down momentum.",
      advice:
        "To perform well as a West leader, keep your careful thinking but decide what level of evidence is enough. Share your reasoning clearly so others understand that your questions are meant to improve the work, not block it.",
      theory:
        "In leadership theory, this style connects with rational decision-making and evidence-informed leadership. It also links to transactional leadership when it focuses on process, standards and reliability. The development edge is agility, because good leaders sometimes need to act before every detail is known.",
      famous:
        "A useful comparison is Angela Merkel. She is often associated with careful, evidence-led and pragmatic leadership. This does not mean you have the same personality, but it gives a simple picture of the West style in action."
    }
  };
  
  const mixedResults = {
    "North-South": {
      title: "North-South: Supportive driver",
      summary: "You combine action with care for people. You can move work forward while keeping the team connected.",
      profile:
        "You are likely to be someone who can read the room, but still knows when progress is needed. You may care about people deeply, but you also do not want the team to stay stuck. This can make you a strong bridge between task-focused and people-focused colleagues.",
      strengths:
        "Your strength is that you can combine warmth with momentum. You can motivate people, support them and still help the work move forward. You are likely to be effective when a group needs both encouragement and direction.",
      weaknesses:
        "The risk is that you may feel pulled between keeping people happy and pushing for results. You may take on too much responsibility for both the work and the emotional atmosphere in the team.",
      advice:
        "Be clear about when the team needs discussion and when it needs action. Do not carry everyone else’s feelings alone. Use your people skills to build commitment, then use your drive to help the team move forward.",
      theory:
        "This mixed style connects with situational leadership because you can shift between support and direction. It also links to emotionally intelligent leadership, because you notice people while still focusing on results.",
      famous:
        "A useful comparison is Barack Obama, who is often associated with calm relationship-building and clear direction. This is only an illustrative comparison, not a personality diagnosis."
    },
    "North-East": {
      title: "North-East: Visionary driver",
      summary: "You combine bold ideas with action. You are likely to enjoy change, challenge and new possibilities.",
      profile:
        "You are likely to be someone who wants to imagine what could be better and then make it happen. You may get excited by change, challenge and ambitious goals. Others may experience you as energetic, creative and bold.",
      strengths:
        "Your strength is your ability to create movement around new ideas. You can inspire people with a vision, but you are also willing to act. You are useful when a team needs energy, change or a fresh direction.",
      weaknesses:
        "The risk is that you may move too fast before the details are clear. You may also enjoy the exciting beginning of a project more than the slower delivery stage.",
      advice:
        "Before acting, check the risks and practical steps. Work closely with people who are strong on detail. Choose a small number of ideas and finish them properly.",
      theory:
        "This mixed style connects strongly with transformational leadership because it combines vision, energy and change. The development edge is execution, because bold ideas need structure to last.",
      famous:
        "A useful comparison is Elon Musk, who is often associated with bold ideas, pace and ambitious change. This is only an illustrative comparison, not a personality diagnosis."
    },
    "North-West": {
      title: "North-West: Practical driver",
      summary: "You combine action with logic. You like results, but you also want decisions to make sense.",
      profile:
        "You are likely to be someone who wants things to be both effective and practical. You do not want endless debate, but you also do not want weak thinking. Others may experience you as focused, realistic and direct.",
      strengths:
        "Your strength is your ability to make practical decisions under pressure. You can balance speed with evidence and help teams focus on what is realistic.",
      weaknesses:
        "The risk is that you may come across as tough or overly task-focused. You may dismiss emotional concerns too quickly if they seem to slow down the work.",
      advice:
        "Remember that relationships affect delivery. Explain your reasoning, not just your decision. Use your practical focus to create plans that are clear and realistic.",
      theory:
        "This mixed style connects with task-oriented leadership and evidence-informed leadership. You are likely to value delivery, standards and clear decision-making.",
      famous:
        "A useful comparison is Margaret Thatcher, who is often associated with firmness, logic and decisive action. This is only an illustrative comparison, not a personality diagnosis."
    },
    "South-East": {
      title: "South-East: People-centred visionary",
      summary: "You combine care for people with imagination. You are likely to inspire others through values, purpose and possibility.",
      profile:
        "You are likely to be someone who wants work to feel meaningful. You care about people, but you also care about ideas, values and future possibilities. Others may experience you as warm, thoughtful and inspiring.",
      strengths:
        "Your strength is your ability to connect people to a bigger purpose. You can create a team culture that feels creative, caring and values-led.",
      weaknesses:
        "The risk is that you may avoid hard decisions or struggle with detail. You may also feel disappointed when others focus only on tasks and ignore the human or creative side of the work.",
      advice:
        "Turn your ideas into clear actions. Practise direct conversations when something is not working. Work with people who can help you plan and finish.",
      theory:
        "This mixed style connects with servant leadership and transformational leadership. You support people while also helping them connect to a bigger vision.",
      famous:
        "A useful comparison is Oprah Winfrey, who is often associated with empathy, communication and vision. This is only an illustrative comparison, not a personality diagnosis."
    },
    "South-West": {
      title: "South-West: Thoughtful supporter",
      summary: "You combine care for people with careful thinking. You are steady, fair and likely to make others feel safe.",
      profile:
        "You are likely to be someone who wants decisions to be fair, careful and respectful. You notice both the practical risks and the human impact. Others may experience you as dependable, balanced and considerate.",
      strengths:
        "Your strength is your ability to create trust through care and reliability. You are likely to make thoughtful decisions that respect both people and evidence.",
      weaknesses:
        "The risk is that you may take a long time to decide or avoid conflict. You may become too cautious when change is needed.",
      advice:
        "Set time limits for decisions. Say what you think clearly, even when it feels uncomfortable. Use your balanced style to help teams make fair and practical choices.",
      theory:
        "This mixed style connects with inclusive leadership and evidence-informed leadership. You are likely to value fairness, psychological safety and careful judgement.",
      famous:
        "A useful comparison is Ruth Bader Ginsburg, who is often associated with careful reasoning, fairness and steady commitment. This is only an illustrative comparison, not a personality diagnosis."
    },
    "East-West": {
      title: "East-West: Strategic thinker",
      summary: "You combine big-picture thinking with analysis. You can imagine possibilities and test them carefully.",
      profile:
        "You are likely to be someone who enjoys both ideas and depth. You can see future possibilities, but you also want them to make sense. Others may experience you as thoughtful, strategic and reflective.",
      strengths:
        "Your strength is your ability to connect vision with evidence. You can help a team think deeply, challenge assumptions and build stronger ideas.",
      weaknesses:
        "The risk is that you may spend too long thinking before acting. You may feel torn between creativity and caution, especially when fast decisions are needed.",
      advice:
        "Decide what level of evidence is enough. Break big ideas into small actions. Share both the vision and the practical plan.",
      theory:
        "This mixed style connects with strategic leadership and adaptive leadership. You are able to think about future possibilities while still testing ideas carefully.",
      famous:
        "A useful comparison is Bill Gates, who is often associated with long-term thinking, analysis and strategic vision. This is only an illustrative comparison, not a personality diagnosis."
    }
  };
  
  const workingWithAdvice = {
    North:
      "When working with a North style, be clear, direct and focused. They usually respond well to purpose, challenge and action. Try not to over-explain before getting to the point. Show them what decision is needed, what result matters and where they have room to take ownership.",
    South:
      "When working with a South style, build trust before pushing the task. They usually respond well to warmth, fairness and appreciation. Listen properly, show that you care about people, and avoid making them feel steamrolled. They often do their best work when relationships feel safe.",
    East:
      "When working with an East style, show interest in their ideas and give them space to explore possibilities. Try not to shut ideas down too early. They often bring energy at the start of a project, but may need help turning ideas into clear next steps.",
    West:
      "When working with a West style, bring facts, evidence and a clear plan. Give them time to think and do not rely only on emotion or urgency. They often help the team avoid mistakes, so treat their questions as useful checks rather than negativity."
  };
  
  let currentQuestionIndex = 0;
  
  let scores = {
    North: 0,
    South: 0,
    East: 0,
    West: 0
  };
  
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  
  const progress = document.getElementById("progress");
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  
  startBtn.addEventListener("click", startQuiz);
  restartBtn.addEventListener("click", restartQuiz);
  
  function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    resultScreen.classList.add("hidden");
  
    currentQuestionIndex = 0;
    scores = {
      North: 0,
      South: 0,
      East: 0,
      West: 0
    };
  
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
  
    progress.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionText.textContent = currentQuestion.question;
    answerButtons.innerHTML = "";
  
    const shuffledAnswers = shuffleArray(currentQuestion.answers);
  
    shuffledAnswers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("answer-btn");
  
      button.addEventListener("click", () => {
        scores[answer.style]++;
        currentQuestionIndex++;
  
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          showResult();
        }
      });
  
      answerButtons.appendChild(button);
    });
  }
  
  function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
  
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  
    const firstStyle = sortedScores[0][0];
    const firstScore = sortedScores[0][1];
  
    const secondStyle = sortedScores[1][0];
    const secondScore = sortedScores[1][1];
  
    let result;
    let resultStyleForAdvice = firstStyle;
  
    if (firstScore - secondScore <= 2) {
        const styleOrder = ["North", "South", "East", "West"];
        const mixedKey = [firstStyle, secondStyle]
         .sort((a, b) => styleOrder.indexOf(a) - styleOrder.indexOf(b))
         .join("-");

     result = mixedResults[mixedKey];

     if (!result) {
      result = results[firstStyle];
     }
   } else {
     result = results[firstStyle];
}
  
    document.getElementById("result-title").textContent = result.title;
    document.getElementById("result-summary").textContent = result.summary;
    document.getElementById("profile-text").textContent = result.profile;
    document.getElementById("strengths-text").textContent = result.strengths;
    document.getElementById("weaknesses-text").textContent = result.weaknesses;
    document.getElementById("advice-text").textContent = result.advice;
    document.getElementById("theory-text").textContent = result.theory;
    document.getElementById("famous-text").textContent = result.famous;
  
    drawCompassChart(scores);
    showWorkingWithAdvice(resultStyleForAdvice);
  }
  
  function showWorkingWithAdvice(primaryStyle) {
    const section = document.getElementById("working-with-section");
    section.innerHTML = "";
  
    Object.keys(workingWithAdvice).forEach(style => {
      const card = document.createElement("div");
      card.classList.add("working-style-card");
  
      const heading = document.createElement("h3");
  
      if (style === primaryStyle) {
        heading.textContent = `Working with another ${style}`;
      } else {
        heading.textContent = `Working with ${style}`;
      }
  
      const paragraph = document.createElement("p");
      paragraph.textContent = workingWithAdvice[style];
  
      card.appendChild(heading);
      card.appendChild(paragraph);
      section.appendChild(card);
    });
  }
  
  function drawCompassChart(scores) {
    const canvas = document.getElementById("compass-chart");
    const ctx = canvas.getContext("2d");
  
    const size = 420;
    canvas.width = size;
    canvas.height = size;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  
    const centerX = size / 2;
    const centerY = size / 2;
    const maxLength = 75;
  
    const styleColors = {
      North: "#ef4444",
      South: "#22c55e",
      East: "#f59e0b",
      West: "#3b82f6"
    };
  
    const positions = {
      North: { labelX: centerX - 40, labelY: centerY - maxLength - 45 },
      South: { labelX: centerX - 40, labelY: centerY + maxLength + 55 },
      East: { labelX: centerX + maxLength + 35, labelY: centerY + 6 },
      West: { labelX: centerX - maxLength - 105, labelY: centerY + 6 }
    };
  
    ctx.strokeStyle = "#d1d5db";
    ctx.lineWidth = 2;
  
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - maxLength);
    ctx.lineTo(centerX, centerY + maxLength);
    ctx.moveTo(centerX - maxLength, centerY);
    ctx.lineTo(centerX + maxLength, centerY);
    ctx.stroke();
  
    Object.keys(scores).forEach(style => {
      const percentage = Math.round((scores[style] / total) * 100);
      const length = (percentage / 100) * maxLength;
  
      let endX = centerX;
      let endY = centerY;
  
      if (style === "North") endY = centerY - length;
      if (style === "South") endY = centerY + length;
      if (style === "East") endX = centerX + length;
      if (style === "West") endX = centerX - length;
  
      ctx.strokeStyle = styleColors[style];
      ctx.lineWidth = 9;
      ctx.lineCap = "round";
  
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
  
      ctx.fillStyle = "#111827";
      ctx.font = "15px Arial";
      ctx.fillText(`${style}: ${percentage}%`, positions[style].labelX, positions[style].labelY);
    });
  
    ctx.beginPath();
    ctx.arc(centerX, centerY, 7, 0, 2 * Math.PI);
    ctx.fillStyle = "#111827";
    ctx.fill();
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
  
    scores = {
      North: 0,
      South: 0,
      East: 0,
      West: 0
    };
  
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  }
  
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
