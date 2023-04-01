import { memo } from 'react';
import type { FC } from 'react';

import resets from '../App.css';
import classes from './Vector.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:212 */
export const Vector: FC<Props> = memo(function Vector(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <>
        <VectorIcon className={classes.icon} />
      </>
    </div>
  );
});
