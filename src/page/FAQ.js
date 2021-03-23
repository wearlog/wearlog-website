import React, { Component } from 'react';
import './FAQ.css';
import { arrowDown } from '../components/SvgFiles';

const questionList = [
  {
    question: 'How can I create a profile?',
    answer: '1. Nisi, ut id faucibus nunc velit, quis netus malesuada egestas. Malesuada congue in nulla rutrum cras fermentum, et laoreet. Massa consequat, phasellus neque aliquet lacinia amet, vitae eros, quam. Non volutpat tortor, sem consequat suscipit.',
    isOpen: false,
  },
  {
    question: 'Do I need to pay for this app?',
    answer: '2. Nisi, ut id faucibus nunc velit, quis netus malesuada egestas. Malesuada congue in nulla rutrum cras fermentum, et laoreet. Massa consequat, phasellus neque aliquet lacinia amet, vitae eros, quam. Non volutpat tortor, sem consequat suscipit.',
    isOpen: false,
  },
  {
    question: 'Why do I need to register with my phone number or email?',
    answer: '3. Nisi, ut id faucibus nunc velit, quis netus malesuada egestas. Malesuada congue in nulla rutrum cras fermentum, et laoreet. Massa consequat, phasellus neque aliquet lacinia amet, vitae eros, quam. Non volutpat tortor, sem consequat suscipit.',
    isOpen: false,
  },
  {
    question: 'Can I create more than one wardrobe? How can I add a another wardrobe?',
    answer: '4. Nisi, ut id faucibus nunc velit, quis netus malesuada egestas. Malesuada congue in nulla rutrum cras fermentum, et laoreet. Massa consequat, phasellus neque aliquet lacinia amet, vitae eros, quam. Non volutpat tortor, sem consequat suscipit.',
    isOpen: false,
  },
  {
    question: 'Can I share my outfits with others?',
    answer: '5. Nisi, ut id faucibus nunc velit, quis netus malesuada egestas. Malesuada congue in nulla rutrum cras fermentum, et laoreet. Massa consequat, phasellus neque aliquet lacinia amet, vitae eros, quam. Non volutpat tortor, sem consequat suscipit.',
    isOpen: false,
  },
  {
    question: 'Are my outfits or info shared with other people?',
    answer: '6. Nisi, ut id faucibus nunc velit, quis netus malesuada egestas. Malesuada congue in nulla rutrum cras fermentum, et laoreet. Massa consequat, phasellus neque aliquet lacinia amet, vitae eros, quam. Non volutpat tortor, sem consequat suscipit.',
    isOpen: false,
  },
  {
    question: 'How can I deactivate my account?',
    answer: '6. Nisi, ut id faucibus nunc velit, quis netus malesuada egestas. Malesuada congue in nulla rutrum cras fermentum, et laoreet. Massa consequat, phasellus neque aliquet lacinia amet, vitae eros, quam. Non volutpat tortor, sem consequat suscipit.',
    isOpen: false,
  },
  
];

class Question extends Component {
  state = { isOpen: false }

  onClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { item, index } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="QnA">
        <div className={`Question ${isOpen ? 'open': ''}`} key={index} onClick={this.onClick}>
          {item.question}
          <div className={`Q-Arrow ${isOpen ? 'upArrow' : ''}`}>{arrowDown}</div>
        </div>
        { isOpen && <div className="Answer">{item.answer}</div> }
      </div>
      
    );
  }
}

const FAQ = () => (
  <div className="FAQ">
    {questionList.map((item, index) => (
      <Question key={index} item={item} index={index} />
    ))}
  </div>
);

export default FAQ;