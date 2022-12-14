import React, { useState } from 'react'
import styles from '@styles/counter/Counter.module.scss'
import useCounterInfo from '@/hooks/useCounterInfo'

export default function Counter() {
    const {
        count,
        actions: { decrement, increment, incrementByAmount },
        incrementAsync,
        incrementIfOdd,
        dispatch,
    } = useCounterInfo()
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0

    return (
        <div className={styles.wrap}>
            <div className={styles.row}>
                <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
                    Add Amount
                </button>
                <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
                    Add Async
                </button>
                <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
                    Add If Odd
                </button>
            </div>
        </div>
    )
}
