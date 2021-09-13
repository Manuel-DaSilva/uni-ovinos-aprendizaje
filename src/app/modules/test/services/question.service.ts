import { Injectable } from '@angular/core';
import { questions } from '../data/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  getRandomQuestion() {
    const localQuestions = questions;
    const randIndex = Math.floor(Math.random() * questions.length);
    console.log(randIndex);

    return localQuestions[randIndex];
  }
}
