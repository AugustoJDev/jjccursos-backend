
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
 * Model PaymentHistory
 * 
 */
export type PaymentHistory = $Result.DefaultSelection<Prisma.$PaymentHistoryPayload>
/**
 * Model Plans
 * 
 */
export type Plans = $Result.DefaultSelection<Prisma.$PlansPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PaymentHistories
 * const paymentHistories = await prisma.paymentHistory.findMany()
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
   * // Fetch zero or more PaymentHistories
   * const paymentHistories = await prisma.paymentHistory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.paymentHistory`: Exposes CRUD operations for the **PaymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentHistories
    * const paymentHistories = await prisma.paymentHistory.findMany()
    * ```
    */
  get paymentHistory(): Prisma.PaymentHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plans`: Exposes CRUD operations for the **Plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plans.findMany()
    * ```
    */
  get plans(): Prisma.PlansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    PaymentHistory: 'PaymentHistory',
    Plans: 'Plans',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "paymentHistory" | "plans" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentHistory: {
        payload: Prisma.$PaymentHistoryPayload<ExtArgs>
        fields: Prisma.PaymentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findFirst: {
            args: Prisma.PaymentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findMany: {
            args: Prisma.PaymentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          create: {
            args: Prisma.PaymentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          createMany: {
            args: Prisma.PaymentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          delete: {
            args: Prisma.PaymentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          update: {
            args: Prisma.PaymentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PaymentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PaymentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          aggregate: {
            args: Prisma.PaymentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentHistory>
          }
          groupBy: {
            args: Prisma.PaymentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryCountAggregateOutputType> | number
          }
        }
      }
      Plans: {
        payload: Prisma.$PlansPayload<ExtArgs>
        fields: Prisma.PlansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findFirst: {
            args: Prisma.PlansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findMany: {
            args: Prisma.PlansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          create: {
            args: Prisma.PlansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          createMany: {
            args: Prisma.PlansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          delete: {
            args: Prisma.PlansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          update: {
            args: Prisma.PlansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          deleteMany: {
            args: Prisma.PlansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          upsert: {
            args: Prisma.PlansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          aggregate: {
            args: Prisma.PlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlans>
          }
          groupBy: {
            args: Prisma.PlansGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlansCountArgs<ExtArgs>
            result: $Utils.Optional<PlansCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    paymentHistory?: PaymentHistoryOmit
    plans?: PlansOmit
    user?: UserOmit
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
   * Count Type PlansCountOutputType
   */

  export type PlansCountOutputType = {
    paymentHistory: number
  }

  export type PlansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentHistory?: boolean | PlansCountOutputTypeCountPaymentHistoryArgs
  }

  // Custom InputTypes
  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlansCountOutputType
     */
    select?: PlansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountPaymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    paymentHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentHistory?: boolean | UserCountOutputTypeCountPaymentHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PaymentHistory
   */

  export type AggregatePaymentHistory = {
    _count: PaymentHistoryCountAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  export type PaymentHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    createdAt: Date | null
  }

  export type PaymentHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    createdAt: Date | null
  }

  export type PaymentHistoryCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    createdAt: number
    _all: number
  }


  export type PaymentHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
  }

  export type PaymentHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
  }

  export type PaymentHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistory to aggregate.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentHistories
    **/
    _count?: true | PaymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type GetPaymentHistoryAggregateType<T extends PaymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentHistory[P]>
      : GetScalarType<T[P], AggregatePaymentHistory[P]>
  }




  export type PaymentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithAggregationInput | PaymentHistoryOrderByWithAggregationInput[]
    by: PaymentHistoryScalarFieldEnum[] | PaymentHistoryScalarFieldEnum
    having?: PaymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentHistoryCountAggregateInputType | true
    _min?: PaymentHistoryMinAggregateInputType
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type PaymentHistoryGroupByOutputType = {
    id: string
    userId: string
    planId: string
    createdAt: Date
    _count: PaymentHistoryCountAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  type GetPaymentHistoryGroupByPayload<T extends PaymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
  }

  export type PaymentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "createdAt", ExtArgs["result"]["paymentHistory"]>
  export type PaymentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }
  export type PaymentHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }
  export type PaymentHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlansDefaultArgs<ExtArgs>
  }

  export type $PaymentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$PlansPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      createdAt: Date
    }, ExtArgs["result"]["paymentHistory"]>
    composites: {}
  }

  type PaymentHistoryGetPayload<S extends boolean | null | undefined | PaymentHistoryDefaultArgs> = $Result.GetResult<Prisma.$PaymentHistoryPayload, S>

  type PaymentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentHistoryCountAggregateInputType | true
    }

  export interface PaymentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentHistory'], meta: { name: 'PaymentHistory' } }
    /**
     * Find zero or one PaymentHistory that matches the filter.
     * @param {PaymentHistoryFindUniqueArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentHistoryFindUniqueArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PaymentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PaymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentHistoryFindFirstArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PaymentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany()
     * 
     * // Get first 10 PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentHistoryFindManyArgs>(args?: SelectSubset<T, PaymentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PaymentHistory.
     * @param {PaymentHistoryCreateArgs} args - Arguments to create a PaymentHistory.
     * @example
     * // Create one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.create({
     *   data: {
     *     // ... data to create a PaymentHistory
     *   }
     * })
     * 
     */
    create<T extends PaymentHistoryCreateArgs>(args: SelectSubset<T, PaymentHistoryCreateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PaymentHistories.
     * @param {PaymentHistoryCreateManyArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentHistoryCreateManyArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentHistories and returns the data saved in the database.
     * @param {PaymentHistoryCreateManyAndReturnArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentHistories and only return the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PaymentHistory.
     * @param {PaymentHistoryDeleteArgs} args - Arguments to delete one PaymentHistory.
     * @example
     * // Delete one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentHistory
     *   }
     * })
     * 
     */
    delete<T extends PaymentHistoryDeleteArgs>(args: SelectSubset<T, PaymentHistoryDeleteArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PaymentHistory.
     * @param {PaymentHistoryUpdateArgs} args - Arguments to update one PaymentHistory.
     * @example
     * // Update one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentHistoryUpdateArgs>(args: SelectSubset<T, PaymentHistoryUpdateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PaymentHistories.
     * @param {PaymentHistoryDeleteManyArgs} args - Arguments to filter PaymentHistories to delete.
     * @example
     * // Delete a few PaymentHistories
     * const { count } = await prisma.paymentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentHistoryDeleteManyArgs>(args?: SelectSubset<T, PaymentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentHistoryUpdateManyArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories and returns the data updated in the database.
     * @param {PaymentHistoryUpdateManyAndReturnArgs} args - Arguments to update many PaymentHistories.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentHistories and only return the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PaymentHistory.
     * @param {PaymentHistoryUpsertArgs} args - Arguments to update or create a PaymentHistory.
     * @example
     * // Update or create a PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentHistory we want to update
     *   }
     * })
     */
    upsert<T extends PaymentHistoryUpsertArgs>(args: SelectSubset<T, PaymentHistoryUpsertArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryCountArgs} args - Arguments to filter PaymentHistories to count.
     * @example
     * // Count the number of PaymentHistories
     * const count = await prisma.paymentHistory.count({
     *   where: {
     *     // ... the filter for the PaymentHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentHistoryCountArgs>(
      args?: Subset<T, PaymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentHistoryAggregateArgs>(args: Subset<T, PaymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentHistoryAggregateType<T>>

    /**
     * Group by PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryGroupByArgs} args - Group by arguments.
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
      T extends PaymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentHistory model
   */
  readonly fields: PaymentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    plan<T extends PlansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlansDefaultArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the PaymentHistory model
   */ 
  interface PaymentHistoryFieldRefs {
    readonly id: FieldRef<"PaymentHistory", 'String'>
    readonly userId: FieldRef<"PaymentHistory", 'String'>
    readonly planId: FieldRef<"PaymentHistory", 'String'>
    readonly createdAt: FieldRef<"PaymentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentHistory findUnique
   */
  export type PaymentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findUniqueOrThrow
   */
  export type PaymentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findFirst
   */
  export type PaymentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findFirstOrThrow
   */
  export type PaymentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findMany
   */
  export type PaymentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistories to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory create
   */
  export type PaymentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentHistory.
     */
    data: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
  }

  /**
   * PaymentHistory createMany
   */
  export type PaymentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentHistory createManyAndReturn
   */
  export type PaymentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentHistory update
   */
  export type PaymentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentHistory.
     */
    data: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentHistory to update.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory updateMany
   */
  export type PaymentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to update.
     */
    limit?: number
  }

  /**
   * PaymentHistory updateManyAndReturn
   */
  export type PaymentHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentHistory upsert
   */
  export type PaymentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentHistory to update in case it exists.
     */
    where: PaymentHistoryWhereUniqueInput
    /**
     * In case the PaymentHistory found by the `where` argument doesn't exist, create a new PaymentHistory with this data.
     */
    create: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
    /**
     * In case the PaymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
  }

  /**
   * PaymentHistory delete
   */
  export type PaymentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter which PaymentHistory to delete.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory deleteMany
   */
  export type PaymentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistories to delete
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to delete.
     */
    limit?: number
  }

  /**
   * PaymentHistory without action
   */
  export type PaymentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Plans
   */

  export type AggregatePlans = {
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  export type PlansAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type PlansSumAggregateOutputType = {
    price: Decimal | null
  }

  export type PlansMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type PlansMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type PlansCountAggregateOutputType = {
    id: number
    name: number
    price: number
    createdAt: number
    _all: number
  }


  export type PlansAvgAggregateInputType = {
    price?: true
  }

  export type PlansSumAggregateInputType = {
    price?: true
  }

  export type PlansMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
  }

  export type PlansMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
  }

  export type PlansCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type PlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to aggregate.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlansMaxAggregateInputType
  }

  export type GetPlansAggregateType<T extends PlansAggregateArgs> = {
        [P in keyof T & keyof AggregatePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlans[P]>
      : GetScalarType<T[P], AggregatePlans[P]>
  }




  export type PlansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlansWhereInput
    orderBy?: PlansOrderByWithAggregationInput | PlansOrderByWithAggregationInput[]
    by: PlansScalarFieldEnum[] | PlansScalarFieldEnum
    having?: PlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlansCountAggregateInputType | true
    _avg?: PlansAvgAggregateInputType
    _sum?: PlansSumAggregateInputType
    _min?: PlansMinAggregateInputType
    _max?: PlansMaxAggregateInputType
  }

  export type PlansGroupByOutputType = {
    id: string
    name: string
    price: Decimal
    createdAt: Date
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  type GetPlansGroupByPayload<T extends PlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlansGroupByOutputType[P]>
            : GetScalarType<T[P], PlansGroupByOutputType[P]>
        }
      >
    >


  export type PlansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    paymentHistory?: boolean | Plans$paymentHistoryArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type PlansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "createdAt", ExtArgs["result"]["plans"]>
  export type PlansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentHistory?: boolean | Plans$paymentHistoryArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plans"
    objects: {
      paymentHistory: Prisma.$PaymentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["plans"]>
    composites: {}
  }

  type PlansGetPayload<S extends boolean | null | undefined | PlansDefaultArgs> = $Result.GetResult<Prisma.$PlansPayload, S>

  type PlansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlansCountAggregateInputType | true
    }

  export interface PlansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plans'], meta: { name: 'Plans' } }
    /**
     * Find zero or one Plans that matches the filter.
     * @param {PlansFindUniqueArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlansFindUniqueArgs>(args: SelectSubset<T, PlansFindUniqueArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlansFindUniqueOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlansFindUniqueOrThrowArgs>(args: SelectSubset<T, PlansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlansFindFirstArgs>(args?: SelectSubset<T, PlansFindFirstArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlansFindFirstOrThrowArgs>(args?: SelectSubset<T, PlansFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plans.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plansWithIdOnly = await prisma.plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlansFindManyArgs>(args?: SelectSubset<T, PlansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Plans.
     * @param {PlansCreateArgs} args - Arguments to create a Plans.
     * @example
     * // Create one Plans
     * const Plans = await prisma.plans.create({
     *   data: {
     *     // ... data to create a Plans
     *   }
     * })
     * 
     */
    create<T extends PlansCreateArgs>(args: SelectSubset<T, PlansCreateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Plans.
     * @param {PlansCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlansCreateManyArgs>(args?: SelectSubset<T, PlansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlansCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlansCreateManyAndReturnArgs>(args?: SelectSubset<T, PlansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Plans.
     * @param {PlansDeleteArgs} args - Arguments to delete one Plans.
     * @example
     * // Delete one Plans
     * const Plans = await prisma.plans.delete({
     *   where: {
     *     // ... filter to delete one Plans
     *   }
     * })
     * 
     */
    delete<T extends PlansDeleteArgs>(args: SelectSubset<T, PlansDeleteArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Plans.
     * @param {PlansUpdateArgs} args - Arguments to update one Plans.
     * @example
     * // Update one Plans
     * const plans = await prisma.plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlansUpdateArgs>(args: SelectSubset<T, PlansUpdateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlansDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlansDeleteManyArgs>(args?: SelectSubset<T, PlansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlansUpdateManyArgs>(args: SelectSubset<T, PlansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlansUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlansUpdateManyAndReturnArgs>(args: SelectSubset<T, PlansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Plans.
     * @param {PlansUpsertArgs} args - Arguments to update or create a Plans.
     * @example
     * // Update or create a Plans
     * const plans = await prisma.plans.upsert({
     *   create: {
     *     // ... data to create a Plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plans we want to update
     *   }
     * })
     */
    upsert<T extends PlansUpsertArgs>(args: SelectSubset<T, PlansUpsertArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plans.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlansCountArgs>(
      args?: Subset<T, PlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlansAggregateArgs>(args: Subset<T, PlansAggregateArgs>): Prisma.PrismaPromise<GetPlansAggregateType<T>>

    /**
     * Group by Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansGroupByArgs} args - Group by arguments.
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
      T extends PlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlansGroupByArgs['orderBy'] }
        : { orderBy?: PlansGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plans model
   */
  readonly fields: PlansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentHistory<T extends Plans$paymentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Plans$paymentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Plans model
   */ 
  interface PlansFieldRefs {
    readonly id: FieldRef<"Plans", 'String'>
    readonly name: FieldRef<"Plans", 'String'>
    readonly price: FieldRef<"Plans", 'Decimal'>
    readonly createdAt: FieldRef<"Plans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plans findUnique
   */
  export type PlansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findUniqueOrThrow
   */
  export type PlansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findFirst
   */
  export type PlansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findFirstOrThrow
   */
  export type PlansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findMany
   */
  export type PlansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans create
   */
  export type PlansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to create a Plans.
     */
    data: XOR<PlansCreateInput, PlansUncheckedCreateInput>
  }

  /**
   * Plans createMany
   */
  export type PlansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plans createManyAndReturn
   */
  export type PlansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plans update
   */
  export type PlansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to update a Plans.
     */
    data: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
    /**
     * Choose, which Plans to update.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans updateMany
   */
  export type PlansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plans updateManyAndReturn
   */
  export type PlansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plans upsert
   */
  export type PlansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The filter to search for the Plans to update in case it exists.
     */
    where: PlansWhereUniqueInput
    /**
     * In case the Plans found by the `where` argument doesn't exist, create a new Plans with this data.
     */
    create: XOR<PlansCreateInput, PlansUncheckedCreateInput>
    /**
     * In case the Plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
  }

  /**
   * Plans delete
   */
  export type PlansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter which Plans to delete.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans deleteMany
   */
  export type PlansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plans.paymentHistory
   */
  export type Plans$paymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * Plans without action
   */
  export type PlansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    phone: string | null
    plan: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    phone: string | null
    plan: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    cpf: number
    phone: number
    plan: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    phone?: true
    plan?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    phone?: true
    plan?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    phone?: true
    plan?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    plan: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    phone?: boolean
    plan?: boolean
    createdAt?: boolean
    paymentHistory?: boolean | User$paymentHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    phone?: boolean
    plan?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    phone?: boolean
    plan?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    phone?: boolean
    plan?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "cpf" | "phone" | "plan" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentHistory?: boolean | User$paymentHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      paymentHistory: Prisma.$PaymentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      cpf: string
      phone: string
      plan: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentHistory<T extends User$paymentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly plan: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.paymentHistory
   */
  export type User$paymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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


  export const PaymentHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    createdAt: 'createdAt'
  };

  export type PaymentHistoryScalarFieldEnum = (typeof PaymentHistoryScalarFieldEnum)[keyof typeof PaymentHistoryScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    cpf: 'cpf',
    phone: 'phone',
    plan: 'plan',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PaymentHistoryWhereInput = {
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    id?: StringFilter<"PaymentHistory"> | string
    userId?: StringFilter<"PaymentHistory"> | string
    planId?: StringFilter<"PaymentHistory"> | string
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlansScalarRelationFilter, PlansWhereInput>
  }

  export type PaymentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: PlansOrderByWithRelationInput
  }

  export type PaymentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    userId?: StringFilter<"PaymentHistory"> | string
    planId?: StringFilter<"PaymentHistory"> | string
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlansScalarRelationFilter, PlansWhereInput>
  }, "id">

  export type PaymentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentHistoryCountOrderByAggregateInput
    _max?: PaymentHistoryMaxOrderByAggregateInput
    _min?: PaymentHistoryMinOrderByAggregateInput
  }

  export type PaymentHistoryScalarWhereWithAggregatesInput = {
    AND?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    OR?: PaymentHistoryScalarWhereWithAggregatesInput[]
    NOT?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentHistory"> | string
    userId?: StringWithAggregatesFilter<"PaymentHistory"> | string
    planId?: StringWithAggregatesFilter<"PaymentHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
  }

  export type PlansWhereInput = {
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    id?: StringFilter<"Plans"> | string
    name?: StringFilter<"Plans"> | string
    price?: DecimalFilter<"Plans"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Plans"> | Date | string
    paymentHistory?: PaymentHistoryListRelationFilter
  }

  export type PlansOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    paymentHistory?: PaymentHistoryOrderByRelationAggregateInput
  }

  export type PlansWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    name?: StringFilter<"Plans"> | string
    price?: DecimalFilter<"Plans"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Plans"> | Date | string
    paymentHistory?: PaymentHistoryListRelationFilter
  }, "id">

  export type PlansOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: PlansCountOrderByAggregateInput
    _avg?: PlansAvgOrderByAggregateInput
    _max?: PlansMaxOrderByAggregateInput
    _min?: PlansMinOrderByAggregateInput
    _sum?: PlansSumOrderByAggregateInput
  }

  export type PlansScalarWhereWithAggregatesInput = {
    AND?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    OR?: PlansScalarWhereWithAggregatesInput[]
    NOT?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plans"> | string
    name?: StringWithAggregatesFilter<"Plans"> | string
    price?: DecimalWithAggregatesFilter<"Plans"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Plans"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    plan?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    paymentHistory?: PaymentHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    paymentHistory?: PaymentHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    plan?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    paymentHistory?: PaymentHistoryListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    plan?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PaymentHistoryCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentHistoryInput
    plan: PlansCreateNestedOneWithoutPaymentHistoryInput
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
    plan?: PlansUpdateOneRequiredWithoutPaymentHistoryNestedInput
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateManyInput = {
    id?: string
    userId: string
    planId: string
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlansCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutPlanInput
  }

  export type PlansUncheckedCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlansUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentHistory?: PaymentHistoryUpdateManyWithoutPlanNestedInput
  }

  export type PlansUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlansCreateManyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PlansUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlansUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    plan?: string
    createdAt?: Date | string
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    plan?: string
    createdAt?: Date | string
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentHistory?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    plan?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlansScalarRelationFilter = {
    is?: PlansWhereInput
    isNot?: PlansWhereInput
  }

  export type PaymentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PaymentHistoryListRelationFilter = {
    every?: PaymentHistoryWhereInput
    some?: PaymentHistoryWhereInput
    none?: PaymentHistoryWhereInput
  }

  export type PaymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlansCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PlansAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PlansMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PlansMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PlansSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutPaymentHistoryInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type PlansCreateNestedOneWithoutPaymentHistoryInput = {
    create?: XOR<PlansCreateWithoutPaymentHistoryInput, PlansUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: PlansCreateOrConnectWithoutPaymentHistoryInput
    connect?: PlansWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPaymentHistoryNestedInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    upsert?: UserUpsertWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentHistoryInput, UserUpdateWithoutPaymentHistoryInput>, UserUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type PlansUpdateOneRequiredWithoutPaymentHistoryNestedInput = {
    create?: XOR<PlansCreateWithoutPaymentHistoryInput, PlansUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: PlansCreateOrConnectWithoutPaymentHistoryInput
    upsert?: PlansUpsertWithoutPaymentHistoryInput
    connect?: PlansWhereUniqueInput
    update?: XOR<XOR<PlansUpdateToOneWithWhereWithoutPaymentHistoryInput, PlansUpdateWithoutPaymentHistoryInput>, PlansUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type PaymentHistoryCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentHistoryCreateWithoutPlanInput, PaymentHistoryUncheckedCreateWithoutPlanInput> | PaymentHistoryCreateWithoutPlanInput[] | PaymentHistoryUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutPlanInput | PaymentHistoryCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentHistoryCreateManyPlanInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentHistoryCreateWithoutPlanInput, PaymentHistoryUncheckedCreateWithoutPlanInput> | PaymentHistoryCreateWithoutPlanInput[] | PaymentHistoryUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutPlanInput | PaymentHistoryCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentHistoryCreateManyPlanInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PaymentHistoryUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutPlanInput, PaymentHistoryUncheckedCreateWithoutPlanInput> | PaymentHistoryCreateWithoutPlanInput[] | PaymentHistoryUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutPlanInput | PaymentHistoryCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutPlanInput | PaymentHistoryUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentHistoryCreateManyPlanInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutPlanInput | PaymentHistoryUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutPlanInput | PaymentHistoryUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutPlanInput, PaymentHistoryUncheckedCreateWithoutPlanInput> | PaymentHistoryCreateWithoutPlanInput[] | PaymentHistoryUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutPlanInput | PaymentHistoryCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutPlanInput | PaymentHistoryUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentHistoryCreateManyPlanInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutPlanInput | PaymentHistoryUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutPlanInput | PaymentHistoryUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type PaymentHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type PaymentHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutUserInput | PaymentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutUserInput | PaymentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateWithoutPaymentHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    plan?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPaymentHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    plan?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPaymentHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
  }

  export type PlansCreateWithoutPaymentHistoryInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PlansUncheckedCreateWithoutPaymentHistoryInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PlansCreateOrConnectWithoutPaymentHistoryInput = {
    where: PlansWhereUniqueInput
    create: XOR<PlansCreateWithoutPaymentHistoryInput, PlansUncheckedCreateWithoutPaymentHistoryInput>
  }

  export type UserUpsertWithoutPaymentHistoryInput = {
    update: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type UserUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlansUpsertWithoutPaymentHistoryInput = {
    update: XOR<PlansUpdateWithoutPaymentHistoryInput, PlansUncheckedUpdateWithoutPaymentHistoryInput>
    create: XOR<PlansCreateWithoutPaymentHistoryInput, PlansUncheckedCreateWithoutPaymentHistoryInput>
    where?: PlansWhereInput
  }

  export type PlansUpdateToOneWithWhereWithoutPaymentHistoryInput = {
    where?: PlansWhereInput
    data: XOR<PlansUpdateWithoutPaymentHistoryInput, PlansUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type PlansUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlansUncheckedUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentHistoryInput
  }

  export type PaymentHistoryUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutPlanInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutPlanInput, PaymentHistoryUncheckedCreateWithoutPlanInput>
  }

  export type PaymentHistoryCreateManyPlanInputEnvelope = {
    data: PaymentHistoryCreateManyPlanInput | PaymentHistoryCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutPlanInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutPlanInput, PaymentHistoryUncheckedUpdateWithoutPlanInput>
    create: XOR<PaymentHistoryCreateWithoutPlanInput, PaymentHistoryUncheckedCreateWithoutPlanInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutPlanInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutPlanInput, PaymentHistoryUncheckedUpdateWithoutPlanInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutPlanInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutPlanInput>
  }

  export type PaymentHistoryScalarWhereInput = {
    AND?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    OR?: PaymentHistoryScalarWhereInput[]
    NOT?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    id?: StringFilter<"PaymentHistory"> | string
    userId?: StringFilter<"PaymentHistory"> | string
    planId?: StringFilter<"PaymentHistory"> | string
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
  }

  export type PaymentHistoryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    plan: PlansCreateNestedOneWithoutPaymentHistoryInput
  }

  export type PaymentHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentHistoryCreateManyUserInputEnvelope = {
    data: PaymentHistoryCreateManyUserInput | PaymentHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutUserInput, PaymentHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutUserInput, PaymentHistoryUncheckedUpdateWithoutUserInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutUserInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentHistoryCreateManyPlanInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
  }

  export type PaymentHistoryUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateManyUserInput = {
    id?: string
    planId: string
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlansUpdateOneRequiredWithoutPaymentHistoryNestedInput
  }

  export type PaymentHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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