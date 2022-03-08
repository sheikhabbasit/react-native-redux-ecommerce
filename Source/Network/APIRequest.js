// A wrapper for the API request.

const baseURL = 'https://dog.ceo/api';

export const getRandomDog = async (limit = 1, breed) => {
  let response = {};
  try {
    const res = await fetch(`${baseURL}/breeds/image/random/${limit}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    response = await res.json();
  } catch (exception) {
    response.status = 'error';
  } finally {
    return response;
  }
};

export const getDogGenres = async (limit = 1) => {
  let response = {};
  try {
    const res = await fetch(`${baseURL}/breeds/list/all`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    let result = await res.json();
    response = Object.keys(result.message);
  } catch (exception) {
    response.status = 'error';
  } finally {
    return response;
  }
};
