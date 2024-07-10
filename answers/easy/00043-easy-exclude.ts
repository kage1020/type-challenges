/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #初級 #built-in #union

  ### 質問

  組み込みの型ユーティリティ`Exclude <T, U>`を使用せず、`U`に割り当て可能な型を`T`から除外する型を実装します。

  例えば：

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > GitHubで確認する：https://tsch.js.org/43/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MyExclude<T, U> = T extends U ? never : T

// T extends UはTの各要素に対して検証を行う
// TのサブタイプがそれぞれUにassignしてそれらのunionが最終的な型になる?
// MyExclude<'a' | 'b', 'a' | 'c'> = MyExclude<'a', 'a' | 'c'> | MyExclude<'b', 'a' | 'c'> = never | 'b' = 'b'

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/43/answer/ja
  > 解答を見る：https://tsch.js.org/43/solutions
  > その他の課題：https://tsch.js.org/ja
*/
