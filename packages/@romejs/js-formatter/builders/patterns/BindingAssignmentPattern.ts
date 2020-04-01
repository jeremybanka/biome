/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {Tokens, space, operator} from '../../tokens';
import {
  BindingAssignmentPattern,
  bindingAssignmentPattern,
  AnyNode,
} from '@romejs/js-ast';

export default function BindingAssignmentPattern(
  builder: Builder,
  node: AnyNode,
): Tokens {
  node = bindingAssignmentPattern.assert(node);

  return [
    ...builder.tokenize(node.left, node),
    space,
    operator('='),
    space,
    ...builder.tokenize(node.right, node),
  ];
}
