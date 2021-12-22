const getUser = (store) => store.userInfo.userInfo;
const getStep = (store) => store.userInfo.step;

const selectors = {
  getUser,
  getStep,
};

export default selectors;
