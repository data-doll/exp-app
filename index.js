const app =  require( "./app");
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log('Demo app is listening on port 3000!'),
);