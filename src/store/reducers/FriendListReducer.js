import * as ActionTypes from "../actions/FriendListActions";

const InitialState = {
  friendsList: [
    {
      id: 1,
      friendName: "Theodore Roosevelt",
      favourite: true,
      gender: "male"
    },
    {
      id: 2,
      friendName: "Abraham Lincoln",
      favourite: false,
      gender: "male"
    }
  ]
};

const FriendsListReducer = (state = InitialState, action) => {
  let newState;
  switch (action.type) {
    case ActionTypes.ADD_FRIEND:
      newState = {
        ...state,
        friendsList: action.value
      };
      return newState;

    case ActionTypes.DELETE_FRIEND:
      const deleteFriend = state.friendsList.filter(
        item => item.id !== action.id
      );
      newState = {
        ...state,
        friendsList: deleteFriend
      };
      return newState;

    case ActionTypes.CHANGE_FAVOURITE_LIST:
      const changeFavouriteList = state.friendsList.map(item => {
        if (item.id === action.item.id) {
          item.favourite = !action.item.favourite;
          return item;
        } else {
          return item;
        }
      });
      newState = {
        ...state,
        friendsList: changeFavouriteList
      };
      return newState;
    case ActionTypes.CHANGE_GENDER:  
    const changeGender = state.friendsList.map(item => {
      if (item.id === action.item.id) {
        item.gender = action.item.gender;
        return item;
      } else {
        return item;
      }
    });
    newState = {
      ...state,
      friendsList: changeGender
    };
    return newState;
    default:
      return state;
  }
};
export default FriendsListReducer;
