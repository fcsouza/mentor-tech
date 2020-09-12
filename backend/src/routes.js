import { Router } from 'express';

import MentorController from './app/controllers/MentorController';
import SchoolController from './app/controllers/SchoolController';
import WorkshopController from './app/controllers/WorkshopController';
import WorkshopAllController from './app/controllers/WorkshopAllController';
import StudentController from './app/controllers/StudentController';
import ClassMentorController from './app/controllers/ClassMentorController';
import ClassSchoolController from './app/controllers/ClassSchoolController';
import InviteController from './app/controllers/InviteController';

const routes = new Router();

routes.get('/mentors', MentorController.index);
routes.post('/mentors', MentorController.store);

routes.get('/schools', SchoolController.index);
routes.post('/schools', SchoolController.store);

routes.get('/workshops', WorkshopAllController.index);

routes.get('/workshops/:mentor_id', WorkshopController.index);
routes.post('/workshops', WorkshopController.store);

routes.get('/students/:school_id', StudentController.index);
routes.post('/students', StudentController.store);

routes.get('/classMentor/:mentor_id', ClassMentorController.index);
routes.post('/classMentor/:mentor_id', ClassMentorController.store);

routes.get('/classSchool/:school_id', ClassSchoolController.index);
routes.post('/classSchool/:school_id', ClassSchoolController.store);

routes.get('/invites/:id_from/:agent_create', InviteController.index);
routes.post('/invites', InviteController.store);

export default routes;
