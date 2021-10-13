const riddles = [
  {
    question: '13个人捉迷藏，捉了10个还剩几个？',
    answer: '两个',
  },
  {
    question: '从北京到天津要一小时，火车从北京开往天津，发车半小时后，问火车现在在那里？',
    answer: '在铁轨上',
  },
  {
    question: '小赵买一张奖票,中了一等奖,去领奖却不给?',
    answer: '还没到领奖的日期',
  },
  {
    question: '最不听话的是谁？',
    answer: '聋子',
  },
  {
    question: '太平洋的中间是什么？',
    answer: '平',
  },
  {
    question: '我前的人是小王”小王说“我前面的人是小李”怎么回事？',
    answer: '很简单，他们面对面的站着',
  },
  {
    question: 'What has six faces, but does not wear makeup, and twenty-one eyes, but cannot see?',
    answer: 'A dice',
  },
  {
    question: 'There was a green house, inside the green house there was a white house, inside the white house there was a red ahouse. Inside the red house  there were lots of babies. What is it?',
    answer: 'A watermelon.',
  },
  {
    question: 'What is at the end of a rainbow?',
    answer: 'W.',
  },
  {
    question: 'What word start with the letter E and ends with the letter E, but there are only one letter. What word is it?',
    answer: 'It is E',
  },
];

function createCard(question, answer, index) {
  let card = document.createElement('div');
  card.classList.add('flip-card');

  let cardInner = document.createElement('div');
  cardInner.classList.add('flip-card-inner');

  let cardFront = document.createElement('div');
  cardFront.classList.add('flip-card-front');

  let cardBack = document.createElement('div');
  cardBack.classList.add('flip-card-back');

  let riddleIndex = document.createElement('h1');
  riddleIndex.innerText = `第${index}题`;
  
  let riddleQuestion = document.createElement('p');
  riddleQuestion.innerText = question;

  let answerLabel = document.createElement('h1');
  answerLabel.innerText = `答案`;
  
  let riddleAnswer = document.createElement('p');
  riddleAnswer.innerText = answer;

  cardFront.append(riddleIndex, riddleQuestion);
  cardBack.append(answerLabel, riddleAnswer);
  cardInner.append(cardFront, cardBack);
  card.appendChild(cardInner);

  return card;
}

function main() {
  const container = document.querySelector('.container');
  riddles.forEach((item, index) => {
    container.appendChild(createCard(item.question, item.answer, index + 1));
  })
}

main();