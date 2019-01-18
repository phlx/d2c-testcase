import {Provider} from '@loopback/core';

export class AnsibleWorkerService {
  dispatch(task: string, payload: object): Promise<object> {
    return new Promise((resolve, reject) =>
      resolve({
        AnsibleWorkerServiceOk: true,
        task,
        payload,
      }),
    );
  }
}

export class AnsibleWorkerServiceProvider
  implements Provider<AnsibleWorkerService> {
  constructor(
    protected ansibleWorkerServce: AnsibleWorkerService = new AnsibleWorkerService(),
  ) {}

  value(): Promise<AnsibleWorkerService> {
    return new Promise((resolve, reject) => resolve(this.ansibleWorkerServce));
  }
}
