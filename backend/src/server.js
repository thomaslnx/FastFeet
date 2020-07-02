import cors from 'cors';
import app from './app';

const port = process.env.PORT || 3333;

app.use(cors());
app.listen(port, () => console.log(`Servidor up na porta ${port}`));
