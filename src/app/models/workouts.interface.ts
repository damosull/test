export interface Workouts {
  [key: string]: Array<{
    name: string;
    sets: number;
    reps: number;
    actualSets: number;
    actualReps: number;
  }>;
}
