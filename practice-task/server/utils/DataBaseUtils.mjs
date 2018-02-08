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

export function mobileOperatorsList() {
    return [
        { name: 'МТС', icon: 'http://via.placeholder.com/64x64', index: 1 },
        { name: 'Мегафон', icon: 'http://via.placeholder.com/64x64', index: 2 },
        { name: 'Билайн', icon: 'http://via.placeholder.com/64x64', index: 3 }
    ];
} //paymentResult

// Notes =======================================
