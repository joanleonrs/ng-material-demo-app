import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

export interface Questionnaire {
  position: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
  answer8: string;
  answer9: string;
  answer10: string;
}

const QUESTIONS: any[] = [
  {
    code: 'q1',
    description:
      '¿Question text 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q2',
    description:
      '¿Question text 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q3',
    description:
      '¿Question text 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q4',
    description:
      '¿Question text 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q5',
    description:
      '¿Question text 5 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q6',
    description:
      '¿Question text 6 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q7',
    description:
      '¿Question text 7 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q8',
    description:
      '¿Question text 8 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q9',
    description:
      '¿Question text 9 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
  {
    code: 'q10',
    description:
      '¿Question text 10 Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
  },
];

const ANSWERS_DATA: Questionnaire[] = [
  {
    position: 1,
    answer1:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer2:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer3:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer4:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer5:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer6:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer7:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer8:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer9:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer10:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
  },
  {
    position: 2,
    answer1:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer2:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer3:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer4:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer5:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer6:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer7:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer8:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer9:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer10:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
  },
  {
    position: 3,
    answer1:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer2:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer3:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer4:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer5:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer6:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer7:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer8:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer9:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer10:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
  },
  {
    position: 4,
    answer1:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer2:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer3:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer4:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer5:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer6:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer7:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer8:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer9:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
    answer10:
      'Answer text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio ipsum illum nulla dolores tempora sunt nihil sed eum nam.',
  },
];

class ExampleDataSource extends DataSource<Questionnaire> {
  private _dataStream = new ReplaySubject<Questionnaire[]>();

  constructor(initialData: Questionnaire[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Questionnaire[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Questionnaire[]) {
    this._dataStream.next(data);
  }
}

/**
 * @title Flex-layout tables with sticky headers, footers, and columns
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayedRows = [
    'position',
    'answer1',
    'answer2',
    'answer3',
    'answer4',
    'answer5',
    'answer6',
    'answer7',
    'answer8',
    'answer9',
    'answer10',
    'options',
  ];
  // dataSource = ANSWERS_DATA;
  dataToDisplay = [...ANSWERS_DATA];
  dataSource = new ExampleDataSource(this.dataToDisplay);

  getQuestionDescriptionByIndex(columnIndex: number) {
    return QUESTIONS[columnIndex].description;
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ANSWERS_DATA.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ANSWERS_DATA[randomElementIndex]
    ];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}
