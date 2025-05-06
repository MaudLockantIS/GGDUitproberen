import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Model } from 'survey-core';

const surveyJson = {
  pages: [
    {
      name: 'PersonalDetails',
      elements: [
        {
          type: 'text',
          name: 'FirstName',
          title: 'Enter your first name:',
        },
        {
          type: 'text',
          name: 'LastName',
          title: 'Enter your last name:',
        },
        {
          type: 'panel',
          name: 'Contacts',
          state: 'collapsed',
          title: 'Contacts (optional)',
          elements: [
            {
              type: 'text',
              name: 'Telegram',
              title: 'Telegram:',
            },
            {
              type: 'text',
              name: 'GitHub',
              title: 'GitHub username:',
            },
          ],
        },
      ],
    },
  ],
};

interface WeatherForecast {
  id: number;
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  
  handleSurveyComplete() {
    //alert('Survey completed!');
  }
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  surveyModel!: Model;

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
