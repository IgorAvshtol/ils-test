const fakeRequests = [
  {
    key: '0',
    pointOne: [59.84660399, 30.29496392],
    pointTwo: [59.82934196, 30.42423701],
    pointThree: [59.83567701, 30.38064206],
    name: 'Маршрут №1',
  },
  {
    key: '1',
    pointOne: [59.82934196, 30.42423701],
    pointTwo: [59.82761295, 30.41705607],
    pointThree: [59.84660399, 30.29496392],
    name: 'Маршрут №2',
  },
  {
    key: '2',
    pointOne: [59.83567701, 30.38064206],
    pointTwo: [59.84660399, 30.29496392],
    pointThree: [59.82761295, 30.417005607],
    name: 'Маршрут №3',
  },
];

const requestApi = {
  async getAll() {
    return fakeRequests;
  },
};

export default requestApi;
