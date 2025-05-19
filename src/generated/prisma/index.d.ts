
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model link_assignments
 * 
 */
export type link_assignments = $Result.DefaultSelection<Prisma.$link_assignmentsPayload>
/**
 * Model links
 * 
 */
export type links = $Result.DefaultSelection<Prisma.$linksPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type users_role = (typeof users_role)[keyof typeof users_role]

}

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Link_assignments
 * const link_assignments = await prisma.link_assignments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Link_assignments
   * const link_assignments = await prisma.link_assignments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.link_assignments`: Exposes CRUD operations for the **link_assignments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Link_assignments
    * const link_assignments = await prisma.link_assignments.findMany()
    * ```
    */
  get link_assignments(): Prisma.link_assignmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.links`: Exposes CRUD operations for the **links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.links.findMany()
    * ```
    */
  get links(): Prisma.linksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    link_assignments: 'link_assignments',
    links: 'links',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "link_assignments" | "links" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      link_assignments: {
        payload: Prisma.$link_assignmentsPayload<ExtArgs>
        fields: Prisma.link_assignmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.link_assignmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.link_assignmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload>
          }
          findFirst: {
            args: Prisma.link_assignmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.link_assignmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload>
          }
          findMany: {
            args: Prisma.link_assignmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload>[]
          }
          create: {
            args: Prisma.link_assignmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload>
          }
          createMany: {
            args: Prisma.link_assignmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.link_assignmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload>
          }
          update: {
            args: Prisma.link_assignmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload>
          }
          deleteMany: {
            args: Prisma.link_assignmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.link_assignmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.link_assignmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$link_assignmentsPayload>
          }
          aggregate: {
            args: Prisma.Link_assignmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink_assignments>
          }
          groupBy: {
            args: Prisma.link_assignmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Link_assignmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.link_assignmentsCountArgs<ExtArgs>
            result: $Utils.Optional<Link_assignmentsCountAggregateOutputType> | number
          }
        }
      }
      links: {
        payload: Prisma.$linksPayload<ExtArgs>
        fields: Prisma.linksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.linksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.linksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          findFirst: {
            args: Prisma.linksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.linksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          findMany: {
            args: Prisma.linksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>[]
          }
          create: {
            args: Prisma.linksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          createMany: {
            args: Prisma.linksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.linksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          update: {
            args: Prisma.linksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          deleteMany: {
            args: Prisma.linksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.linksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.linksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linksPayload>
          }
          aggregate: {
            args: Prisma.LinksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinks>
          }
          groupBy: {
            args: Prisma.linksGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.linksCountArgs<ExtArgs>
            result: $Utils.Optional<LinksCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    link_assignments?: link_assignmentsOmit
    links?: linksOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LinksCountOutputType
   */

  export type LinksCountOutputType = {
    link_assignments: number
  }

  export type LinksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link_assignments?: boolean | LinksCountOutputTypeCountLink_assignmentsArgs
  }

  // Custom InputTypes
  /**
   * LinksCountOutputType without action
   */
  export type LinksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinksCountOutputType
     */
    select?: LinksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinksCountOutputType without action
   */
  export type LinksCountOutputTypeCountLink_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: link_assignmentsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    link_assignments: number
    links: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link_assignments?: boolean | UsersCountOutputTypeCountLink_assignmentsArgs
    links?: boolean | UsersCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLink_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: link_assignmentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model link_assignments
   */

  export type AggregateLink_assignments = {
    _count: Link_assignmentsCountAggregateOutputType | null
    _avg: Link_assignmentsAvgAggregateOutputType | null
    _sum: Link_assignmentsSumAggregateOutputType | null
    _min: Link_assignmentsMinAggregateOutputType | null
    _max: Link_assignmentsMaxAggregateOutputType | null
  }

  export type Link_assignmentsAvgAggregateOutputType = {
    userId: number | null
    linkId: number | null
  }

  export type Link_assignmentsSumAggregateOutputType = {
    userId: number | null
    linkId: number | null
  }

  export type Link_assignmentsMinAggregateOutputType = {
    userId: number | null
    linkId: number | null
    assignedAt: Date | null
    revokedAt: Date | null
  }

  export type Link_assignmentsMaxAggregateOutputType = {
    userId: number | null
    linkId: number | null
    assignedAt: Date | null
    revokedAt: Date | null
  }

  export type Link_assignmentsCountAggregateOutputType = {
    userId: number
    linkId: number
    assignedAt: number
    revokedAt: number
    _all: number
  }


  export type Link_assignmentsAvgAggregateInputType = {
    userId?: true
    linkId?: true
  }

  export type Link_assignmentsSumAggregateInputType = {
    userId?: true
    linkId?: true
  }

  export type Link_assignmentsMinAggregateInputType = {
    userId?: true
    linkId?: true
    assignedAt?: true
    revokedAt?: true
  }

  export type Link_assignmentsMaxAggregateInputType = {
    userId?: true
    linkId?: true
    assignedAt?: true
    revokedAt?: true
  }

  export type Link_assignmentsCountAggregateInputType = {
    userId?: true
    linkId?: true
    assignedAt?: true
    revokedAt?: true
    _all?: true
  }

  export type Link_assignmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which link_assignments to aggregate.
     */
    where?: link_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of link_assignments to fetch.
     */
    orderBy?: link_assignmentsOrderByWithRelationInput | link_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: link_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` link_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` link_assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned link_assignments
    **/
    _count?: true | Link_assignmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Link_assignmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Link_assignmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Link_assignmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Link_assignmentsMaxAggregateInputType
  }

  export type GetLink_assignmentsAggregateType<T extends Link_assignmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateLink_assignments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink_assignments[P]>
      : GetScalarType<T[P], AggregateLink_assignments[P]>
  }




  export type link_assignmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: link_assignmentsWhereInput
    orderBy?: link_assignmentsOrderByWithAggregationInput | link_assignmentsOrderByWithAggregationInput[]
    by: Link_assignmentsScalarFieldEnum[] | Link_assignmentsScalarFieldEnum
    having?: link_assignmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Link_assignmentsCountAggregateInputType | true
    _avg?: Link_assignmentsAvgAggregateInputType
    _sum?: Link_assignmentsSumAggregateInputType
    _min?: Link_assignmentsMinAggregateInputType
    _max?: Link_assignmentsMaxAggregateInputType
  }

  export type Link_assignmentsGroupByOutputType = {
    userId: number
    linkId: number
    assignedAt: Date | null
    revokedAt: Date | null
    _count: Link_assignmentsCountAggregateOutputType | null
    _avg: Link_assignmentsAvgAggregateOutputType | null
    _sum: Link_assignmentsSumAggregateOutputType | null
    _min: Link_assignmentsMinAggregateOutputType | null
    _max: Link_assignmentsMaxAggregateOutputType | null
  }

  type GetLink_assignmentsGroupByPayload<T extends link_assignmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Link_assignmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Link_assignmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Link_assignmentsGroupByOutputType[P]>
            : GetScalarType<T[P], Link_assignmentsGroupByOutputType[P]>
        }
      >
    >


  export type link_assignmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    linkId?: boolean
    assignedAt?: boolean
    revokedAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    links?: boolean | linksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link_assignments"]>



  export type link_assignmentsSelectScalar = {
    userId?: boolean
    linkId?: boolean
    assignedAt?: boolean
    revokedAt?: boolean
  }

  export type link_assignmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "linkId" | "assignedAt" | "revokedAt", ExtArgs["result"]["link_assignments"]>
  export type link_assignmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    links?: boolean | linksDefaultArgs<ExtArgs>
  }

  export type $link_assignmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "link_assignments"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      links: Prisma.$linksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      linkId: number
      assignedAt: Date | null
      revokedAt: Date | null
    }, ExtArgs["result"]["link_assignments"]>
    composites: {}
  }

  type link_assignmentsGetPayload<S extends boolean | null | undefined | link_assignmentsDefaultArgs> = $Result.GetResult<Prisma.$link_assignmentsPayload, S>

  type link_assignmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<link_assignmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Link_assignmentsCountAggregateInputType | true
    }

  export interface link_assignmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['link_assignments'], meta: { name: 'link_assignments' } }
    /**
     * Find zero or one Link_assignments that matches the filter.
     * @param {link_assignmentsFindUniqueArgs} args - Arguments to find a Link_assignments
     * @example
     * // Get one Link_assignments
     * const link_assignments = await prisma.link_assignments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends link_assignmentsFindUniqueArgs>(args: SelectSubset<T, link_assignmentsFindUniqueArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link_assignments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {link_assignmentsFindUniqueOrThrowArgs} args - Arguments to find a Link_assignments
     * @example
     * // Get one Link_assignments
     * const link_assignments = await prisma.link_assignments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends link_assignmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, link_assignmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link_assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {link_assignmentsFindFirstArgs} args - Arguments to find a Link_assignments
     * @example
     * // Get one Link_assignments
     * const link_assignments = await prisma.link_assignments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends link_assignmentsFindFirstArgs>(args?: SelectSubset<T, link_assignmentsFindFirstArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link_assignments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {link_assignmentsFindFirstOrThrowArgs} args - Arguments to find a Link_assignments
     * @example
     * // Get one Link_assignments
     * const link_assignments = await prisma.link_assignments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends link_assignmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, link_assignmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Link_assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {link_assignmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Link_assignments
     * const link_assignments = await prisma.link_assignments.findMany()
     * 
     * // Get first 10 Link_assignments
     * const link_assignments = await prisma.link_assignments.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const link_assignmentsWithUserIdOnly = await prisma.link_assignments.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends link_assignmentsFindManyArgs>(args?: SelectSubset<T, link_assignmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link_assignments.
     * @param {link_assignmentsCreateArgs} args - Arguments to create a Link_assignments.
     * @example
     * // Create one Link_assignments
     * const Link_assignments = await prisma.link_assignments.create({
     *   data: {
     *     // ... data to create a Link_assignments
     *   }
     * })
     * 
     */
    create<T extends link_assignmentsCreateArgs>(args: SelectSubset<T, link_assignmentsCreateArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Link_assignments.
     * @param {link_assignmentsCreateManyArgs} args - Arguments to create many Link_assignments.
     * @example
     * // Create many Link_assignments
     * const link_assignments = await prisma.link_assignments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends link_assignmentsCreateManyArgs>(args?: SelectSubset<T, link_assignmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Link_assignments.
     * @param {link_assignmentsDeleteArgs} args - Arguments to delete one Link_assignments.
     * @example
     * // Delete one Link_assignments
     * const Link_assignments = await prisma.link_assignments.delete({
     *   where: {
     *     // ... filter to delete one Link_assignments
     *   }
     * })
     * 
     */
    delete<T extends link_assignmentsDeleteArgs>(args: SelectSubset<T, link_assignmentsDeleteArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link_assignments.
     * @param {link_assignmentsUpdateArgs} args - Arguments to update one Link_assignments.
     * @example
     * // Update one Link_assignments
     * const link_assignments = await prisma.link_assignments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends link_assignmentsUpdateArgs>(args: SelectSubset<T, link_assignmentsUpdateArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Link_assignments.
     * @param {link_assignmentsDeleteManyArgs} args - Arguments to filter Link_assignments to delete.
     * @example
     * // Delete a few Link_assignments
     * const { count } = await prisma.link_assignments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends link_assignmentsDeleteManyArgs>(args?: SelectSubset<T, link_assignmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Link_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {link_assignmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Link_assignments
     * const link_assignments = await prisma.link_assignments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends link_assignmentsUpdateManyArgs>(args: SelectSubset<T, link_assignmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Link_assignments.
     * @param {link_assignmentsUpsertArgs} args - Arguments to update or create a Link_assignments.
     * @example
     * // Update or create a Link_assignments
     * const link_assignments = await prisma.link_assignments.upsert({
     *   create: {
     *     // ... data to create a Link_assignments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link_assignments we want to update
     *   }
     * })
     */
    upsert<T extends link_assignmentsUpsertArgs>(args: SelectSubset<T, link_assignmentsUpsertArgs<ExtArgs>>): Prisma__link_assignmentsClient<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Link_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {link_assignmentsCountArgs} args - Arguments to filter Link_assignments to count.
     * @example
     * // Count the number of Link_assignments
     * const count = await prisma.link_assignments.count({
     *   where: {
     *     // ... the filter for the Link_assignments we want to count
     *   }
     * })
    **/
    count<T extends link_assignmentsCountArgs>(
      args?: Subset<T, link_assignmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Link_assignmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Link_assignmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Link_assignmentsAggregateArgs>(args: Subset<T, Link_assignmentsAggregateArgs>): Prisma.PrismaPromise<GetLink_assignmentsAggregateType<T>>

    /**
     * Group by Link_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {link_assignmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends link_assignmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: link_assignmentsGroupByArgs['orderBy'] }
        : { orderBy?: link_assignmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, link_assignmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLink_assignmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the link_assignments model
   */
  readonly fields: link_assignmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for link_assignments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__link_assignmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    links<T extends linksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, linksDefaultArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the link_assignments model
   */
  interface link_assignmentsFieldRefs {
    readonly userId: FieldRef<"link_assignments", 'Int'>
    readonly linkId: FieldRef<"link_assignments", 'Int'>
    readonly assignedAt: FieldRef<"link_assignments", 'DateTime'>
    readonly revokedAt: FieldRef<"link_assignments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * link_assignments findUnique
   */
  export type link_assignmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which link_assignments to fetch.
     */
    where: link_assignmentsWhereUniqueInput
  }

  /**
   * link_assignments findUniqueOrThrow
   */
  export type link_assignmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which link_assignments to fetch.
     */
    where: link_assignmentsWhereUniqueInput
  }

  /**
   * link_assignments findFirst
   */
  export type link_assignmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which link_assignments to fetch.
     */
    where?: link_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of link_assignments to fetch.
     */
    orderBy?: link_assignmentsOrderByWithRelationInput | link_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for link_assignments.
     */
    cursor?: link_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` link_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` link_assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of link_assignments.
     */
    distinct?: Link_assignmentsScalarFieldEnum | Link_assignmentsScalarFieldEnum[]
  }

  /**
   * link_assignments findFirstOrThrow
   */
  export type link_assignmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which link_assignments to fetch.
     */
    where?: link_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of link_assignments to fetch.
     */
    orderBy?: link_assignmentsOrderByWithRelationInput | link_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for link_assignments.
     */
    cursor?: link_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` link_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` link_assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of link_assignments.
     */
    distinct?: Link_assignmentsScalarFieldEnum | Link_assignmentsScalarFieldEnum[]
  }

  /**
   * link_assignments findMany
   */
  export type link_assignmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which link_assignments to fetch.
     */
    where?: link_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of link_assignments to fetch.
     */
    orderBy?: link_assignmentsOrderByWithRelationInput | link_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing link_assignments.
     */
    cursor?: link_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` link_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` link_assignments.
     */
    skip?: number
    distinct?: Link_assignmentsScalarFieldEnum | Link_assignmentsScalarFieldEnum[]
  }

  /**
   * link_assignments create
   */
  export type link_assignmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a link_assignments.
     */
    data: XOR<link_assignmentsCreateInput, link_assignmentsUncheckedCreateInput>
  }

  /**
   * link_assignments createMany
   */
  export type link_assignmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many link_assignments.
     */
    data: link_assignmentsCreateManyInput | link_assignmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * link_assignments update
   */
  export type link_assignmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a link_assignments.
     */
    data: XOR<link_assignmentsUpdateInput, link_assignmentsUncheckedUpdateInput>
    /**
     * Choose, which link_assignments to update.
     */
    where: link_assignmentsWhereUniqueInput
  }

  /**
   * link_assignments updateMany
   */
  export type link_assignmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update link_assignments.
     */
    data: XOR<link_assignmentsUpdateManyMutationInput, link_assignmentsUncheckedUpdateManyInput>
    /**
     * Filter which link_assignments to update
     */
    where?: link_assignmentsWhereInput
    /**
     * Limit how many link_assignments to update.
     */
    limit?: number
  }

  /**
   * link_assignments upsert
   */
  export type link_assignmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the link_assignments to update in case it exists.
     */
    where: link_assignmentsWhereUniqueInput
    /**
     * In case the link_assignments found by the `where` argument doesn't exist, create a new link_assignments with this data.
     */
    create: XOR<link_assignmentsCreateInput, link_assignmentsUncheckedCreateInput>
    /**
     * In case the link_assignments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<link_assignmentsUpdateInput, link_assignmentsUncheckedUpdateInput>
  }

  /**
   * link_assignments delete
   */
  export type link_assignmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    /**
     * Filter which link_assignments to delete.
     */
    where: link_assignmentsWhereUniqueInput
  }

  /**
   * link_assignments deleteMany
   */
  export type link_assignmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which link_assignments to delete
     */
    where?: link_assignmentsWhereInput
    /**
     * Limit how many link_assignments to delete.
     */
    limit?: number
  }

  /**
   * link_assignments without action
   */
  export type link_assignmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
  }


  /**
   * Model links
   */

  export type AggregateLinks = {
    _count: LinksCountAggregateOutputType | null
    _avg: LinksAvgAggregateOutputType | null
    _sum: LinksSumAggregateOutputType | null
    _min: LinksMinAggregateOutputType | null
    _max: LinksMaxAggregateOutputType | null
  }

  export type LinksAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type LinksSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type LinksMinAggregateOutputType = {
    id: number | null
    creatorId: number | null
    name: string | null
    description: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinksMaxAggregateOutputType = {
    id: number | null
    creatorId: number | null
    name: string | null
    description: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinksCountAggregateOutputType = {
    id: number
    creatorId: number
    name: number
    description: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinksAvgAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type LinksSumAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type LinksMinAggregateInputType = {
    id?: true
    creatorId?: true
    name?: true
    description?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinksMaxAggregateInputType = {
    id?: true
    creatorId?: true
    name?: true
    description?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinksCountAggregateInputType = {
    id?: true
    creatorId?: true
    name?: true
    description?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which links to aggregate.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned links
    **/
    _count?: true | LinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinksMaxAggregateInputType
  }

  export type GetLinksAggregateType<T extends LinksAggregateArgs> = {
        [P in keyof T & keyof AggregateLinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinks[P]>
      : GetScalarType<T[P], AggregateLinks[P]>
  }




  export type linksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linksWhereInput
    orderBy?: linksOrderByWithAggregationInput | linksOrderByWithAggregationInput[]
    by: LinksScalarFieldEnum[] | LinksScalarFieldEnum
    having?: linksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinksCountAggregateInputType | true
    _avg?: LinksAvgAggregateInputType
    _sum?: LinksSumAggregateInputType
    _min?: LinksMinAggregateInputType
    _max?: LinksMaxAggregateInputType
  }

  export type LinksGroupByOutputType = {
    id: number
    creatorId: number
    name: string
    description: string | null
    url: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: LinksCountAggregateOutputType | null
    _avg: LinksAvgAggregateOutputType | null
    _sum: LinksSumAggregateOutputType | null
    _min: LinksMinAggregateOutputType | null
    _max: LinksMaxAggregateOutputType | null
  }

  type GetLinksGroupByPayload<T extends linksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinksGroupByOutputType[P]>
            : GetScalarType<T[P], LinksGroupByOutputType[P]>
        }
      >
    >


  export type linksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    link_assignments?: boolean | links$link_assignmentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | LinksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["links"]>



  export type linksSelectScalar = {
    id?: boolean
    creatorId?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type linksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "name" | "description" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["links"]>
  export type linksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link_assignments?: boolean | links$link_assignmentsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | LinksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $linksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "links"
    objects: {
      link_assignments: Prisma.$link_assignmentsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creatorId: number
      name: string
      description: string | null
      url: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["links"]>
    composites: {}
  }

  type linksGetPayload<S extends boolean | null | undefined | linksDefaultArgs> = $Result.GetResult<Prisma.$linksPayload, S>

  type linksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinksCountAggregateInputType | true
    }

  export interface linksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['links'], meta: { name: 'links' } }
    /**
     * Find zero or one Links that matches the filter.
     * @param {linksFindUniqueArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends linksFindUniqueArgs>(args: SelectSubset<T, linksFindUniqueArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {linksFindUniqueOrThrowArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends linksFindUniqueOrThrowArgs>(args: SelectSubset<T, linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksFindFirstArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends linksFindFirstArgs>(args?: SelectSubset<T, linksFindFirstArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksFindFirstOrThrowArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends linksFindFirstOrThrowArgs>(args?: SelectSubset<T, linksFindFirstOrThrowArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.links.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.links.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linksWithIdOnly = await prisma.links.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends linksFindManyArgs>(args?: SelectSubset<T, linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Links.
     * @param {linksCreateArgs} args - Arguments to create a Links.
     * @example
     * // Create one Links
     * const Links = await prisma.links.create({
     *   data: {
     *     // ... data to create a Links
     *   }
     * })
     * 
     */
    create<T extends linksCreateArgs>(args: SelectSubset<T, linksCreateArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {linksCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const links = await prisma.links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends linksCreateManyArgs>(args?: SelectSubset<T, linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Links.
     * @param {linksDeleteArgs} args - Arguments to delete one Links.
     * @example
     * // Delete one Links
     * const Links = await prisma.links.delete({
     *   where: {
     *     // ... filter to delete one Links
     *   }
     * })
     * 
     */
    delete<T extends linksDeleteArgs>(args: SelectSubset<T, linksDeleteArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Links.
     * @param {linksUpdateArgs} args - Arguments to update one Links.
     * @example
     * // Update one Links
     * const links = await prisma.links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends linksUpdateArgs>(args: SelectSubset<T, linksUpdateArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {linksDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends linksDeleteManyArgs>(args?: SelectSubset<T, linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const links = await prisma.links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends linksUpdateManyArgs>(args: SelectSubset<T, linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Links.
     * @param {linksUpsertArgs} args - Arguments to update or create a Links.
     * @example
     * // Update or create a Links
     * const links = await prisma.links.upsert({
     *   create: {
     *     // ... data to create a Links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Links we want to update
     *   }
     * })
     */
    upsert<T extends linksUpsertArgs>(args: SelectSubset<T, linksUpsertArgs<ExtArgs>>): Prisma__linksClient<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.links.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends linksCountArgs>(
      args?: Subset<T, linksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinksAggregateArgs>(args: Subset<T, LinksAggregateArgs>): Prisma.PrismaPromise<GetLinksAggregateType<T>>

    /**
     * Group by Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends linksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: linksGroupByArgs['orderBy'] }
        : { orderBy?: linksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the links model
   */
  readonly fields: linksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__linksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    link_assignments<T extends links$link_assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, links$link_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the links model
   */
  interface linksFieldRefs {
    readonly id: FieldRef<"links", 'Int'>
    readonly creatorId: FieldRef<"links", 'Int'>
    readonly name: FieldRef<"links", 'String'>
    readonly description: FieldRef<"links", 'String'>
    readonly url: FieldRef<"links", 'String'>
    readonly createdAt: FieldRef<"links", 'DateTime'>
    readonly updatedAt: FieldRef<"links", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * links findUnique
   */
  export type linksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links findUniqueOrThrow
   */
  export type linksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links findFirst
   */
  export type linksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for links.
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of links.
     */
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * links findFirstOrThrow
   */
  export type linksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for links.
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of links.
     */
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * links findMany
   */
  export type linksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter, which links to fetch.
     */
    where?: linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of links to fetch.
     */
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing links.
     */
    cursor?: linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` links.
     */
    skip?: number
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * links create
   */
  export type linksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * The data needed to create a links.
     */
    data: XOR<linksCreateInput, linksUncheckedCreateInput>
  }

  /**
   * links createMany
   */
  export type linksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many links.
     */
    data: linksCreateManyInput | linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * links update
   */
  export type linksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * The data needed to update a links.
     */
    data: XOR<linksUpdateInput, linksUncheckedUpdateInput>
    /**
     * Choose, which links to update.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links updateMany
   */
  export type linksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update links.
     */
    data: XOR<linksUpdateManyMutationInput, linksUncheckedUpdateManyInput>
    /**
     * Filter which links to update
     */
    where?: linksWhereInput
    /**
     * Limit how many links to update.
     */
    limit?: number
  }

  /**
   * links upsert
   */
  export type linksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * The filter to search for the links to update in case it exists.
     */
    where: linksWhereUniqueInput
    /**
     * In case the links found by the `where` argument doesn't exist, create a new links with this data.
     */
    create: XOR<linksCreateInput, linksUncheckedCreateInput>
    /**
     * In case the links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<linksUpdateInput, linksUncheckedUpdateInput>
  }

  /**
   * links delete
   */
  export type linksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    /**
     * Filter which links to delete.
     */
    where: linksWhereUniqueInput
  }

  /**
   * links deleteMany
   */
  export type linksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which links to delete
     */
    where?: linksWhereInput
    /**
     * Limit how many links to delete.
     */
    limit?: number
  }

  /**
   * links.link_assignments
   */
  export type links$link_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    where?: link_assignmentsWhereInput
    orderBy?: link_assignmentsOrderByWithRelationInput | link_assignmentsOrderByWithRelationInput[]
    cursor?: link_assignmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Link_assignmentsScalarFieldEnum | Link_assignmentsScalarFieldEnum[]
  }

  /**
   * links without action
   */
  export type linksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    role: $Enums.users_role | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    role: $Enums.users_role | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    role: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    role?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    role?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    role?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    role: $Enums.users_role | null
    username: string
    password: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    link_assignments?: boolean | users$link_assignmentsArgs<ExtArgs>
    links?: boolean | users$linksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    role?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link_assignments?: boolean | users$link_assignmentsArgs<ExtArgs>
    links?: boolean | users$linksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      link_assignments: Prisma.$link_assignmentsPayload<ExtArgs>[]
      links: Prisma.$linksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.users_role | null
      username: string
      password: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    link_assignments<T extends users$link_assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$link_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$link_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    links<T extends users$linksArgs<ExtArgs> = {}>(args?: Subset<T, users$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.link_assignments
   */
  export type users$link_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the link_assignments
     */
    select?: link_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the link_assignments
     */
    omit?: link_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: link_assignmentsInclude<ExtArgs> | null
    where?: link_assignmentsWhereInput
    orderBy?: link_assignmentsOrderByWithRelationInput | link_assignmentsOrderByWithRelationInput[]
    cursor?: link_assignmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Link_assignmentsScalarFieldEnum | Link_assignmentsScalarFieldEnum[]
  }

  /**
   * users.links
   */
  export type users$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the links
     */
    select?: linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the links
     */
    omit?: linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linksInclude<ExtArgs> | null
    where?: linksWhereInput
    orderBy?: linksOrderByWithRelationInput | linksOrderByWithRelationInput[]
    cursor?: linksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Link_assignmentsScalarFieldEnum: {
    userId: 'userId',
    linkId: 'linkId',
    assignedAt: 'assignedAt',
    revokedAt: 'revokedAt'
  };

  export type Link_assignmentsScalarFieldEnum = (typeof Link_assignmentsScalarFieldEnum)[keyof typeof Link_assignmentsScalarFieldEnum]


  export const LinksScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    name: 'name',
    description: 'description',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinksScalarFieldEnum = (typeof LinksScalarFieldEnum)[keyof typeof LinksScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const linksOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    url: 'url'
  };

  export type linksOrderByRelevanceFieldEnum = (typeof linksOrderByRelevanceFieldEnum)[keyof typeof linksOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type link_assignmentsWhereInput = {
    AND?: link_assignmentsWhereInput | link_assignmentsWhereInput[]
    OR?: link_assignmentsWhereInput[]
    NOT?: link_assignmentsWhereInput | link_assignmentsWhereInput[]
    userId?: IntFilter<"link_assignments"> | number
    linkId?: IntFilter<"link_assignments"> | number
    assignedAt?: DateTimeNullableFilter<"link_assignments"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"link_assignments"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    links?: XOR<LinksScalarRelationFilter, linksWhereInput>
  }

  export type link_assignmentsOrderByWithRelationInput = {
    userId?: SortOrder
    linkId?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    links?: linksOrderByWithRelationInput
  }

  export type link_assignmentsWhereUniqueInput = Prisma.AtLeast<{
    userId_linkId?: link_assignmentsUserIdLinkIdCompoundUniqueInput
    AND?: link_assignmentsWhereInput | link_assignmentsWhereInput[]
    OR?: link_assignmentsWhereInput[]
    NOT?: link_assignmentsWhereInput | link_assignmentsWhereInput[]
    userId?: IntFilter<"link_assignments"> | number
    linkId?: IntFilter<"link_assignments"> | number
    assignedAt?: DateTimeNullableFilter<"link_assignments"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"link_assignments"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    links?: XOR<LinksScalarRelationFilter, linksWhereInput>
  }, "userId_linkId">

  export type link_assignmentsOrderByWithAggregationInput = {
    userId?: SortOrder
    linkId?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    _count?: link_assignmentsCountOrderByAggregateInput
    _avg?: link_assignmentsAvgOrderByAggregateInput
    _max?: link_assignmentsMaxOrderByAggregateInput
    _min?: link_assignmentsMinOrderByAggregateInput
    _sum?: link_assignmentsSumOrderByAggregateInput
  }

  export type link_assignmentsScalarWhereWithAggregatesInput = {
    AND?: link_assignmentsScalarWhereWithAggregatesInput | link_assignmentsScalarWhereWithAggregatesInput[]
    OR?: link_assignmentsScalarWhereWithAggregatesInput[]
    NOT?: link_assignmentsScalarWhereWithAggregatesInput | link_assignmentsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"link_assignments"> | number
    linkId?: IntWithAggregatesFilter<"link_assignments"> | number
    assignedAt?: DateTimeNullableWithAggregatesFilter<"link_assignments"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"link_assignments"> | Date | string | null
  }

  export type linksWhereInput = {
    AND?: linksWhereInput | linksWhereInput[]
    OR?: linksWhereInput[]
    NOT?: linksWhereInput | linksWhereInput[]
    id?: IntFilter<"links"> | number
    creatorId?: IntFilter<"links"> | number
    name?: StringFilter<"links"> | string
    description?: StringNullableFilter<"links"> | string | null
    url?: StringFilter<"links"> | string
    createdAt?: DateTimeNullableFilter<"links"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"links"> | Date | string | null
    link_assignments?: Link_assignmentsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type linksOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    link_assignments?: link_assignmentsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: linksOrderByRelevanceInput
  }

  export type linksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: linksWhereInput | linksWhereInput[]
    OR?: linksWhereInput[]
    NOT?: linksWhereInput | linksWhereInput[]
    creatorId?: IntFilter<"links"> | number
    description?: StringNullableFilter<"links"> | string | null
    url?: StringFilter<"links"> | string
    createdAt?: DateTimeNullableFilter<"links"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"links"> | Date | string | null
    link_assignments?: Link_assignmentsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "name">

  export type linksOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: linksCountOrderByAggregateInput
    _avg?: linksAvgOrderByAggregateInput
    _max?: linksMaxOrderByAggregateInput
    _min?: linksMinOrderByAggregateInput
    _sum?: linksSumOrderByAggregateInput
  }

  export type linksScalarWhereWithAggregatesInput = {
    AND?: linksScalarWhereWithAggregatesInput | linksScalarWhereWithAggregatesInput[]
    OR?: linksScalarWhereWithAggregatesInput[]
    NOT?: linksScalarWhereWithAggregatesInput | linksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"links"> | number
    creatorId?: IntWithAggregatesFilter<"links"> | number
    name?: StringWithAggregatesFilter<"links"> | string
    description?: StringNullableWithAggregatesFilter<"links"> | string | null
    url?: StringWithAggregatesFilter<"links"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"links"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"links"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    link_assignments?: Link_assignmentsListRelationFilter
    links?: LinksListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    link_assignments?: link_assignmentsOrderByRelationAggregateInput
    links?: linksOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    link_assignments?: Link_assignmentsListRelationFilter
    links?: LinksListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    role?: Enumusers_roleNullableWithAggregatesFilter<"users"> | $Enums.users_role | null
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type link_assignmentsCreateInput = {
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
    users: usersCreateNestedOneWithoutLink_assignmentsInput
    links: linksCreateNestedOneWithoutLink_assignmentsInput
  }

  export type link_assignmentsUncheckedCreateInput = {
    userId: number
    linkId: number
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
  }

  export type link_assignmentsUpdateInput = {
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutLink_assignmentsNestedInput
    links?: linksUpdateOneRequiredWithoutLink_assignmentsNestedInput
  }

  export type link_assignmentsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type link_assignmentsCreateManyInput = {
    userId: number
    linkId: number
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
  }

  export type link_assignmentsUpdateManyMutationInput = {
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type link_assignmentsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type linksCreateInput = {
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsCreateNestedManyWithoutLinksInput
    users: usersCreateNestedOneWithoutLinksInput
  }

  export type linksUncheckedCreateInput = {
    id?: number
    creatorId: number
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsUncheckedCreateNestedManyWithoutLinksInput
  }

  export type linksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUpdateManyWithoutLinksNestedInput
    users?: usersUpdateOneRequiredWithoutLinksNestedInput
  }

  export type linksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUncheckedUpdateManyWithoutLinksNestedInput
  }

  export type linksCreateManyInput = {
    id?: number
    creatorId: number
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type linksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type linksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    role?: $Enums.users_role | null
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsCreateNestedManyWithoutUsersInput
    links?: linksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    role?: $Enums.users_role | null
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsUncheckedCreateNestedManyWithoutUsersInput
    links?: linksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUpdateManyWithoutUsersNestedInput
    links?: linksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUncheckedUpdateManyWithoutUsersNestedInput
    links?: linksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    role?: $Enums.users_role | null
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type LinksScalarRelationFilter = {
    is?: linksWhereInput
    isNot?: linksWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type link_assignmentsUserIdLinkIdCompoundUniqueInput = {
    userId: number
    linkId: number
  }

  export type link_assignmentsCountOrderByAggregateInput = {
    userId?: SortOrder
    linkId?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type link_assignmentsAvgOrderByAggregateInput = {
    userId?: SortOrder
    linkId?: SortOrder
  }

  export type link_assignmentsMaxOrderByAggregateInput = {
    userId?: SortOrder
    linkId?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type link_assignmentsMinOrderByAggregateInput = {
    userId?: SortOrder
    linkId?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type link_assignmentsSumOrderByAggregateInput = {
    userId?: SortOrder
    linkId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Link_assignmentsListRelationFilter = {
    every?: link_assignmentsWhereInput
    some?: link_assignmentsWhereInput
    none?: link_assignmentsWhereInput
  }

  export type link_assignmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type linksOrderByRelevanceInput = {
    fields: linksOrderByRelevanceFieldEnum | linksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type linksCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type linksAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type linksMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type linksMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type linksSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type LinksListRelationFilter = {
    every?: linksWhereInput
    some?: linksWhereInput
    none?: linksWhereInput
  }

  export type linksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutLink_assignmentsInput = {
    create?: XOR<usersCreateWithoutLink_assignmentsInput, usersUncheckedCreateWithoutLink_assignmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLink_assignmentsInput
    connect?: usersWhereUniqueInput
  }

  export type linksCreateNestedOneWithoutLink_assignmentsInput = {
    create?: XOR<linksCreateWithoutLink_assignmentsInput, linksUncheckedCreateWithoutLink_assignmentsInput>
    connectOrCreate?: linksCreateOrConnectWithoutLink_assignmentsInput
    connect?: linksWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutLink_assignmentsNestedInput = {
    create?: XOR<usersCreateWithoutLink_assignmentsInput, usersUncheckedCreateWithoutLink_assignmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLink_assignmentsInput
    upsert?: usersUpsertWithoutLink_assignmentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLink_assignmentsInput, usersUpdateWithoutLink_assignmentsInput>, usersUncheckedUpdateWithoutLink_assignmentsInput>
  }

  export type linksUpdateOneRequiredWithoutLink_assignmentsNestedInput = {
    create?: XOR<linksCreateWithoutLink_assignmentsInput, linksUncheckedCreateWithoutLink_assignmentsInput>
    connectOrCreate?: linksCreateOrConnectWithoutLink_assignmentsInput
    upsert?: linksUpsertWithoutLink_assignmentsInput
    connect?: linksWhereUniqueInput
    update?: XOR<XOR<linksUpdateToOneWithWhereWithoutLink_assignmentsInput, linksUpdateWithoutLink_assignmentsInput>, linksUncheckedUpdateWithoutLink_assignmentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type link_assignmentsCreateNestedManyWithoutLinksInput = {
    create?: XOR<link_assignmentsCreateWithoutLinksInput, link_assignmentsUncheckedCreateWithoutLinksInput> | link_assignmentsCreateWithoutLinksInput[] | link_assignmentsUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutLinksInput | link_assignmentsCreateOrConnectWithoutLinksInput[]
    createMany?: link_assignmentsCreateManyLinksInputEnvelope
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutLinksInput = {
    create?: XOR<usersCreateWithoutLinksInput, usersUncheckedCreateWithoutLinksInput>
    connectOrCreate?: usersCreateOrConnectWithoutLinksInput
    connect?: usersWhereUniqueInput
  }

  export type link_assignmentsUncheckedCreateNestedManyWithoutLinksInput = {
    create?: XOR<link_assignmentsCreateWithoutLinksInput, link_assignmentsUncheckedCreateWithoutLinksInput> | link_assignmentsCreateWithoutLinksInput[] | link_assignmentsUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutLinksInput | link_assignmentsCreateOrConnectWithoutLinksInput[]
    createMany?: link_assignmentsCreateManyLinksInputEnvelope
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type link_assignmentsUpdateManyWithoutLinksNestedInput = {
    create?: XOR<link_assignmentsCreateWithoutLinksInput, link_assignmentsUncheckedCreateWithoutLinksInput> | link_assignmentsCreateWithoutLinksInput[] | link_assignmentsUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutLinksInput | link_assignmentsCreateOrConnectWithoutLinksInput[]
    upsert?: link_assignmentsUpsertWithWhereUniqueWithoutLinksInput | link_assignmentsUpsertWithWhereUniqueWithoutLinksInput[]
    createMany?: link_assignmentsCreateManyLinksInputEnvelope
    set?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    disconnect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    delete?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    update?: link_assignmentsUpdateWithWhereUniqueWithoutLinksInput | link_assignmentsUpdateWithWhereUniqueWithoutLinksInput[]
    updateMany?: link_assignmentsUpdateManyWithWhereWithoutLinksInput | link_assignmentsUpdateManyWithWhereWithoutLinksInput[]
    deleteMany?: link_assignmentsScalarWhereInput | link_assignmentsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<usersCreateWithoutLinksInput, usersUncheckedCreateWithoutLinksInput>
    connectOrCreate?: usersCreateOrConnectWithoutLinksInput
    upsert?: usersUpsertWithoutLinksInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLinksInput, usersUpdateWithoutLinksInput>, usersUncheckedUpdateWithoutLinksInput>
  }

  export type link_assignmentsUncheckedUpdateManyWithoutLinksNestedInput = {
    create?: XOR<link_assignmentsCreateWithoutLinksInput, link_assignmentsUncheckedCreateWithoutLinksInput> | link_assignmentsCreateWithoutLinksInput[] | link_assignmentsUncheckedCreateWithoutLinksInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutLinksInput | link_assignmentsCreateOrConnectWithoutLinksInput[]
    upsert?: link_assignmentsUpsertWithWhereUniqueWithoutLinksInput | link_assignmentsUpsertWithWhereUniqueWithoutLinksInput[]
    createMany?: link_assignmentsCreateManyLinksInputEnvelope
    set?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    disconnect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    delete?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    update?: link_assignmentsUpdateWithWhereUniqueWithoutLinksInput | link_assignmentsUpdateWithWhereUniqueWithoutLinksInput[]
    updateMany?: link_assignmentsUpdateManyWithWhereWithoutLinksInput | link_assignmentsUpdateManyWithWhereWithoutLinksInput[]
    deleteMany?: link_assignmentsScalarWhereInput | link_assignmentsScalarWhereInput[]
  }

  export type link_assignmentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<link_assignmentsCreateWithoutUsersInput, link_assignmentsUncheckedCreateWithoutUsersInput> | link_assignmentsCreateWithoutUsersInput[] | link_assignmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutUsersInput | link_assignmentsCreateOrConnectWithoutUsersInput[]
    createMany?: link_assignmentsCreateManyUsersInputEnvelope
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
  }

  export type linksCreateNestedManyWithoutUsersInput = {
    create?: XOR<linksCreateWithoutUsersInput, linksUncheckedCreateWithoutUsersInput> | linksCreateWithoutUsersInput[] | linksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUsersInput | linksCreateOrConnectWithoutUsersInput[]
    createMany?: linksCreateManyUsersInputEnvelope
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
  }

  export type link_assignmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<link_assignmentsCreateWithoutUsersInput, link_assignmentsUncheckedCreateWithoutUsersInput> | link_assignmentsCreateWithoutUsersInput[] | link_assignmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutUsersInput | link_assignmentsCreateOrConnectWithoutUsersInput[]
    createMany?: link_assignmentsCreateManyUsersInputEnvelope
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
  }

  export type linksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<linksCreateWithoutUsersInput, linksUncheckedCreateWithoutUsersInput> | linksCreateWithoutUsersInput[] | linksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUsersInput | linksCreateOrConnectWithoutUsersInput[]
    createMany?: linksCreateManyUsersInputEnvelope
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
  }

  export type NullableEnumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role | null
  }

  export type link_assignmentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<link_assignmentsCreateWithoutUsersInput, link_assignmentsUncheckedCreateWithoutUsersInput> | link_assignmentsCreateWithoutUsersInput[] | link_assignmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutUsersInput | link_assignmentsCreateOrConnectWithoutUsersInput[]
    upsert?: link_assignmentsUpsertWithWhereUniqueWithoutUsersInput | link_assignmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: link_assignmentsCreateManyUsersInputEnvelope
    set?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    disconnect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    delete?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    update?: link_assignmentsUpdateWithWhereUniqueWithoutUsersInput | link_assignmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: link_assignmentsUpdateManyWithWhereWithoutUsersInput | link_assignmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: link_assignmentsScalarWhereInput | link_assignmentsScalarWhereInput[]
  }

  export type linksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<linksCreateWithoutUsersInput, linksUncheckedCreateWithoutUsersInput> | linksCreateWithoutUsersInput[] | linksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUsersInput | linksCreateOrConnectWithoutUsersInput[]
    upsert?: linksUpsertWithWhereUniqueWithoutUsersInput | linksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: linksCreateManyUsersInputEnvelope
    set?: linksWhereUniqueInput | linksWhereUniqueInput[]
    disconnect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    delete?: linksWhereUniqueInput | linksWhereUniqueInput[]
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    update?: linksUpdateWithWhereUniqueWithoutUsersInput | linksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: linksUpdateManyWithWhereWithoutUsersInput | linksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: linksScalarWhereInput | linksScalarWhereInput[]
  }

  export type link_assignmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<link_assignmentsCreateWithoutUsersInput, link_assignmentsUncheckedCreateWithoutUsersInput> | link_assignmentsCreateWithoutUsersInput[] | link_assignmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: link_assignmentsCreateOrConnectWithoutUsersInput | link_assignmentsCreateOrConnectWithoutUsersInput[]
    upsert?: link_assignmentsUpsertWithWhereUniqueWithoutUsersInput | link_assignmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: link_assignmentsCreateManyUsersInputEnvelope
    set?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    disconnect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    delete?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    connect?: link_assignmentsWhereUniqueInput | link_assignmentsWhereUniqueInput[]
    update?: link_assignmentsUpdateWithWhereUniqueWithoutUsersInput | link_assignmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: link_assignmentsUpdateManyWithWhereWithoutUsersInput | link_assignmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: link_assignmentsScalarWhereInput | link_assignmentsScalarWhereInput[]
  }

  export type linksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<linksCreateWithoutUsersInput, linksUncheckedCreateWithoutUsersInput> | linksCreateWithoutUsersInput[] | linksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: linksCreateOrConnectWithoutUsersInput | linksCreateOrConnectWithoutUsersInput[]
    upsert?: linksUpsertWithWhereUniqueWithoutUsersInput | linksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: linksCreateManyUsersInputEnvelope
    set?: linksWhereUniqueInput | linksWhereUniqueInput[]
    disconnect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    delete?: linksWhereUniqueInput | linksWhereUniqueInput[]
    connect?: linksWhereUniqueInput | linksWhereUniqueInput[]
    update?: linksUpdateWithWhereUniqueWithoutUsersInput | linksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: linksUpdateManyWithWhereWithoutUsersInput | linksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: linksScalarWhereInput | linksScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutLink_assignmentsInput = {
    role?: $Enums.users_role | null
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    links?: linksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLink_assignmentsInput = {
    id?: number
    role?: $Enums.users_role | null
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    links?: linksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLink_assignmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLink_assignmentsInput, usersUncheckedCreateWithoutLink_assignmentsInput>
  }

  export type linksCreateWithoutLink_assignmentsInput = {
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    users: usersCreateNestedOneWithoutLinksInput
  }

  export type linksUncheckedCreateWithoutLink_assignmentsInput = {
    id?: number
    creatorId: number
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type linksCreateOrConnectWithoutLink_assignmentsInput = {
    where: linksWhereUniqueInput
    create: XOR<linksCreateWithoutLink_assignmentsInput, linksUncheckedCreateWithoutLink_assignmentsInput>
  }

  export type usersUpsertWithoutLink_assignmentsInput = {
    update: XOR<usersUpdateWithoutLink_assignmentsInput, usersUncheckedUpdateWithoutLink_assignmentsInput>
    create: XOR<usersCreateWithoutLink_assignmentsInput, usersUncheckedCreateWithoutLink_assignmentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLink_assignmentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLink_assignmentsInput, usersUncheckedUpdateWithoutLink_assignmentsInput>
  }

  export type usersUpdateWithoutLink_assignmentsInput = {
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    links?: linksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLink_assignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    links?: linksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type linksUpsertWithoutLink_assignmentsInput = {
    update: XOR<linksUpdateWithoutLink_assignmentsInput, linksUncheckedUpdateWithoutLink_assignmentsInput>
    create: XOR<linksCreateWithoutLink_assignmentsInput, linksUncheckedCreateWithoutLink_assignmentsInput>
    where?: linksWhereInput
  }

  export type linksUpdateToOneWithWhereWithoutLink_assignmentsInput = {
    where?: linksWhereInput
    data: XOR<linksUpdateWithoutLink_assignmentsInput, linksUncheckedUpdateWithoutLink_assignmentsInput>
  }

  export type linksUpdateWithoutLink_assignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutLinksNestedInput
  }

  export type linksUncheckedUpdateWithoutLink_assignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type link_assignmentsCreateWithoutLinksInput = {
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
    users: usersCreateNestedOneWithoutLink_assignmentsInput
  }

  export type link_assignmentsUncheckedCreateWithoutLinksInput = {
    userId: number
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
  }

  export type link_assignmentsCreateOrConnectWithoutLinksInput = {
    where: link_assignmentsWhereUniqueInput
    create: XOR<link_assignmentsCreateWithoutLinksInput, link_assignmentsUncheckedCreateWithoutLinksInput>
  }

  export type link_assignmentsCreateManyLinksInputEnvelope = {
    data: link_assignmentsCreateManyLinksInput | link_assignmentsCreateManyLinksInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutLinksInput = {
    role?: $Enums.users_role | null
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLinksInput = {
    id?: number
    role?: $Enums.users_role | null
    username: string
    password: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLinksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLinksInput, usersUncheckedCreateWithoutLinksInput>
  }

  export type link_assignmentsUpsertWithWhereUniqueWithoutLinksInput = {
    where: link_assignmentsWhereUniqueInput
    update: XOR<link_assignmentsUpdateWithoutLinksInput, link_assignmentsUncheckedUpdateWithoutLinksInput>
    create: XOR<link_assignmentsCreateWithoutLinksInput, link_assignmentsUncheckedCreateWithoutLinksInput>
  }

  export type link_assignmentsUpdateWithWhereUniqueWithoutLinksInput = {
    where: link_assignmentsWhereUniqueInput
    data: XOR<link_assignmentsUpdateWithoutLinksInput, link_assignmentsUncheckedUpdateWithoutLinksInput>
  }

  export type link_assignmentsUpdateManyWithWhereWithoutLinksInput = {
    where: link_assignmentsScalarWhereInput
    data: XOR<link_assignmentsUpdateManyMutationInput, link_assignmentsUncheckedUpdateManyWithoutLinksInput>
  }

  export type link_assignmentsScalarWhereInput = {
    AND?: link_assignmentsScalarWhereInput | link_assignmentsScalarWhereInput[]
    OR?: link_assignmentsScalarWhereInput[]
    NOT?: link_assignmentsScalarWhereInput | link_assignmentsScalarWhereInput[]
    userId?: IntFilter<"link_assignments"> | number
    linkId?: IntFilter<"link_assignments"> | number
    assignedAt?: DateTimeNullableFilter<"link_assignments"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"link_assignments"> | Date | string | null
  }

  export type usersUpsertWithoutLinksInput = {
    update: XOR<usersUpdateWithoutLinksInput, usersUncheckedUpdateWithoutLinksInput>
    create: XOR<usersCreateWithoutLinksInput, usersUncheckedCreateWithoutLinksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLinksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLinksInput, usersUncheckedUpdateWithoutLinksInput>
  }

  export type usersUpdateWithoutLinksInput = {
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type link_assignmentsCreateWithoutUsersInput = {
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
    links: linksCreateNestedOneWithoutLink_assignmentsInput
  }

  export type link_assignmentsUncheckedCreateWithoutUsersInput = {
    linkId: number
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
  }

  export type link_assignmentsCreateOrConnectWithoutUsersInput = {
    where: link_assignmentsWhereUniqueInput
    create: XOR<link_assignmentsCreateWithoutUsersInput, link_assignmentsUncheckedCreateWithoutUsersInput>
  }

  export type link_assignmentsCreateManyUsersInputEnvelope = {
    data: link_assignmentsCreateManyUsersInput | link_assignmentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type linksCreateWithoutUsersInput = {
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsCreateNestedManyWithoutLinksInput
  }

  export type linksUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    link_assignments?: link_assignmentsUncheckedCreateNestedManyWithoutLinksInput
  }

  export type linksCreateOrConnectWithoutUsersInput = {
    where: linksWhereUniqueInput
    create: XOR<linksCreateWithoutUsersInput, linksUncheckedCreateWithoutUsersInput>
  }

  export type linksCreateManyUsersInputEnvelope = {
    data: linksCreateManyUsersInput | linksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type link_assignmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: link_assignmentsWhereUniqueInput
    update: XOR<link_assignmentsUpdateWithoutUsersInput, link_assignmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<link_assignmentsCreateWithoutUsersInput, link_assignmentsUncheckedCreateWithoutUsersInput>
  }

  export type link_assignmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: link_assignmentsWhereUniqueInput
    data: XOR<link_assignmentsUpdateWithoutUsersInput, link_assignmentsUncheckedUpdateWithoutUsersInput>
  }

  export type link_assignmentsUpdateManyWithWhereWithoutUsersInput = {
    where: link_assignmentsScalarWhereInput
    data: XOR<link_assignmentsUpdateManyMutationInput, link_assignmentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type linksUpsertWithWhereUniqueWithoutUsersInput = {
    where: linksWhereUniqueInput
    update: XOR<linksUpdateWithoutUsersInput, linksUncheckedUpdateWithoutUsersInput>
    create: XOR<linksCreateWithoutUsersInput, linksUncheckedCreateWithoutUsersInput>
  }

  export type linksUpdateWithWhereUniqueWithoutUsersInput = {
    where: linksWhereUniqueInput
    data: XOR<linksUpdateWithoutUsersInput, linksUncheckedUpdateWithoutUsersInput>
  }

  export type linksUpdateManyWithWhereWithoutUsersInput = {
    where: linksScalarWhereInput
    data: XOR<linksUpdateManyMutationInput, linksUncheckedUpdateManyWithoutUsersInput>
  }

  export type linksScalarWhereInput = {
    AND?: linksScalarWhereInput | linksScalarWhereInput[]
    OR?: linksScalarWhereInput[]
    NOT?: linksScalarWhereInput | linksScalarWhereInput[]
    id?: IntFilter<"links"> | number
    creatorId?: IntFilter<"links"> | number
    name?: StringFilter<"links"> | string
    description?: StringNullableFilter<"links"> | string | null
    url?: StringFilter<"links"> | string
    createdAt?: DateTimeNullableFilter<"links"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"links"> | Date | string | null
  }

  export type link_assignmentsCreateManyLinksInput = {
    userId: number
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
  }

  export type link_assignmentsUpdateWithoutLinksInput = {
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutLink_assignmentsNestedInput
  }

  export type link_assignmentsUncheckedUpdateWithoutLinksInput = {
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type link_assignmentsUncheckedUpdateManyWithoutLinksInput = {
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type link_assignmentsCreateManyUsersInput = {
    linkId: number
    assignedAt?: Date | string | null
    revokedAt?: Date | string | null
  }

  export type linksCreateManyUsersInput = {
    id?: number
    name: string
    description?: string | null
    url: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type link_assignmentsUpdateWithoutUsersInput = {
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    links?: linksUpdateOneRequiredWithoutLink_assignmentsNestedInput
  }

  export type link_assignmentsUncheckedUpdateWithoutUsersInput = {
    linkId?: IntFieldUpdateOperationsInput | number
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type link_assignmentsUncheckedUpdateManyWithoutUsersInput = {
    linkId?: IntFieldUpdateOperationsInput | number
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type linksUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUpdateManyWithoutLinksNestedInput
  }

  export type linksUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_assignments?: link_assignmentsUncheckedUpdateManyWithoutLinksNestedInput
  }

  export type linksUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}