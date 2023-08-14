import 'dotenv/config';
import app from './src/app.js';

const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));
