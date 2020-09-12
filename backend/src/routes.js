import { Router } from 'express';

import MentorController from './app/controllers/MentorController';
import SchoolController from './app/controllers/SchoolController';
import WorkshopController from './app/controllers/WorkshopController';
import WorkshopAllController from './app/controllers/WorkshopAllController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.get('/mentors', MentorController.index);
routes.post('/mentors', MentorController.store);
