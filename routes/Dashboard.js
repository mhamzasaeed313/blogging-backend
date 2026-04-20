const express = require('express');
const { isAdmin } = require('../middleware/CheckAdmin');
const { Dashboard, Delete, GetUsers } = require('../controller/dashboard.controller');

const DashboardRoutes = express.Router();

DashboardRoutes.get('/', isAdmin, Dashboard);
DashboardRoutes.get('/users', isAdmin, GetUsers);
DashboardRoutes.delete('/delete/:id', isAdmin, Delete);

module.exports = DashboardRoutes;