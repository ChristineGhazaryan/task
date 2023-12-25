export enum URLS {
  DAILY_WETHER = "https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=09e8a08d77d881dbe391b036f1e007dd",
  CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=09e8a08d77d881dbe391b036f1e007dd",
}

export interface Wether {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface Clouds {
  all: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Sys {
  pod: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

// -----------------

export interface CurrentWether {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: CurrentSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface CurrentSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// ----------------
export interface StateType {
  dailyWetherData: Wether[];
  currentWetherData: CurrentWether;
}
