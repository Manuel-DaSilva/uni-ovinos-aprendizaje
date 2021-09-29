import { Component } from '@angular/core';
import { Question } from './models/question.model';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {
  question: Question | null = null;
  showOptions = true;
  wasCorrect = false;
  errorMessage = [
    {
      severity: 'error',
      summary: 'Incorrecto',
      detail: 'La respuesta fue incorrecta.',
    },
  ];
  successMessage = [
    {
      severity: 'success',
      summary: 'Correcto',
      detail: 'Respondiste bien la pregunta!',
    },
  ];
  constructor(private questionService: QuestionService) {
    this.refreshQuestion();
  }

  refreshQuestion() {
    this.question = this.questionService.getRandomQuestion();
    this.showOptions = true;
    console.log(this.question);
  }

  answerQuestion(i: number) {
    if (i === this.question?.correctAnswerIndex) {
      // TODO add notification
      console.log('Correct!');
      this.wasCorrect = true;
    } else {
      // TODO add notification
      console.log('wrong!');
      this.wasCorrect = false;
    }

    this.showOptions = false;
  }
}
