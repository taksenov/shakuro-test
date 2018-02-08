/**
 * Notes
 */
export function paymentResult() {
    function randomInteger() {
        let randomValue = Math.random();
        randomValue = Math.round(randomValue);
        return randomValue;
    }

    return [{ paymentSuccess: randomInteger() }];
} //paymentResult

// Notes =======================================
