#### Connecting to MongoDB via mongoose
---

1. First install mongoose

```shell
npm i mongoose
```

2. Copy this into your `db/config.js` file or anything you wish to call it.

```javascript
// db/config.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Db connected");
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
```

3. Create your models and start creating data.

```typescript
// db/models/User.ts

import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: String,
  age: Number,
});


export default models.User || model("User", UserSchema);
```
