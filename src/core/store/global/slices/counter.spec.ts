import { counterReducer, counterSlice } from '@/core/store/global/slices/counter'
import { CounterState } from '@/core/store/global/states/type'

describe('counter reducer', () => {
    const initialState: CounterState = {
        value: 3,
        status: 'idle',
    }

    const { decrement, increment, incrementByAmount } = counterSlice.actions

    it('should handle initial state', () => {
        expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
            value: 0,
            status: 'idle',
        })
    })

    it('should handle increment', () => {
        const actual = counterReducer(initialState, increment())
        expect(actual.value).toEqual(4)
    })

    it('should handle decrement', () => {
        const actual = counterReducer(initialState, decrement())
        expect(actual.value).toEqual(2)
    })

    it('should handle incrementByAmount', () => {
        const actual = counterReducer(initialState, incrementByAmount(2))
        expect(actual.value).toEqual(5)
    })
})
