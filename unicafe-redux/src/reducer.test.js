import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'


// Define la suite de pruebas para el reducer "unicafe"
describe('unicafe reducer', () => {
  // Estado inicial utilizado en las pruebas
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  // Prueba que verifica que el reducer devuelve el estado inicial correcto
  // cuando se llama con un estado undefined y una acción desconocida
  test('should return a proper initial state when called with undefined state', () => {
    const state = undefined // Estado no definido
    const action = {
      type: 'DO_NOTHING' // Acción desconocida
    }

    // Llama al reducer con estado undefined y acción desconocida
    const newState = counterReducer(state, action)
    // Verifica que el nuevo estado sea igual al estado inicial
    expect(newState).toEqual(initialState)
  })

  // Prueba que verifica que el contador "good" se incrementa correctamente
  test('good is incremented', () => {
    const action = {
      type: 'GOOD' // Acción para incrementar "good"
    }
    const state = initialState // Usa el estado inicial

    deepFreeze(state) // Congela el estado para asegurar inmutabilidad
    const newState = counterReducer(state, action) // Llama al reducer
    // Verifica que el nuevo estado tenga "good" incrementado en 1
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  // Prueba que verifica que el contador "ok" se incrementa correctamente
  test('ok is incremented', () => {
    const action = {
      type: 'OK' // Acción para incrementar "ok"
    }
    const state = initialState // Usa el estado inicial

    deepFreeze(state) // Congela el estado para asegurar inmutabilidad
    const newState = counterReducer(state, action) // Llama al reducer
    // Verifica que el nuevo estado tenga "ok" incrementado en 1
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  // Prueba que verifica que el contador "bad" se incrementa correctamente
  test('bad is incremented', () => {
    const action = {
      type: 'BAD' // Acción para incrementar "bad"
    }
    const state = initialState // Usa el estado inicial

    deepFreeze(state) // Congela el estado para asegurar inmutabilidad
    const newState = counterReducer(state, action) // Llama al reducer
    // Verifica que el nuevo estado tenga "bad" incrementado en 1
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  // Prueba que verifica que el estado se restablece correctamente al inicial
  test('state is reset with zero', () => {
    const action = {
      type: 'ZERO' // Acción para restablecer el estado
    }
    const state = {
      good: 3,
      ok: 2,
      bad: 1
    } // Estado no inicial

    deepFreeze(state) // Congela el estado para asegurar inmutabilidad
    const newState = counterReducer(state, action) // Llama al reducer
    // Verifica que el nuevo estado sea igual al estado inicial
    expect(newState).toEqual(initialState)
  })
})


/*
describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
})
*/



