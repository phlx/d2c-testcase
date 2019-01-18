import {D2cTestcaseApplication} from './application';
import {
  HostSpecificationRepository,
  ProviderTypeRepository,
} from './repositories';
import {ProviderType} from './models';

export async function seed(args: string[]) {
  console.log('Seeding database');

  const app = new D2cTestcaseApplication();
  await app.boot();

  const providerTypeRepository = await app.getRepository(
    ProviderTypeRepository,
  );
  const providerTypes: ProviderType[] = await providerTypeRepository.createAll([
    {
      name: 'DigitalOcean',
      alias: 'do',
      hostSpecifications: [
        {
          name: 'light',
          cpus: 1,
          memory: 512,
          disk: 50,
          os: 'ubuntu-16-x86',
        },
        {
          name: 'medium',
          cpus: 2,
          memory: 1024,
          disk: 100,
          os: 'ubuntu-16-x86',
        },
        {
          name: 'solid',
          cpus: 4,
          memory: 2048,
          disk: 200,
          os: 'ubuntu-16-x86',
        },
      ],
    },
  ]);

  console.log({providerTypes});

  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

seed(process.argv).catch(err => {
  console.error('Cannot seed database', err);
  process.exit(1);
});
