const apiPrefix = 'http://localhost:8080';

export const mobileOperatorsList = () =>
    fetch(`${apiPrefix}/mobile-operators-list`, {
        method: 'GET',
        mode: 'cors'
    }).then(response => response.json());

export const paymentResult = () =>
    fetch(`${apiPrefix}/payment-result`, {
        method: 'GET',
        mode: 'cors'
    }).then(response => response.json());
