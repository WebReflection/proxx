/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { wrap } from "comlink";

import CanvasService from "./services/canvas";
import LitService from "./services/lit-element";

// @ts-ignore
import workerURL from "chunk-name:./worker.js";

async function bootstrap() {
  const worker = new Worker(workerURL);

  const { stateService } = wrap(worker);

  // tslint:disable-next-line:no-unused-expression
  new CanvasService(stateService);
}

bootstrap();
