import db from './config/database.config';
import app from './app';
require('dotenv').config();

db.sync()
    .then(() => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log('error connecting to database', err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
