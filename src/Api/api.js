var xhr = new XMLHttpRequest();

xhr.open('POST', 'https://api.z-api.io/instances/ID_DA_INSTANCIA/token/ID_DO_TOKEN/send-messages');

xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(JSON.stringify({ "phone":"558399121819", "message":"Digite uma mensagem"}));