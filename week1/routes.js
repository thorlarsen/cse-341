const requestHandler = (rqst, resp) => {
    const url = rqst.url;
    const method = rqst.method;
    if (url === '/') {
      resp.setHeader('Content-Type', 'text/html');
      resp.write(`
           <html>
           <head><title>My Page</title></head>
           <body>
             <p>Debbie Larsen</p>
           </body>
           </html>
      `);
      return resp.end();
    }
}
module.exports = requestHandler;