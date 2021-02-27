const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

export function getImage(json) {
  return {
    type: GET_IMAGE,
    payload: json.message,
  };
}

export function requestImage() {
  return {
    type: REQUEST_IMAGE,
  };
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestImage());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}
