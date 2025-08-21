// import axios from "axios";

import WebApp from "@twa-dev/sdk";
import axios from "axios";


const URL = "https://footballearn.site:6044//api/v1/"; //PROD
// const TYPE = "DEV";
const TYPE = "PROD";


export const TG_ID = WebApp.initDataUnsafe.user.username;

export const getAllPlayers = async () => {
  if (TYPE == "DEV") {
    return [
      {
        id: 1,
        name: "Player One",
        price: 1000,
        value: 15.5,
        photo: "./images/person/1.png",
      },
      {
        id: 2,
        name: "Player Two",
        price: 2000,
        value: 20,
        photo: "./images/person/2.png",
      },
      {
        id: 3,
        name: "Player Three",
        price: 1500,
        value: 18.7,
        photo: "./images/person/3.png",
      },
      {
        id: 4,
        name: "Player Four",
        price: 1000,
        value: 15.5,
        photo: "./images/person/4.png",
      },
      {
        id: 5,
        name: "Player Five",
        price: 2000,
        value: 20,
        photo: "./images/person/5.png",
      },
      {
        id: 6,
        name: "Player Fifth",
        price: 1500,
        value: 18.7,
        photo: "./images/person/6.png",
      },
    ];
  } else {
    try {
      const response = await axios.get(URL + "player/shop/all");
      return response.data;
    } catch {
      return false;
    }
  }
};
export const getAllBalls = async () => {
  if (TYPE == "DEV") {
    return [
      {
        id: 1,
        name: "Test",
        price: 100,
        photo: "./images/ball/1.png",
      },
      {
        id: 2,
        name: "Test",
        price: 100,
        photo: "./images/ball/2.png",
      },
      {
        id: 3,
        name: "Test",
        price: 100,
        photo: "./images/ball/3.png",
      },
      {
        id: 4,
        name: "Test",
        price: 100,
        photo: "./images/ball/4.png",
      },
      {
        id: 5,
        name: "Test",
        price: 100,
        photo: "./images/ball/5.png",
      },
      {
        id: 6,
        name: "Test",
        price: 100,
        photo: "./images/ball/6.png",
      },
    ];
  } else {
    try {
      const response = await axios.get(URL + "ball/shop/all");
      return response.data;
    } catch {
      return false;
    }
  }
};

export const getListUsers = async (id) => {
  if (TYPE == "DEV") {
    return [
      {
        amount: 0,
        nameSurname: "TestUser",
        photo: "string",
      },
      {
        amount: 100,
        nameSurname: "TestUser2",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "TestUser3",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "TestUser6",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "5",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "6",
        photo: "string",
      },
      {
        amount: 100,
        nameSurname: "7",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "8",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "9",
        photo: "string",
      },
      {
        amount: 0,
        nameSurname: "10",
        photo: "string",
      },
    ];
  } else {
    try {
      const response = await axios.get(URL + "pool_users/get/" + id);
      return response.data.poolUserDtoList;
    } catch {
      return false;
    }
  }
};

export const getHistory = async () => {
  if (TYPE == "DEV") {
    return [
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
    ];
  } else {
    return [
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
      {
        name: "Test name",
        type: "minus",
        price: 14,
      },
    ];
  }
};

export const getUserInfo = async (id) => {
  if (TYPE == "DEV") {
    return {
      telegramId: "vladsasnyk",
      username: "Nick_name",
      balance: 250,
      currentBallId: 1,
      currentPlayerId: 1,
      counterFriend: 0,
      energy: 5,
      email: null,
      phone: null,
      dailyBonus: 1,
      dailyBonusAvailable: false,
      dailyBonusUnlock: "2024-11-14T15:02:21",
      telegramBonus: false,
      admin: false,
    };
  } else {
    try {
      const response = await axios.get(URL + "user/" + id + "/{uniqueLink}");
      if (response) {
        return response.data;
      } else {
        return "error";
      }
    } catch {
      return "error";
    }
  }
};

export const updateUserName = async (id, name) => {
  try {
    const response = await axios.put(
      URL + "user/update/nickname/" + id,
      '"' + name + '"',
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response) {
      return true;
    }
  } catch (err) {
    return false;
  }
};

export const updateBalance = async (id, clicks) => {
  try {
    const response = await axios.put(
      URL + "user/update/balance/" + id,
      '"' + clicks + '"',
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (err) {
    return false;
  }
};

export const getBoughtPlayers = async (id) => {
  if (TYPE == "DEV") {
    return true;
  }

  try {
    const response = await axios.get(URL + "user/players/" + id);
    return response.data;
  } catch {
    return false;
  }
};

export const getBoughtBalls = async (id) => {
  if (TYPE == "DEV") {
    return true;
  }

  try {
    const response = await axios.get(URL + "user/balls/" + id);
    return response.data;
  } catch {
    return false;
  }
};

export const selectPlayer = async (id, idPlayer) => {
  try {
    const response = await axios.put(
      URL + "user/player/update/" + id,
      '"' + idPlayer + '"',
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch {
    return false;
  }
};
export const buyNewPlayer = async (id, idPlayer) => {
  try {
    const response = await axios.post(
      URL + "user/players/buy/" + id,
      '"' + idPlayer + '"',
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const selectBall = async (id, idBall) => {
  try {
    const response = await axios.put(
      URL + "user/balls/update/" + id,
      '"' + idBall + '"',
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch {
    return false;
  }
};
export const buyNewBall = async (id, idBall) => {
  try {
    const response = await axios.post(
      URL + "user/balls/buy/" + id,
      '"' + idBall + '"',
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getCurrency = async () => {
  if (TYPE == "DEV") {
    return [
      {
        country: "ARS",
        value: 1100,
      },
      {
        country: "USD",
        value: 1,
      },
      {
        country: "COP",
        value: 4300,
      },
      {
        country: "CLP",
        value: 1010,
      },
      {
        country: "MXN",
        value: 21.3,
      },
    ];
  } else {
    try {
      const response = await axios.get(URL + "currency/all");
      return response.data;
    } catch {
      return false;
    }
  }
};

export const checkPromo = async (id, promo) => {
  try {
    const response = await axios.post(
      URL + "user/use_promo/" + id,
      '"' + promo + '"',
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (err) {
    console.log(err);
    return false;
  }
  // return true;
};

export const checkChannel = async (type, id) => {
  // if (!type) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(false);
  //     }, 3000);
  //   });
  // }
  try {
    const status = await axios.post(URL + "user/channel/" + id);
    if (status) {
      const response = await axios.post(URL + "user/bonus/" + id);
      return response;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

export const dailyBonusUse = async (id) => {
  try {
    const response = await axios.get(URL + "user/bonus/" + id);
    return response;
  } catch {
    return false;
  }
};

export const getCards = async () => {
  try {
    const response = await axios.get(URL + "details/all");
    return response.data;
  } catch {
    throw new Error("error fetching data");
  }
};

export const sendPhoto = async (formData, sum, stage, country) => {
  try {
    const response = await axios.post(
      URL +
        "user/sendImage/" +
        TG_ID +
        "?sum=" +
        sum +
        "&stage=" +
        stage +
        "&country=" +
        country,
      formData,
    );
    if (response) {
      return true;
    }
  } catch {
    return false;
  }
};

export const checkPaymanetStatus = async () => {
  try {
    const response = await axios.get(URL + "user/sendImage/getStatus/" + TG_ID);
    if (response) {
      return response.data;
    } else {
      console.log("test");
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getUrlLink = async () => {
  try {
    const response = await axios.get(URL + "user/referal/" + TG_ID);
    if (response) {
      return response.data;
    }
  } catch {
    return false;
  }
};

export const getBonusForCom = async (sum) => {
  console.log(sum);
  try {
    const response = await axios.post(URL + "user/balance/" + TG_ID, sum, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
