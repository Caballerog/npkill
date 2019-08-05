#!/usr/bin/env node

import { ConsoleService, FileService, SpinnerService } from '@services/index';

import { Controller } from './controller';

const controller = new Controller(
  new ConsoleService(),
  new FileService(),
  new SpinnerService(),
);
