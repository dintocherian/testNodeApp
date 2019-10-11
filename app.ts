import express from 'express';
import exphbs from 'express-handlebars';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://mongo_db_user:mongodb@cluster0-pa1xs.mongodb.net/test?retryWrites=true&w=majority', {

})
.then(() => console.log('mongodb connected..'))
.catch((error) => console.log(error));

const port = 80;

// app.engine('handlebars', exphbs({
//   defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

app.get('/', (req, resp) => {
  resp.send('test');
});

app.get('/about', async (req, resp) => {
  //complexFunction();
  resp.send('succ');
});

async function complexFunction(): Promise<any> {
  let users = createUsers(10000000);
  console.log('finished creating users');
  sortUsersByAge(users);
}

function createUsers(count: number) {
  console.log('reached above loop');
  const users = [];
  for (let i = 0; i <= count; i++) {
    console.log('reached in loop');
    console.log(i);
    let flag = 'odd';
    if (i % 2 === 0) {
      flag = 'even';
    }
    if (flag === 'even') {
      const user = {
        age: i - 20
      };
      users.push(user);
    } else {
      const user = {
        age: i + 20
      };
      users.push(user);
    }
    console.log(i);
  }
  return users;
}
export interface User {
  age: number;
  name: string;
}
function sortUsersByAge(users: User[]) {
  users.sort(function(a, b) {
    return a.age < b.age ? -1 : 1;
  });
}

app.listen(port, () => {
  console.log(`test ${port}`);
});
