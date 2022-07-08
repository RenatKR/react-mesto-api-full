class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards(jwt) {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  getUserInfo(jwt) {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  editUserInfo(data, jwt) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  editUserAva(data, jwt) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  addNewCard(data, jwt) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  deleteCard(cardId, jwt) {
    return fetch(this._url + `/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  changeLikeCardStatus(cardId, isLiked, jwt) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      method: `${isLiked ? "DELETE" : "PUT"}`,
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this.checkRes(res);
    });
  }
}

//

const api = new Api({
  url: "http://localhost:3000",
});

export default api;
