let userName = document.querySelector('#name');

function changeName() {
    let newName = 'Juana Diaz';
    userName.innerText = newName;
}
let request = document.querySelector('#requestsCount')
let requestCount = request.innerText;
let connections = document.querySelector('#connectionsCount');
let connectionsCount = connections.innerText;

console.log(requestCount);
console.log(connectionsCount);

function accept(element) {
    requestCount--;
    request.innerText = requestCount;
    connectionsCount++;
    connections.innerText = connectionsCount;
    element.parentElement.remove();
}

function deny(element) {
    requestCount--;
    request.innerText = requestCount;
    element.parentElement.remove();
}