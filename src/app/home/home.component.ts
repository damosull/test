import { Component } from '@angular/core';
import { Workouts } from '../models/workouts.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedWorkout = '';
  exercises: Workouts = {
    Push: [
      {
        name: 'Flat bench press',
        sets: 4,
        reps: 4,
        actualSets: 0,
        actualReps: 0,
      },
      {
        name: 'Incline bench press',
        sets: 3,
        reps: 5,
        actualSets: 0,
        actualReps: 0,
      },
    ],
    Pull: [
      { name: 'Lat Pulldown', sets: 3, reps: 8, actualSets: 0, actualReps: 0 },
      {
        name: 'Single Arm Rows',
        sets: 2,
        reps: 8,
        actualSets: 0,
        actualReps: 0,
      },
    ],
    Legs: [
      { name: 'Leg Press', sets: 4, reps: 10, actualSets: 0, actualReps: 0 },
      {
        name: 'Bulgarian Split Squats',
        sets: 3,
        reps: 12,
        actualSets: 0,
        actualReps: 0,
      },
    ],
    Shoulders: [
      {
        name: 'Shoulder press',
        sets: 3,
        reps: 10,
        actualSets: 0,
        actualReps: 0,
      },
      {
        name: 'Lateral raises',
        sets: 6,
        reps: 6,
        actualSets: 0,
        actualReps: 0,
      },
    ],
  };

  selectWorkout(workout: string) {
    this.selectedWorkout = workout;
  }

  saveWorkout() {
    // Save the workout data to the database here
  }
}
