const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");
// const cakeActions = require("./features/cake/cakeSlice").cakeActions;
// const icecreamActions =
//   require("./features/icecream/icecreamSlice").icecreamActions;

console.log("initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state: ", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// unsubscribe();
