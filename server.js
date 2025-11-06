const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    // Устанавливаем заголовок Content-Type для отправки HTML
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Отправляем минимальный HTML-ответ, чтобы подтвердить работу
    const htmlResponse = ' \
        <!DOCTYPE html> \
        <html lang="ru"> \
        <head> \
            <meta charset="UTF-8"> \
            <title>SERVER IS ALIVE</title> \
        </head> \
        <body style="background-color: #f0f0f0; text-align: center; padding-top: 50px;"> \
            <h1 style="color: #10B981;">🟢 ЧИСТЫЙ СЕРВЕР NODE.JS РАБОТАЕТ!</h1> \
            <p style="color: #4B5563;">Это финальная проверка. Если вы видите этот текст, Amvera совместима.</p> \
        </body> \
        </html> \
    ';
    
    res.end(htmlResponse);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('[SERVER] Pure HTTP Server is running on 0.0.0.0:' + PORT);
});
