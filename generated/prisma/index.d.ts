
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
 * Model directors
 * 
 */
export type directors = $Result.DefaultSelection<Prisma.$directorsPayload>
/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>
/**
 * Model movies
 * 
 */
export type movies = $Result.DefaultSelection<Prisma.$moviesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Directors
 * const directors = await prisma.directors.findMany()
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
   * // Fetch zero or more Directors
   * const directors = await prisma.directors.findMany()
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
   * `prisma.directors`: Exposes CRUD operations for the **directors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.directors.findMany()
    * ```
    */
  get directors(): Prisma.directorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.moviesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    directors: 'directors',
    genres: 'genres',
    movies: 'movies'
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
      modelProps: "directors" | "genres" | "movies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      directors: {
        payload: Prisma.$directorsPayload<ExtArgs>
        fields: Prisma.directorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.directorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.directorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>
          }
          findFirst: {
            args: Prisma.directorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.directorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>
          }
          findMany: {
            args: Prisma.directorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>[]
          }
          create: {
            args: Prisma.directorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>
          }
          createMany: {
            args: Prisma.directorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.directorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>[]
          }
          delete: {
            args: Prisma.directorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>
          }
          update: {
            args: Prisma.directorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>
          }
          deleteMany: {
            args: Prisma.directorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.directorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.directorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>[]
          }
          upsert: {
            args: Prisma.directorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directorsPayload>
          }
          aggregate: {
            args: Prisma.DirectorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectors>
          }
          groupBy: {
            args: Prisma.directorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.directorsCountArgs<ExtArgs>
            result: $Utils.Optional<DirectorsCountAggregateOutputType> | number
          }
        }
      }
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.genresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      movies: {
        payload: Prisma.$moviesPayload<ExtArgs>
        fields: Prisma.moviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findFirst: {
            args: Prisma.moviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findMany: {
            args: Prisma.moviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          create: {
            args: Prisma.moviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          createMany: {
            args: Prisma.moviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.moviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          delete: {
            args: Prisma.moviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          update: {
            args: Prisma.moviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          deleteMany: {
            args: Prisma.moviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.moviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          upsert: {
            args: Prisma.moviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.moviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.moviesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
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
    directors?: directorsOmit
    genres?: genresOmit
    movies?: moviesOmit
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
   * Count Type DirectorsCountOutputType
   */

  export type DirectorsCountOutputType = {
    movies: number
  }

  export type DirectorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | DirectorsCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * DirectorsCountOutputType without action
   */
  export type DirectorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectorsCountOutputType
     */
    select?: DirectorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectorsCountOutputType without action
   */
  export type DirectorsCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    movies: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | GenresCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model directors
   */

  export type AggregateDirectors = {
    _count: DirectorsCountAggregateOutputType | null
    _min: DirectorsMinAggregateOutputType | null
    _max: DirectorsMaxAggregateOutputType | null
  }

  export type DirectorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    biography: string | null
  }

  export type DirectorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    biography: string | null
  }

  export type DirectorsCountAggregateOutputType = {
    id: number
    name: number
    biography: number
    _all: number
  }


  export type DirectorsMinAggregateInputType = {
    id?: true
    name?: true
    biography?: true
  }

  export type DirectorsMaxAggregateInputType = {
    id?: true
    name?: true
    biography?: true
  }

  export type DirectorsCountAggregateInputType = {
    id?: true
    name?: true
    biography?: true
    _all?: true
  }

  export type DirectorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which directors to aggregate.
     */
    where?: directorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorsOrderByWithRelationInput | directorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: directorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned directors
    **/
    _count?: true | DirectorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectorsMaxAggregateInputType
  }

  export type GetDirectorsAggregateType<T extends DirectorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectors[P]>
      : GetScalarType<T[P], AggregateDirectors[P]>
  }




  export type directorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: directorsWhereInput
    orderBy?: directorsOrderByWithAggregationInput | directorsOrderByWithAggregationInput[]
    by: DirectorsScalarFieldEnum[] | DirectorsScalarFieldEnum
    having?: directorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectorsCountAggregateInputType | true
    _min?: DirectorsMinAggregateInputType
    _max?: DirectorsMaxAggregateInputType
  }

  export type DirectorsGroupByOutputType = {
    id: string
    name: string
    biography: string | null
    _count: DirectorsCountAggregateOutputType | null
    _min: DirectorsMinAggregateOutputType | null
    _max: DirectorsMaxAggregateOutputType | null
  }

  type GetDirectorsGroupByPayload<T extends directorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectorsGroupByOutputType[P]>
            : GetScalarType<T[P], DirectorsGroupByOutputType[P]>
        }
      >
    >


  export type directorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    biography?: boolean
    movies?: boolean | directors$moviesArgs<ExtArgs>
    _count?: boolean | DirectorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directors"]>

  export type directorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    biography?: boolean
  }, ExtArgs["result"]["directors"]>

  export type directorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    biography?: boolean
  }, ExtArgs["result"]["directors"]>

  export type directorsSelectScalar = {
    id?: boolean
    name?: boolean
    biography?: boolean
  }

  export type directorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "biography", ExtArgs["result"]["directors"]>
  export type directorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | directors$moviesArgs<ExtArgs>
    _count?: boolean | DirectorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type directorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type directorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $directorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "directors"
    objects: {
      movies: Prisma.$moviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      biography: string | null
    }, ExtArgs["result"]["directors"]>
    composites: {}
  }

  type directorsGetPayload<S extends boolean | null | undefined | directorsDefaultArgs> = $Result.GetResult<Prisma.$directorsPayload, S>

  type directorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<directorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectorsCountAggregateInputType | true
    }

  export interface directorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['directors'], meta: { name: 'directors' } }
    /**
     * Find zero or one Directors that matches the filter.
     * @param {directorsFindUniqueArgs} args - Arguments to find a Directors
     * @example
     * // Get one Directors
     * const directors = await prisma.directors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends directorsFindUniqueArgs>(args: SelectSubset<T, directorsFindUniqueArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Directors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {directorsFindUniqueOrThrowArgs} args - Arguments to find a Directors
     * @example
     * // Get one Directors
     * const directors = await prisma.directors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends directorsFindUniqueOrThrowArgs>(args: SelectSubset<T, directorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorsFindFirstArgs} args - Arguments to find a Directors
     * @example
     * // Get one Directors
     * const directors = await prisma.directors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends directorsFindFirstArgs>(args?: SelectSubset<T, directorsFindFirstArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorsFindFirstOrThrowArgs} args - Arguments to find a Directors
     * @example
     * // Get one Directors
     * const directors = await prisma.directors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends directorsFindFirstOrThrowArgs>(args?: SelectSubset<T, directorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directors
     * const directors = await prisma.directors.findMany()
     * 
     * // Get first 10 Directors
     * const directors = await prisma.directors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directorsWithIdOnly = await prisma.directors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends directorsFindManyArgs>(args?: SelectSubset<T, directorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Directors.
     * @param {directorsCreateArgs} args - Arguments to create a Directors.
     * @example
     * // Create one Directors
     * const Directors = await prisma.directors.create({
     *   data: {
     *     // ... data to create a Directors
     *   }
     * })
     * 
     */
    create<T extends directorsCreateArgs>(args: SelectSubset<T, directorsCreateArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directors.
     * @param {directorsCreateManyArgs} args - Arguments to create many Directors.
     * @example
     * // Create many Directors
     * const directors = await prisma.directors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends directorsCreateManyArgs>(args?: SelectSubset<T, directorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Directors and returns the data saved in the database.
     * @param {directorsCreateManyAndReturnArgs} args - Arguments to create many Directors.
     * @example
     * // Create many Directors
     * const directors = await prisma.directors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Directors and only return the `id`
     * const directorsWithIdOnly = await prisma.directors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends directorsCreateManyAndReturnArgs>(args?: SelectSubset<T, directorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Directors.
     * @param {directorsDeleteArgs} args - Arguments to delete one Directors.
     * @example
     * // Delete one Directors
     * const Directors = await prisma.directors.delete({
     *   where: {
     *     // ... filter to delete one Directors
     *   }
     * })
     * 
     */
    delete<T extends directorsDeleteArgs>(args: SelectSubset<T, directorsDeleteArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Directors.
     * @param {directorsUpdateArgs} args - Arguments to update one Directors.
     * @example
     * // Update one Directors
     * const directors = await prisma.directors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends directorsUpdateArgs>(args: SelectSubset<T, directorsUpdateArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directors.
     * @param {directorsDeleteManyArgs} args - Arguments to filter Directors to delete.
     * @example
     * // Delete a few Directors
     * const { count } = await prisma.directors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends directorsDeleteManyArgs>(args?: SelectSubset<T, directorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directors
     * const directors = await prisma.directors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends directorsUpdateManyArgs>(args: SelectSubset<T, directorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors and returns the data updated in the database.
     * @param {directorsUpdateManyAndReturnArgs} args - Arguments to update many Directors.
     * @example
     * // Update many Directors
     * const directors = await prisma.directors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Directors and only return the `id`
     * const directorsWithIdOnly = await prisma.directors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends directorsUpdateManyAndReturnArgs>(args: SelectSubset<T, directorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Directors.
     * @param {directorsUpsertArgs} args - Arguments to update or create a Directors.
     * @example
     * // Update or create a Directors
     * const directors = await prisma.directors.upsert({
     *   create: {
     *     // ... data to create a Directors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Directors we want to update
     *   }
     * })
     */
    upsert<T extends directorsUpsertArgs>(args: SelectSubset<T, directorsUpsertArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorsCountArgs} args - Arguments to filter Directors to count.
     * @example
     * // Count the number of Directors
     * const count = await prisma.directors.count({
     *   where: {
     *     // ... the filter for the Directors we want to count
     *   }
     * })
    **/
    count<T extends directorsCountArgs>(
      args?: Subset<T, directorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectorsAggregateArgs>(args: Subset<T, DirectorsAggregateArgs>): Prisma.PrismaPromise<GetDirectorsAggregateType<T>>

    /**
     * Group by Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorsGroupByArgs} args - Group by arguments.
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
      T extends directorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: directorsGroupByArgs['orderBy'] }
        : { orderBy?: directorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, directorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the directors model
   */
  readonly fields: directorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for directors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__directorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends directors$moviesArgs<ExtArgs> = {}>(args?: Subset<T, directors$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the directors model
   */
  interface directorsFieldRefs {
    readonly id: FieldRef<"directors", 'String'>
    readonly name: FieldRef<"directors", 'String'>
    readonly biography: FieldRef<"directors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * directors findUnique
   */
  export type directorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * Filter, which directors to fetch.
     */
    where: directorsWhereUniqueInput
  }

  /**
   * directors findUniqueOrThrow
   */
  export type directorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * Filter, which directors to fetch.
     */
    where: directorsWhereUniqueInput
  }

  /**
   * directors findFirst
   */
  export type directorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * Filter, which directors to fetch.
     */
    where?: directorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorsOrderByWithRelationInput | directorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for directors.
     */
    cursor?: directorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of directors.
     */
    distinct?: DirectorsScalarFieldEnum | DirectorsScalarFieldEnum[]
  }

  /**
   * directors findFirstOrThrow
   */
  export type directorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * Filter, which directors to fetch.
     */
    where?: directorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorsOrderByWithRelationInput | directorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for directors.
     */
    cursor?: directorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of directors.
     */
    distinct?: DirectorsScalarFieldEnum | DirectorsScalarFieldEnum[]
  }

  /**
   * directors findMany
   */
  export type directorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * Filter, which directors to fetch.
     */
    where?: directorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directors to fetch.
     */
    orderBy?: directorsOrderByWithRelationInput | directorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing directors.
     */
    cursor?: directorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directors.
     */
    skip?: number
    distinct?: DirectorsScalarFieldEnum | DirectorsScalarFieldEnum[]
  }

  /**
   * directors create
   */
  export type directorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * The data needed to create a directors.
     */
    data: XOR<directorsCreateInput, directorsUncheckedCreateInput>
  }

  /**
   * directors createMany
   */
  export type directorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many directors.
     */
    data: directorsCreateManyInput | directorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * directors createManyAndReturn
   */
  export type directorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * The data used to create many directors.
     */
    data: directorsCreateManyInput | directorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * directors update
   */
  export type directorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * The data needed to update a directors.
     */
    data: XOR<directorsUpdateInput, directorsUncheckedUpdateInput>
    /**
     * Choose, which directors to update.
     */
    where: directorsWhereUniqueInput
  }

  /**
   * directors updateMany
   */
  export type directorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update directors.
     */
    data: XOR<directorsUpdateManyMutationInput, directorsUncheckedUpdateManyInput>
    /**
     * Filter which directors to update
     */
    where?: directorsWhereInput
    /**
     * Limit how many directors to update.
     */
    limit?: number
  }

  /**
   * directors updateManyAndReturn
   */
  export type directorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * The data used to update directors.
     */
    data: XOR<directorsUpdateManyMutationInput, directorsUncheckedUpdateManyInput>
    /**
     * Filter which directors to update
     */
    where?: directorsWhereInput
    /**
     * Limit how many directors to update.
     */
    limit?: number
  }

  /**
   * directors upsert
   */
  export type directorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * The filter to search for the directors to update in case it exists.
     */
    where: directorsWhereUniqueInput
    /**
     * In case the directors found by the `where` argument doesn't exist, create a new directors with this data.
     */
    create: XOR<directorsCreateInput, directorsUncheckedCreateInput>
    /**
     * In case the directors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<directorsUpdateInput, directorsUncheckedUpdateInput>
  }

  /**
   * directors delete
   */
  export type directorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    /**
     * Filter which directors to delete.
     */
    where: directorsWhereUniqueInput
  }

  /**
   * directors deleteMany
   */
  export type directorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which directors to delete
     */
    where?: directorsWhereInput
    /**
     * Limit how many directors to delete.
     */
    limit?: number
  }

  /**
   * directors.movies
   */
  export type directors$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    cursor?: moviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * directors without action
   */
  export type directorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
  }


  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: string
    name: string
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | genres$moviesArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genres"]>
  export type genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | genres$moviesArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type genresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {
      movies: Prisma.$moviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genresCreateManyAndReturnArgs>(args?: SelectSubset<T, genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {genresUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends genresUpdateManyAndReturnArgs>(args: SelectSubset<T, genresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
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
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends genres$moviesArgs<ExtArgs> = {}>(args?: Subset<T, genres$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the genres model
   */
  interface genresFieldRefs {
    readonly id: FieldRef<"genres", 'String'>
    readonly name: FieldRef<"genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres createManyAndReturn
   */
  export type genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres updateManyAndReturn
   */
  export type genresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genres.movies
   */
  export type genres$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    cursor?: moviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
  }


  /**
   * Model movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    release_year: number | null
    rating: Decimal | null
  }

  export type MoviesSumAggregateOutputType = {
    release_year: number | null
    rating: Decimal | null
  }

  export type MoviesMinAggregateOutputType = {
    id: string | null
    title: string | null
    director_id: string | null
    description: string | null
    release_year: number | null
    genre_id: string | null
    rating: Decimal | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    director_id: string | null
    description: string | null
    release_year: number | null
    genre_id: string | null
    rating: Decimal | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    director_id: number
    description: number
    release_year: number
    genre_id: number
    rating: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    release_year?: true
    rating?: true
  }

  export type MoviesSumAggregateInputType = {
    release_year?: true
    rating?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    director_id?: true
    description?: true
    release_year?: true
    genre_id?: true
    rating?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    director_id?: true
    description?: true
    release_year?: true
    genre_id?: true
    rating?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    director_id?: true
    description?: true
    release_year?: true
    genre_id?: true
    rating?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to aggregate.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type moviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithAggregationInput | moviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: moviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: string
    title: string
    director_id: string | null
    description: string | null
    release_year: number | null
    genre_id: string | null
    rating: Decimal | null
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends moviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type moviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    director_id?: boolean
    description?: boolean
    release_year?: boolean
    genre_id?: boolean
    rating?: boolean
    directors?: boolean | movies$directorsArgs<ExtArgs>
    genres?: boolean | movies$genresArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    director_id?: boolean
    description?: boolean
    release_year?: boolean
    genre_id?: boolean
    rating?: boolean
    directors?: boolean | movies$directorsArgs<ExtArgs>
    genres?: boolean | movies$genresArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    director_id?: boolean
    description?: boolean
    release_year?: boolean
    genre_id?: boolean
    rating?: boolean
    directors?: boolean | movies$directorsArgs<ExtArgs>
    genres?: boolean | movies$genresArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectScalar = {
    id?: boolean
    title?: boolean
    director_id?: boolean
    description?: boolean
    release_year?: boolean
    genre_id?: boolean
    rating?: boolean
  }

  export type moviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "director_id" | "description" | "release_year" | "genre_id" | "rating", ExtArgs["result"]["movies"]>
  export type moviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directors?: boolean | movies$directorsArgs<ExtArgs>
    genres?: boolean | movies$genresArgs<ExtArgs>
  }
  export type moviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directors?: boolean | movies$directorsArgs<ExtArgs>
    genres?: boolean | movies$genresArgs<ExtArgs>
  }
  export type moviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directors?: boolean | movies$directorsArgs<ExtArgs>
    genres?: boolean | movies$genresArgs<ExtArgs>
  }

  export type $moviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movies"
    objects: {
      directors: Prisma.$directorsPayload<ExtArgs> | null
      genres: Prisma.$genresPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      director_id: string | null
      description: string | null
      release_year: number | null
      genre_id: string | null
      rating: Prisma.Decimal | null
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }

  type moviesGetPayload<S extends boolean | null | undefined | moviesDefaultArgs> = $Result.GetResult<Prisma.$moviesPayload, S>

  type moviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface moviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movies'], meta: { name: 'movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {moviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moviesFindUniqueArgs>(args: SelectSubset<T, moviesFindUniqueArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moviesFindUniqueOrThrowArgs>(args: SelectSubset<T, moviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moviesFindFirstArgs>(args?: SelectSubset<T, moviesFindFirstArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moviesFindFirstOrThrowArgs>(args?: SelectSubset<T, moviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moviesFindManyArgs>(args?: SelectSubset<T, moviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movies.
     * @param {moviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
     */
    create<T extends moviesCreateArgs>(args: SelectSubset<T, moviesCreateArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {moviesCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moviesCreateManyArgs>(args?: SelectSubset<T, moviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {moviesCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends moviesCreateManyAndReturnArgs>(args?: SelectSubset<T, moviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movies.
     * @param {moviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
     */
    delete<T extends moviesDeleteArgs>(args: SelectSubset<T, moviesDeleteArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movies.
     * @param {moviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moviesUpdateArgs>(args: SelectSubset<T, moviesUpdateArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {moviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moviesDeleteManyArgs>(args?: SelectSubset<T, moviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moviesUpdateManyArgs>(args: SelectSubset<T, moviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {moviesUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends moviesUpdateManyAndReturnArgs>(args: SelectSubset<T, moviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movies.
     * @param {moviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     */
    upsert<T extends moviesUpsertArgs>(args: SelectSubset<T, moviesUpsertArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends moviesCountArgs>(
      args?: Subset<T, moviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesGroupByArgs} args - Group by arguments.
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
      T extends moviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moviesGroupByArgs['orderBy'] }
        : { orderBy?: moviesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, moviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movies model
   */
  readonly fields: moviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    directors<T extends movies$directorsArgs<ExtArgs> = {}>(args?: Subset<T, movies$directorsArgs<ExtArgs>>): Prisma__directorsClient<$Result.GetResult<Prisma.$directorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    genres<T extends movies$genresArgs<ExtArgs> = {}>(args?: Subset<T, movies$genresArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the movies model
   */
  interface moviesFieldRefs {
    readonly id: FieldRef<"movies", 'String'>
    readonly title: FieldRef<"movies", 'String'>
    readonly director_id: FieldRef<"movies", 'String'>
    readonly description: FieldRef<"movies", 'String'>
    readonly release_year: FieldRef<"movies", 'Int'>
    readonly genre_id: FieldRef<"movies", 'String'>
    readonly rating: FieldRef<"movies", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * movies findUnique
   */
  export type moviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies findUniqueOrThrow
   */
  export type moviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies findFirst
   */
  export type moviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies findFirstOrThrow
   */
  export type moviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies findMany
   */
  export type moviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies create
   */
  export type moviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to create a movies.
     */
    data: XOR<moviesCreateInput, moviesUncheckedCreateInput>
  }

  /**
   * movies createMany
   */
  export type moviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: moviesCreateManyInput | moviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movies createManyAndReturn
   */
  export type moviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * The data used to create many movies.
     */
    data: moviesCreateManyInput | moviesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * movies update
   */
  export type moviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to update a movies.
     */
    data: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
    /**
     * Choose, which movies to update.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies updateMany
   */
  export type moviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
  }

  /**
   * movies updateManyAndReturn
   */
  export type moviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * The data used to update movies.
     */
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * movies upsert
   */
  export type moviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The filter to search for the movies to update in case it exists.
     */
    where: moviesWhereUniqueInput
    /**
     * In case the movies found by the `where` argument doesn't exist, create a new movies with this data.
     */
    create: XOR<moviesCreateInput, moviesUncheckedCreateInput>
    /**
     * In case the movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
  }

  /**
   * movies delete
   */
  export type moviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter which movies to delete.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies deleteMany
   */
  export type moviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to delete.
     */
    limit?: number
  }

  /**
   * movies.directors
   */
  export type movies$directorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directors
     */
    select?: directorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directors
     */
    omit?: directorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directorsInclude<ExtArgs> | null
    where?: directorsWhereInput
  }

  /**
   * movies.genres
   */
  export type movies$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    where?: genresWhereInput
  }

  /**
   * movies without action
   */
  export type moviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
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


  export const DirectorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    biography: 'biography'
  };

  export type DirectorsScalarFieldEnum = (typeof DirectorsScalarFieldEnum)[keyof typeof DirectorsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    director_id: 'director_id',
    description: 'description',
    release_year: 'release_year',
    genre_id: 'genre_id',
    rating: 'rating'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type directorsWhereInput = {
    AND?: directorsWhereInput | directorsWhereInput[]
    OR?: directorsWhereInput[]
    NOT?: directorsWhereInput | directorsWhereInput[]
    id?: StringFilter<"directors"> | string
    name?: StringFilter<"directors"> | string
    biography?: StringNullableFilter<"directors"> | string | null
    movies?: MoviesListRelationFilter
  }

  export type directorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrderInput | SortOrder
    movies?: moviesOrderByRelationAggregateInput
  }

  export type directorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: directorsWhereInput | directorsWhereInput[]
    OR?: directorsWhereInput[]
    NOT?: directorsWhereInput | directorsWhereInput[]
    name?: StringFilter<"directors"> | string
    biography?: StringNullableFilter<"directors"> | string | null
    movies?: MoviesListRelationFilter
  }, "id">

  export type directorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrderInput | SortOrder
    _count?: directorsCountOrderByAggregateInput
    _max?: directorsMaxOrderByAggregateInput
    _min?: directorsMinOrderByAggregateInput
  }

  export type directorsScalarWhereWithAggregatesInput = {
    AND?: directorsScalarWhereWithAggregatesInput | directorsScalarWhereWithAggregatesInput[]
    OR?: directorsScalarWhereWithAggregatesInput[]
    NOT?: directorsScalarWhereWithAggregatesInput | directorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"directors"> | string
    name?: StringWithAggregatesFilter<"directors"> | string
    biography?: StringNullableWithAggregatesFilter<"directors"> | string | null
  }

  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    id?: StringFilter<"genres"> | string
    name?: StringFilter<"genres"> | string
    movies?: MoviesListRelationFilter
  }

  export type genresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    movies?: moviesOrderByRelationAggregateInput
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    name?: StringFilter<"genres"> | string
    movies?: MoviesListRelationFilter
  }, "id">

  export type genresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: genresCountOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"genres"> | string
    name?: StringWithAggregatesFilter<"genres"> | string
  }

  export type moviesWhereInput = {
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    id?: StringFilter<"movies"> | string
    title?: StringFilter<"movies"> | string
    director_id?: StringNullableFilter<"movies"> | string | null
    description?: StringNullableFilter<"movies"> | string | null
    release_year?: IntNullableFilter<"movies"> | number | null
    genre_id?: StringNullableFilter<"movies"> | string | null
    rating?: DecimalNullableFilter<"movies"> | Decimal | DecimalJsLike | number | string | null
    directors?: XOR<DirectorsNullableScalarRelationFilter, directorsWhereInput> | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
  }

  export type moviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    director_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    release_year?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    directors?: directorsOrderByWithRelationInput
    genres?: genresOrderByWithRelationInput
  }

  export type moviesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    title?: StringFilter<"movies"> | string
    director_id?: StringNullableFilter<"movies"> | string | null
    description?: StringNullableFilter<"movies"> | string | null
    release_year?: IntNullableFilter<"movies"> | number | null
    genre_id?: StringNullableFilter<"movies"> | string | null
    rating?: DecimalNullableFilter<"movies"> | Decimal | DecimalJsLike | number | string | null
    directors?: XOR<DirectorsNullableScalarRelationFilter, directorsWhereInput> | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
  }, "id">

  export type moviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    director_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    release_year?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    _count?: moviesCountOrderByAggregateInput
    _avg?: moviesAvgOrderByAggregateInput
    _max?: moviesMaxOrderByAggregateInput
    _min?: moviesMinOrderByAggregateInput
    _sum?: moviesSumOrderByAggregateInput
  }

  export type moviesScalarWhereWithAggregatesInput = {
    AND?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    OR?: moviesScalarWhereWithAggregatesInput[]
    NOT?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"movies"> | string
    title?: StringWithAggregatesFilter<"movies"> | string
    director_id?: StringNullableWithAggregatesFilter<"movies"> | string | null
    description?: StringNullableWithAggregatesFilter<"movies"> | string | null
    release_year?: IntNullableWithAggregatesFilter<"movies"> | number | null
    genre_id?: StringNullableWithAggregatesFilter<"movies"> | string | null
    rating?: DecimalNullableWithAggregatesFilter<"movies"> | Decimal | DecimalJsLike | number | string | null
  }

  export type directorsCreateInput = {
    id: string
    name: string
    biography?: string | null
    movies?: moviesCreateNestedManyWithoutDirectorsInput
  }

  export type directorsUncheckedCreateInput = {
    id: string
    name: string
    biography?: string | null
    movies?: moviesUncheckedCreateNestedManyWithoutDirectorsInput
  }

  export type directorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: moviesUpdateManyWithoutDirectorsNestedInput
  }

  export type directorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: moviesUncheckedUpdateManyWithoutDirectorsNestedInput
  }

  export type directorsCreateManyInput = {
    id: string
    name: string
    biography?: string | null
  }

  export type directorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type directorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresCreateInput = {
    id: string
    name: string
    movies?: moviesCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    id: string
    name: string
    movies?: moviesUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    movies?: moviesUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    movies?: moviesUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type genresCreateManyInput = {
    id: string
    name: string
  }

  export type genresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type genresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type moviesCreateInput = {
    id: string
    title: string
    description?: string | null
    release_year?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    directors?: directorsCreateNestedOneWithoutMoviesInput
    genres?: genresCreateNestedOneWithoutMoviesInput
  }

  export type moviesUncheckedCreateInput = {
    id: string
    title: string
    director_id?: string | null
    description?: string | null
    release_year?: number | null
    genre_id?: string | null
    rating?: Decimal | DecimalJsLike | number | string | null
  }

  export type moviesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    directors?: directorsUpdateOneWithoutMoviesNestedInput
    genres?: genresUpdateOneWithoutMoviesNestedInput
  }

  export type moviesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    director_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type moviesCreateManyInput = {
    id: string
    title: string
    director_id?: string | null
    description?: string | null
    release_year?: number | null
    genre_id?: string | null
    rating?: Decimal | DecimalJsLike | number | string | null
  }

  export type moviesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type moviesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    director_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MoviesListRelationFilter = {
    every?: moviesWhereInput
    some?: moviesWhereInput
    none?: moviesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type moviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type directorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrder
  }

  export type directorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrder
  }

  export type directorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    biography?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type genresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DirectorsNullableScalarRelationFilter = {
    is?: directorsWhereInput | null
    isNot?: directorsWhereInput | null
  }

  export type GenresNullableScalarRelationFilter = {
    is?: genresWhereInput | null
    isNot?: genresWhereInput | null
  }

  export type moviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    director_id?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    genre_id?: SortOrder
    rating?: SortOrder
  }

  export type moviesAvgOrderByAggregateInput = {
    release_year?: SortOrder
    rating?: SortOrder
  }

  export type moviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    director_id?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    genre_id?: SortOrder
    rating?: SortOrder
  }

  export type moviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    director_id?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    genre_id?: SortOrder
    rating?: SortOrder
  }

  export type moviesSumOrderByAggregateInput = {
    release_year?: SortOrder
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type moviesCreateNestedManyWithoutDirectorsInput = {
    create?: XOR<moviesCreateWithoutDirectorsInput, moviesUncheckedCreateWithoutDirectorsInput> | moviesCreateWithoutDirectorsInput[] | moviesUncheckedCreateWithoutDirectorsInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutDirectorsInput | moviesCreateOrConnectWithoutDirectorsInput[]
    createMany?: moviesCreateManyDirectorsInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUncheckedCreateNestedManyWithoutDirectorsInput = {
    create?: XOR<moviesCreateWithoutDirectorsInput, moviesUncheckedCreateWithoutDirectorsInput> | moviesCreateWithoutDirectorsInput[] | moviesUncheckedCreateWithoutDirectorsInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutDirectorsInput | moviesCreateOrConnectWithoutDirectorsInput[]
    createMany?: moviesCreateManyDirectorsInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type moviesUpdateManyWithoutDirectorsNestedInput = {
    create?: XOR<moviesCreateWithoutDirectorsInput, moviesUncheckedCreateWithoutDirectorsInput> | moviesCreateWithoutDirectorsInput[] | moviesUncheckedCreateWithoutDirectorsInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutDirectorsInput | moviesCreateOrConnectWithoutDirectorsInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutDirectorsInput | moviesUpsertWithWhereUniqueWithoutDirectorsInput[]
    createMany?: moviesCreateManyDirectorsInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutDirectorsInput | moviesUpdateWithWhereUniqueWithoutDirectorsInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutDirectorsInput | moviesUpdateManyWithWhereWithoutDirectorsInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesUncheckedUpdateManyWithoutDirectorsNestedInput = {
    create?: XOR<moviesCreateWithoutDirectorsInput, moviesUncheckedCreateWithoutDirectorsInput> | moviesCreateWithoutDirectorsInput[] | moviesUncheckedCreateWithoutDirectorsInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutDirectorsInput | moviesCreateOrConnectWithoutDirectorsInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutDirectorsInput | moviesUpsertWithWhereUniqueWithoutDirectorsInput[]
    createMany?: moviesCreateManyDirectorsInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutDirectorsInput | moviesUpdateWithWhereUniqueWithoutDirectorsInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutDirectorsInput | moviesUpdateManyWithWhereWithoutDirectorsInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesCreateNestedManyWithoutGenresInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUpdateManyWithoutGenresNestedInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutGenresInput | moviesUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutGenresInput | moviesUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutGenresInput | moviesUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutGenresInput | moviesUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutGenresInput | moviesUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutGenresInput | moviesUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type directorsCreateNestedOneWithoutMoviesInput = {
    create?: XOR<directorsCreateWithoutMoviesInput, directorsUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: directorsCreateOrConnectWithoutMoviesInput
    connect?: directorsWhereUniqueInput
  }

  export type genresCreateNestedOneWithoutMoviesInput = {
    create?: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: genresCreateOrConnectWithoutMoviesInput
    connect?: genresWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type directorsUpdateOneWithoutMoviesNestedInput = {
    create?: XOR<directorsCreateWithoutMoviesInput, directorsUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: directorsCreateOrConnectWithoutMoviesInput
    upsert?: directorsUpsertWithoutMoviesInput
    disconnect?: directorsWhereInput | boolean
    delete?: directorsWhereInput | boolean
    connect?: directorsWhereUniqueInput
    update?: XOR<XOR<directorsUpdateToOneWithWhereWithoutMoviesInput, directorsUpdateWithoutMoviesInput>, directorsUncheckedUpdateWithoutMoviesInput>
  }

  export type genresUpdateOneWithoutMoviesNestedInput = {
    create?: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: genresCreateOrConnectWithoutMoviesInput
    upsert?: genresUpsertWithoutMoviesInput
    disconnect?: genresWhereInput | boolean
    delete?: genresWhereInput | boolean
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutMoviesInput, genresUpdateWithoutMoviesInput>, genresUncheckedUpdateWithoutMoviesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type moviesCreateWithoutDirectorsInput = {
    id: string
    title: string
    description?: string | null
    release_year?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    genres?: genresCreateNestedOneWithoutMoviesInput
  }

  export type moviesUncheckedCreateWithoutDirectorsInput = {
    id: string
    title: string
    description?: string | null
    release_year?: number | null
    genre_id?: string | null
    rating?: Decimal | DecimalJsLike | number | string | null
  }

  export type moviesCreateOrConnectWithoutDirectorsInput = {
    where: moviesWhereUniqueInput
    create: XOR<moviesCreateWithoutDirectorsInput, moviesUncheckedCreateWithoutDirectorsInput>
  }

  export type moviesCreateManyDirectorsInputEnvelope = {
    data: moviesCreateManyDirectorsInput | moviesCreateManyDirectorsInput[]
    skipDuplicates?: boolean
  }

  export type moviesUpsertWithWhereUniqueWithoutDirectorsInput = {
    where: moviesWhereUniqueInput
    update: XOR<moviesUpdateWithoutDirectorsInput, moviesUncheckedUpdateWithoutDirectorsInput>
    create: XOR<moviesCreateWithoutDirectorsInput, moviesUncheckedCreateWithoutDirectorsInput>
  }

  export type moviesUpdateWithWhereUniqueWithoutDirectorsInput = {
    where: moviesWhereUniqueInput
    data: XOR<moviesUpdateWithoutDirectorsInput, moviesUncheckedUpdateWithoutDirectorsInput>
  }

  export type moviesUpdateManyWithWhereWithoutDirectorsInput = {
    where: moviesScalarWhereInput
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyWithoutDirectorsInput>
  }

  export type moviesScalarWhereInput = {
    AND?: moviesScalarWhereInput | moviesScalarWhereInput[]
    OR?: moviesScalarWhereInput[]
    NOT?: moviesScalarWhereInput | moviesScalarWhereInput[]
    id?: StringFilter<"movies"> | string
    title?: StringFilter<"movies"> | string
    director_id?: StringNullableFilter<"movies"> | string | null
    description?: StringNullableFilter<"movies"> | string | null
    release_year?: IntNullableFilter<"movies"> | number | null
    genre_id?: StringNullableFilter<"movies"> | string | null
    rating?: DecimalNullableFilter<"movies"> | Decimal | DecimalJsLike | number | string | null
  }

  export type moviesCreateWithoutGenresInput = {
    id: string
    title: string
    description?: string | null
    release_year?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
    directors?: directorsCreateNestedOneWithoutMoviesInput
  }

  export type moviesUncheckedCreateWithoutGenresInput = {
    id: string
    title: string
    director_id?: string | null
    description?: string | null
    release_year?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
  }

  export type moviesCreateOrConnectWithoutGenresInput = {
    where: moviesWhereUniqueInput
    create: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput>
  }

  export type moviesCreateManyGenresInputEnvelope = {
    data: moviesCreateManyGenresInput | moviesCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type moviesUpsertWithWhereUniqueWithoutGenresInput = {
    where: moviesWhereUniqueInput
    update: XOR<moviesUpdateWithoutGenresInput, moviesUncheckedUpdateWithoutGenresInput>
    create: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput>
  }

  export type moviesUpdateWithWhereUniqueWithoutGenresInput = {
    where: moviesWhereUniqueInput
    data: XOR<moviesUpdateWithoutGenresInput, moviesUncheckedUpdateWithoutGenresInput>
  }

  export type moviesUpdateManyWithWhereWithoutGenresInput = {
    where: moviesScalarWhereInput
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyWithoutGenresInput>
  }

  export type directorsCreateWithoutMoviesInput = {
    id: string
    name: string
    biography?: string | null
  }

  export type directorsUncheckedCreateWithoutMoviesInput = {
    id: string
    name: string
    biography?: string | null
  }

  export type directorsCreateOrConnectWithoutMoviesInput = {
    where: directorsWhereUniqueInput
    create: XOR<directorsCreateWithoutMoviesInput, directorsUncheckedCreateWithoutMoviesInput>
  }

  export type genresCreateWithoutMoviesInput = {
    id: string
    name: string
  }

  export type genresUncheckedCreateWithoutMoviesInput = {
    id: string
    name: string
  }

  export type genresCreateOrConnectWithoutMoviesInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
  }

  export type directorsUpsertWithoutMoviesInput = {
    update: XOR<directorsUpdateWithoutMoviesInput, directorsUncheckedUpdateWithoutMoviesInput>
    create: XOR<directorsCreateWithoutMoviesInput, directorsUncheckedCreateWithoutMoviesInput>
    where?: directorsWhereInput
  }

  export type directorsUpdateToOneWithWhereWithoutMoviesInput = {
    where?: directorsWhereInput
    data: XOR<directorsUpdateWithoutMoviesInput, directorsUncheckedUpdateWithoutMoviesInput>
  }

  export type directorsUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type directorsUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUpsertWithoutMoviesInput = {
    update: XOR<genresUpdateWithoutMoviesInput, genresUncheckedUpdateWithoutMoviesInput>
    create: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutMoviesInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutMoviesInput, genresUncheckedUpdateWithoutMoviesInput>
  }

  export type genresUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type genresUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type moviesCreateManyDirectorsInput = {
    id: string
    title: string
    description?: string | null
    release_year?: number | null
    genre_id?: string | null
    rating?: Decimal | DecimalJsLike | number | string | null
  }

  export type moviesUpdateWithoutDirectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    genres?: genresUpdateOneWithoutMoviesNestedInput
  }

  export type moviesUncheckedUpdateWithoutDirectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type moviesUncheckedUpdateManyWithoutDirectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type moviesCreateManyGenresInput = {
    id: string
    title: string
    director_id?: string | null
    description?: string | null
    release_year?: number | null
    rating?: Decimal | DecimalJsLike | number | string | null
  }

  export type moviesUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    directors?: directorsUpdateOneWithoutMoviesNestedInput
  }

  export type moviesUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    director_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type moviesUncheckedUpdateManyWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    director_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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