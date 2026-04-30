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
      summary: "You like to move things forward. You are decisive, confident and comfortable taking charge.",
      strengths: [
        "You act quickly.",
        "You bring energy to difficult situations.",
        "You are not easily stopped by challenges.",
        "You help teams focus on results."
      ],
      weaknesses: [
        "You may move too fast for others.",
        "You may seem impatient with process.",
        "You may take too much control.",
        "You may forget to check how people are feeling."
      ],
      advice: [
        "Pause before making big decisions.",
        "Ask quieter people what they think.",
        "Delegate instead of doing everything yourself.",
        "Balance speed with listening."
      ]
    },
    South: {
      title: "South: People-led leader",
      summary: "You lead through relationships. You care about fairness, trust and how people feel.",
      strengths: [
        "You build trust.",
        "You help people feel valued.",
        "You listen carefully.",
        "You create a supportive team environment."
      ],
      weaknesses: [
        "You may find it hard to say no.",
        "You may avoid difficult conversations.",
        "You may take problems personally.",
        "You may focus on relationships at the cost of progress."
      ],
      advice: [
        "Set clear boundaries.",
        "Practise giving direct feedback.",
        "Remember that disagreement can be healthy.",
        "Balance kindness with clear action."
      ]
    },
    East: {
      title: "East: Vision-led leader",
      summary: "You are driven by ideas and possibilities. You enjoy thinking about what could be different or better.",
      strengths: [
        "You see the big picture.",
        "You bring fresh ideas.",
        "You help teams think about the future.",
        "You are comfortable with creativity and change."
      ],
      weaknesses: [
        "You may lose focus on details.",
        "You may start strongly but struggle to finish.",
        "You may become overwhelmed by too many ideas.",
        "You may lose track of time."
      ],
      advice: [
        "Turn ideas into clear next steps.",
        "Use deadlines and check-ins.",
        "Work with people who are strong on detail.",
        "Choose which ideas matter most."
      ]
    },
    West: {
      title: "West: Evidence-led leader",
      summary: "You like to understand things properly before acting. You value facts, planning and careful decisions.",
      strengths: [
        "You are practical and dependable.",
        "You think carefully about risks.",
        "You use data and logic well.",
        "You help teams avoid mistakes."
      ],
      weaknesses: [
        "You may take too long to decide.",
        "You may get stuck in too much analysis.",
        "You may seem distant or overly critical.",
        "You may resist change without enough evidence."
      ],
      advice: [
        "Decide what evidence is enough.",
        "Share your thinking clearly with others.",
        "Be open to ideas before testing them.",
        "Balance careful planning with action."
      ]
    }
  };
  
  const mixedResults = {
    "North-South": {
      title: "North-South: Supportive driver",
      summary: "You combine action with care for people. You can move work forward while keeping the team connected.",
      strengths: [
        "You can motivate people and still care about their needs.",
        "You are good at turning relationships into action.",
        "You can lead with both confidence and warmth."
      ],
      weaknesses: [
        "You may feel pulled between speed and harmony.",
        "You may take on too much responsibility for both results and people.",
        "You may become frustrated when people need more time."
      ],
      advice: [
        "Be clear about when the team needs action and when it needs discussion.",
        "Do not carry everyone else’s feelings alone.",
        "Use your people skills to build commitment, then use your drive to move forward."
      ]
    },
    "North-East": {
      title: "North-East: Visionary driver",
      summary: "You combine bold ideas with action. You are likely to enjoy change, challenge and new possibilities.",
      strengths: [
        "You can create momentum around new ideas.",
        "You are comfortable with uncertainty.",
        "You can inspire people to move towards a bigger goal."
      ],
      weaknesses: [
        "You may move too fast before details are clear.",
        "You may become bored once the idea needs routine follow-through.",
        "You may overlook people who need more structure."
      ],
      advice: [
        "Before acting, check the risks and practical steps.",
        "Work closely with detail-focused people.",
        "Choose a small number of ideas and finish them properly."
      ]
    },
    "North-West": {
      title: "North-West: Practical driver",
      summary: "You combine action with logic. You like results, but you also want decisions to make sense.",
      strengths: [
        "You can make practical decisions under pressure.",
        "You balance speed with evidence.",
        "You are good at spotting what needs to happen next."
      ],
      weaknesses: [
        "You may come across as tough or overly task-focused.",
        "You may dismiss emotional concerns too quickly.",
        "You may become impatient when people want open discussion."
      ],
      advice: [
        "Remember that relationships affect delivery.",
        "Explain your reasoning, not just your decision.",
        "Use your practical focus to create clear and realistic plans."
      ]
    },
    "South-East": {
      title: "South-East: People-centred visionary",
      summary: "You combine care for people with imagination. You are likely to inspire others through values, purpose and possibility.",
      strengths: [
        "You help people feel connected to a bigger purpose.",
        "You are open to ideas and emotions.",
        "You can create a warm and creative team culture."
      ],
      weaknesses: [
        "You may avoid hard decisions.",
        "You may struggle with deadlines and detail.",
        "You may become disappointed if others are too task-focused."
      ],
      advice: [
        "Turn your ideas into clear actions.",
        "Practise direct conversations when something is not working.",
        "Work with people who can help you plan and finish."
      ]
    },
    "South-West": {
      title: "South-West: Thoughtful supporter",
      summary: "You combine care for people with careful thinking. You are steady, fair and likely to make others feel safe.",
      strengths: [
        "You are dependable and considerate.",
        "You make careful decisions that respect people.",
        "You are good at noticing risks and human impact."
      ],
      weaknesses: [
        "You may take a long time to decide.",
        "You may avoid conflict.",
        "You may become too cautious when change is needed."
      ],
      advice: [
        "Set time limits for decisions.",
        "Say what you think clearly, even if it feels uncomfortable.",
        "Use your balanced style to help teams make fair and practical choices."
      ]
    },
    "East-West": {
      title: "East-West: Strategic thinker",
      summary: "You combine big-picture thinking with analysis. You can imagine possibilities and test them carefully.",
      strengths: [
        "You can connect vision with evidence.",
        "You are good at both ideas and thoughtful planning.",
        "You can help teams think deeply before making decisions."
      ],
      weaknesses: [
        "You may spend too long thinking before acting.",
        "You may feel torn between creativity and caution.",
        "You may struggle when fast decisions are needed."
      ],
      advice: [
        "Decide what level of evidence is enough.",
        "Break big ideas into small actions.",
        "Share both the vision and the practical plan."
      ]
    }
  };
  
  const workingWithAdvice = {
    North: [
      "Be clear, direct and brief.",
      "Focus on the goal, challenge and result.",
      "Give them ownership and room to act.",
      "Do not over-explain before getting to the point."
    ],
    South: [
      "Build trust before pushing the task.",
      "Show that you care about fairness and people.",
      "Listen properly and do not rush their feelings.",
      "Give reassurance and appreciation."
    ],
    East: [
      "Show interest in their ideas.",
      "Give them space to explore possibilities.",
      "Avoid shutting ideas down too early.",
      "Help them turn ideas into next steps."
    ],
    West: [
      "Bring facts, evidence and a clear plan.",
      "Give them time to think.",
      "Do not rely only on emotion or urgency.",
      "Respect their need to check risks and details."
    ]
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
  
    if (firstScore - secondScore <= 2) {
      const mixedKey = [firstStyle, secondStyle].sort().join("-");
      result = mixedResults[mixedKey];
    } else {
      result = results[firstStyle];
    }
  
    document.getElementById("result-title").textContent = result.title;
    document.getElementById("result-summary").textContent = result.summary;
  
    fillList("strengths-list", result.strengths);
    fillList("weaknesses-list", result.weaknesses);
    fillList("advice-list", result.advice);
  
    showWorkingWithAdvice(firstStyle);
  }
  
  function showWorkingWithAdvice(primaryStyle) {
    const section = document.getElementById("working-with-section");
    section.innerHTML = "";
  
    Object.keys(workingWithAdvice).forEach(style => {
      const heading = document.createElement("h3");
  
      if (style === primaryStyle) {
        heading.textContent = `Working with another ${style}`;
      } else {
        heading.textContent = `Working with ${style}`;
      }
  
      const list = document.createElement("ul");
  
      workingWithAdvice[style].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
  
      section.appendChild(heading);
      section.appendChild(list);
    });
  }
  
  function fillList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = "";
  
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
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