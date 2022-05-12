import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [peopleIndex, setPeopleIndex] = useState(0);
  const {name, job, image, text} = people[peopleIndex];


  const checkNumber = (number)=>{
    if (number > people.length - 1) {
        return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }
const nextPerson = ()=>{
  setPeopleIndex((prevIndex)=>{
    let newIndex = prevIndex + 1;
    return checkNumber(newIndex);
  })
}

const prevPerson = ()=>{
    setPeopleIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkNumber(newIndex);
    });
}

const randomNumber = ()=>{
  let randomValue = Math.floor(Math.random() * people.length);
  if (randomValue === peopleIndex) {
    randomValue = peopleIndex + 1;
  }
  setPeopleIndex(checkNumber(randomValue));
}


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>Surprise me</button>
    </article>
  );
};

export default Review;
