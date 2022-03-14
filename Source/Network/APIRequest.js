// A wrapper for the API request.

const baseURL = 'https://dog.ceo/api';
const paginationBaseURL = 'https://jsonplaceholder.typicode.com/photos';

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
    response = {status: result.status, message: Object.keys(result.message)};
  } catch (exception) {
    response.status = 'error';
  } finally {
    return response;
  }
};

export const getDogsByBreed = async (breedName, limit = 1, signal) => {
  let response = {};
  try {
    const res = await fetch(`${baseURL}/breed/${breedName}/images`, {
      signal: signal,
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

export const getPagedImages = async (page, limit = 10) => {
  let response = {};
  try {
    const res = await fetch(
      `${paginationBaseURL}?_limit=${limit}&_page=${page}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    response = await res.json();
  } catch (exception) {
    response.status = 'error';
  } finally {
    return response;
  }
};
