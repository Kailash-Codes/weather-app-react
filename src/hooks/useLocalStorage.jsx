export const useLocalStorage = () => {
  return {
    location: localStorage.getItem("location"),
  };
};
