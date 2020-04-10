import { Router } from 'express';
import multer from 'multer';
import { avatar, signature } from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverController from './app/controllers/DeliverController';
import FileController from './app/controllers/FileController';
import PackageController from './app/controllers/PackageController';
import DeliverAreaController from './app/controllers/DeliverAreaController';
import PickPackageToDeliverController from './app/controllers/PickPackageToDeliverController';
import FinishDeliverController from './app/controllers/FinishDeliverController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const deliverAvatar = multer({ storage: avatar });
const recipientSignature = multer({ storage: signature });

// Rotas para criação de usuários e sessão
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Rota para acesso do deliver às suas todas as entregas e as realizadas
routes.get('/deliveryman/:id/allpackages', DeliverAreaController.index);
routes.get('/deliveryman/:id/deliveries', DeliverAreaController.show);

// Rotas para retirada e finalização das entregas
routes.put('/pickpackage/:id', PickPackageToDeliverController.update);
routes.put(
  '/finishdeliver/:id',
  recipientSignature.single('signature'),
  FinishDeliverController.update
);

// Rota para cadastro de problemas com a entrega
routes.post('/delivery/:packageId/problems', DeliveryProblemsController.store);

// Middleware para autenticação
routes.use(authMiddleware);

// Rotas para os recipients
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

// Rotas para os delivers
routes.get('/delivers', DeliverController.index);
routes.put('/delivers/:id', DeliverController.update);
routes.post('/delivers', DeliverController.store);
routes.delete('/delivers/:id', DeliverController.delete);

// Rota para upload do avartar do deliver
//routes.post('/files', upload.single('file'), FileController.store);
routes.post('/files', deliverAvatar.single('file'), FileController.store);

// Rotas para gestão de encomendas
routes.post('/packages', PackageController.store);
routes.get('/packages', PackageController.index);
routes.put('/packages/:id', PackageController.update);
routes.delete('/packages/:id', PackageController.delete);

// Rota para upload da imagem da assinatura do reciever
// routes.post(
//   '/signature',
//   recipientSignature.single('receiver_signature'),
//   SignatureController.store
// );

export default routes;
