const Increment = 'Increment';
const Decrement = 'Decrement';
const Reset = 'Reset';

function Incrementation() {
  return {
    type: Increment
  }
}

function Decrementation() {
  return {
    type: Decrement
  }
}

function Resete() {
  return {
    type: Reset
  }
}

const initialState = {
  count: 12
}

const incrReducer = (state = initialState, action) => {
  switch (action.type) {
    case Increment:
      return {
        ...state,
        count: state.count + 1
      }
    case Decrement:
      return {
        ...state,
        count: state.count - 1
      }
    case Reset:
      return {
        ...state,
        count: initialState.count
      }
    default:
      return state
  }
}

const store = Redux.createStore(incrReducer)

const updateUI = () => {
  const value = document.querySelector('#value')
  value.textContent = store.getState().count
}

const incrementButton = document.querySelector('#increment')
incrementButton.addEventListener('click', () => {
  store.dispatch(Incrementation())
})

const decrementButton = document.querySelector('#decrement')
decrementButton.addEventListener('click', () => {
  store.dispatch(Decrementation())
})

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', () => {
  store.dispatch(Resete())
})

store.subscribe(updateUI)

updateUI()