'use strict';

const user = require('mongoose').model('user');

let mockData = {
  userId: 'gildong',
  email: 'abcds@fsdss.com',
  name: '홍길동',
  age: 25,
  field: 'SW Engineer',
  region: 'Seoul',
  skills: 'JAVA',
};

// Add a mock data into response.
export function insertMockData(req, res, next) {
  let userSample = new user(mockData);
  userSample.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Success');
    }
  });
}

// Return all users. 
export function getAll(req, res, next) {
  user.find((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
}
