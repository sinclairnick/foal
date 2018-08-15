import { AbstractUser } from '../../auth';

/**
 * Service interface. Create, read, update or delete resources and return representations of them.
 *
 * @export
 * @interface IResourceCollection
 */
export interface IResourceCollection {
  create(user: AbstractUser|undefined, record: object);

  findById(user: AbstractUser|undefined, id, query: object);
  find(user: AbstractUser|undefined, params: { query: object });

  updateById(user: AbstractUser|undefined, id, query: object, record: object);

  deleteById(user: AbstractUser|undefined, id, query: object);
}
