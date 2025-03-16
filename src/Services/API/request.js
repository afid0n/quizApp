import axios from "axios";
import { API_BASE_URL } from "./api";

async function getAll(endpoint) {
    const result = {
        data: null,
        loading: true,
        error: null,
    }
    await axios
        .get(API_BASE_URL + endpoint)
        .then((response) => {
            result.data = response.data;
        })
        .catch((err) => {
            result.error = err;
        })
        .finally(() => {
            result.loading = false;
        })

    return result
}

async function getOne(endpoint, id) {
    const result = {
        data: null,
        loading: true,
        error: null,
    }
    await axios
        .get(API_BASE_URL + endpoint + `/${id}`)
        .then((response) => {
            result.data = response.data;
        })
        .catch((err) => {
            result.error = err;
        })
        .finally(() => {
            result.loading = false;
        })

    return result
}

async function postOne(endpoint, payload) {
    const result = {
        data: null,
        loading: true,
        error: null,
    }
    await axios
        .post(API_BASE_URL + endpoint, payload)
        .then((response) => {
            result.data = response.data;
        })
        .catch((err) => {
            result.error = err;
        })
        .finally(() => {
            result.loading = false;
        })

    return result
}

async function deleteOne(endpoint, id) {
    const result = {
        data: null,
        loading: true,
        error: null,
    }

    await axios
        .delete(API_BASE_URL + endpoint + `/${id}`)
        .then((response) => {
            result.data = response.data;
        })
        .catch((err) => {
            result.error = err;
        })
        .finally(() => {
            result.loading = false
        })

    return result

}

async function updateOne(endpoint,id,payload) {
    const result = {
      data: null,
      loading: true,
      error: null,
    };
    await axios
      .patch(API_BASE_URL + endpoint + `/${id}`, payload)
      .then((response) => {
        console.log("axios response: ", response);
        result.data = response.data;
      })
      .catch((err) => {
        result.error = err;
      })
      .finally(() => {
        result.loading = false;
      });
  
    return result;
  }

  const controller = {
    getAll: getAll,
    getOne: getOne,
    postOne: postOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
  };
  
  export default controller;