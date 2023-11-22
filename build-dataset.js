#!/usr/bin/env node
const {v4: uuidv4} = require("uuid");

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomValue(set) {
  return set[randomIntFromInterval(0, set.length - 1)];
}

const authors = ["Maximilian", "John", "Rebecca", "Maria", "Agencies"];

const geos = ["ES", "US", "FR", "IT"];

const articles = [...Array(100).keys()].map(index => {
  return {
    id: uuidv4(),
    url: `https://www.example.com/article${index + 1}`,
    author: getRandomValue(authors),
    image_url: `https://picsum.photos/600/400?buster=${Math.random()}`,
    geo: getRandomValue(geos),
  };
});

const getHourlyTraffic = () =>
  [...Array(24).keys()].map(hour => {
    return {hour, traffic: Math.floor(Math.random() * 1000)};
  });

const getDailyTraffic = () =>
  [...Array(31).keys()].map(day => {
    return {day: day + 1, hourly_traffic: getHourlyTraffic()};
  });

const trafficData = articles.map(article => {
  return {...article, daily_traffic: getDailyTraffic()};
});

const dataset = {traffic_data: trafficData};

const json = JSON.stringify(dataset);

console.log(json);
