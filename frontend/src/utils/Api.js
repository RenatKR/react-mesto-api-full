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

  getInitialCards() {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  editUserInfo(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  editUserAva(data) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  addNewCard(data) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  deleteCard(cardId) {
    return fetch(this._url + `/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      method: `${isLiked ? "DELETE" : "PUT"}`,
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    });
  }
}

//

const api = new Api({
  url: "http://api.kurbangaliev1987.nomoredomains.work",
  headers: {
    //authorization: "5fdc434d-6d5b-4e32-8137-00f87a447f90",
    "Content-Type": "application/json",
  },
});

export default api;
